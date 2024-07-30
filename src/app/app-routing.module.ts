import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageComponent } from './package/package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';

import { HomeComponent } from './home/home.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BookingComponent } from './booking/booking.component';
import { DemoComponent } from './demo/demo.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { revAuthGuard } from './guards/rev-auth.guard';
import { payGuard } from './guards/pay.guard';
import { revPayGuard } from './guards/rev-pay.guard';
import { LadakhComponent } from './ladakh/ladakh.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackageComponent },
  { path: 'bike-trips', component: GalleryComponent },
  { path: 'review', component: ReviewComponent },
  // { path: 'package-details/:location', component: PackageDetailsComponent },
  { path: 'package-details/:id', component: PackageDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  {path: "confirm", component: ConfirmComponent,canActivate: [payGuard]},
  {path: "booking", component: BookingComponent,canActivate: [authGuard]},
  {path: "demo", component: DemoComponent},
  {path: "invoice", component: InvoiceComponent},
  {path: "payment", component: PaymentComponent,canActivate: [authGuard,revPayGuard]},
  {path: "login", component: LoginComponent,canActivate: [revAuthGuard]},
  {path: "register", component: RegisterComponent,canActivate: [revAuthGuard]},
  {path: "**",component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }