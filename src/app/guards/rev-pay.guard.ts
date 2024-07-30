import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


export const revPayGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  const toastr = inject(ToastrService)
  let paid = localStorage.getItem('paid')
  // let paid = window.paid
  
  
  if(paid == 'true'){
    // _router.navigate(['/confirm'])
    toastr.info('Payment Completed!','Guard Log');
    return false
  }

  return true;
};
