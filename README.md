# TripNow (Relanto Angular Assignment)
TripNow Website with 8 travel packages. 

Made using :
- Angular 17
-  Firebase (for authentication)
-  Firestore (backend storage for wishlist and bookinglist feature)
-  EmailJS (to mail invoice to user's mail id)
-  Toastr module (custom angular alerts) 
-  Paypal payment gateway
-  Auth Guards
-  State management (Dynamic content rendering in same component, DRY)
-  Selenium (for testing purposes)
-  Angular Material, Angular Material Icons, Bootstrap (for styling)
-  Google Fonts

Features Implemented:
- Clean and User-friendly Home page
- Dummy Contact Us form
- Package page with searching and add/remove from wishlist functionality.
- Form validations in every form used in the website using both FormsModule & ReactiveFormsModule.
- Login/register, Payment auth guards to secure user details.
- Dynamic rendering of a template (all package details are views from the same component using history.state functionality in angular).
- Book now and payment page clean UI (with reverse auth guard to avoid back navigation and dynamic rendering)
- Paypal payment gateway
- Invoice page once payment is successful
- Mailing of invoice to mail ID submitted by the user.
- Adding the booking to the booking list.
- Profile page with logout/sign-in, user log session details, Booking List (with in-built invoice page if clicked), and wishlist functionality.
- Not Found page
- Package details page 
- Bike trip and reviews page
