import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookComponent } from './book/book.component';
import { PackageComponent } from './package/package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';
import { BrandComponent } from './brand/brand.component';
import { FooterComponent } from './footer/footer.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { LowestPriceDialogComponent } from './lowest-price-dialog/lowest-price-dialog.component';
import { RapComponent } from './rap/rap.component';
import { CancelComponent } from './cancel/cancel.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { BookingComponent } from './booking/booking.component';
import { DemoComponent } from './demo/demo.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {environment} from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LadakhComponent } from './ladakh/ladakh.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    PackageComponent,
    GalleryComponent,
    ReviewComponent,
    BrandComponent,
    FooterComponent,
    PackageDetailsComponent,
    PhotoGalleryComponent,
    LowestPriceDialogComponent,
    RapComponent,
    CancelComponent,
    ConfirmComponent,
    BookingComponent,
    DemoComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    NotFoundComponent,
    LadakhComponent,
    ProfileComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CommonModule,
    GalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
