import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const revAuthGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  const toastr = inject(ToastrService)
  let isLoggedIn = window.isLoggedIn
  // let isLoggedIn = window.isLoggedIn

  if(window.bookRoute == true && isLoggedIn == true){
    _router.navigate(['/booking'],{state: {package : history.state.package}})
    toastr.info('Already Logged In!','Guard Log');
    return false
  }
  
  if(isLoggedIn == true){
    _router.navigate(['/'])
    toastr.info('Already Logged In!','Guard Log');
    return false
  }

  return true;
};
