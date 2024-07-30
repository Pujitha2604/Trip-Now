import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)
  let isLoggedIn = window.isLoggedIn
  const toastr = inject(ToastrService)

  if(isLoggedIn == false){
    _router.navigate(['/packages'])
    toastr.info('Please reserve a package first!','Guard Log');
    return false  
  }
  return true;
};

// import { ToastrService } from 'ngx-toastr';
// const toastr = inject(ToastrService)
// toastr.info('Please reserve a package first!!','Guard Log');
