import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild, viewChild,OnInit, defineInjectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  data:any;
  @ViewChild('paymentRef',{static:true}) paymentRef: ElementRef;


  ngOnInit(): void {
    // connecting to Paypal
      this.data = history.state.package
      window.paypal.Buttons(
        {
          style:{
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: (data: any,actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.data.price * this.data.count,
                    currency_code: 'USD'
                  }
                }
              ]
            })
          },
          onApprove: (data: any,actions: any) => {
            return actions.order.capture().then((details:any) => {
              if(details.status === 'COMPLETED'){
                localStorage.setItem("paid","true")
                window.paid = true
                this.data['payment'] = 'Completed'

                let trans = Math.random().toString(16).slice(2);
                this.data['trans_id'] = trans;
                this.router.navigate(['confirm'], {state: {package: this.data}})
                this.toastr.info('Payment Completed!','Payment Log');


                // sending invoice email
                let val = this.data;

                emailjs.init({
                  publicKey: 'ppL6X_jb_pHhMksgq',
                });
            
                emailjs.send("service_736hcfo","template_5rfofnl",{
                trans_id: trans,
                name: val.firstName,
                fullName: val.firstName + " " + val.lastName,
                email: val.email,
                package: val.title,
                date: val.date,
                count: val.count,
                phno: val.phno,
                amount: val.price * val.count,
                paid: val.payment,
                }).then(() => {
                  this.toastr.success('Invoice Generated!', 'Payment Log');
                },err => {
                  this.toastr.error(err.message,"Error Log")
                });
              }
            })
          },
          onError: (error:any) => {
            console.log(error)
          }
        }
      ).render(this.paymentRef.nativeElement);
  }

  amount: string;

  constructor(
    private router:Router,
    private store: AuthService,
    private toastr: ToastrService,
  ){
  }
}
