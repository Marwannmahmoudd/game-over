import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl:string = "https://ecommerce.routemisr.com/"
  token:any ;
  token2:any = new BehaviorSubject(null)
  constructor(private _userservice:HttpClient, private _router:Router) { 
    if((localStorage.getItem('userdata')) !== null){
      this.token = localStorage.getItem('userdata')
     _router.navigate(['/home'])
     }
     else{
         this.token = null
       if(_router.url === '/register'){
         _router.navigate(['/register'])
       }
     }
   }
      
       decode(){
       let encode = JSON.stringify( localStorage.getItem('userdata'))
        let decode = jwtDecode(encode)
 this.token2.next(decode)
 localStorage.setItem('token',this.token2)
       }
       
       
 
   loginout(){
     localStorage.removeItem('userdata');
     this.token = null
     this._router.navigate(['/login'])
   }
  
  getdata(data:object):Observable<any>{
    return this._userservice.post(this.baseurl + "api/v1/auth/signup" , data)
    } 
    sentdata(data:object):Observable<any>{
     return this._userservice.post(this.baseurl + "api/v1/auth/signin" , data)
     } 
    
}
