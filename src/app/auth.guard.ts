import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './servicea/user.service';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router , private user:UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("userdata") !== null){
        try {
         jwtDecode(JSON.stringify( localStorage.getItem("userdata")))
        } catch (error) {
         localStorage.removeItem('userdata')
         this._router.navigate(['/login'])
         return false
        }
         return true
       }
       else{
         this.user.token = null 
        this._router.navigate(['/login'])
         return false
       }
     }
     
  }
  
