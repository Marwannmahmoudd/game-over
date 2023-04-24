import { Component } from '@angular/core';
import { FormControl , FormGroup ,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../servicea/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
erorr:string = ""
ooh:boolean = false
show:boolean = true
constructor(public x:UserService , private _router:Router){}
register:FormGroup = new FormGroup ({
name:new FormControl(null , [Validators.required , Validators.minLength(2),Validators.maxLength(10),Validators.pattern(/^[A-Za-z]+$/)]),
lastname:new FormControl(null , [Validators.required , Validators.minLength(2),Validators.maxLength(10),Validators.pattern(/^[A-Za-z]+$/)]),
email:new FormControl(null , [Validators.required,Validators.email]),
password:new FormControl(null , [Validators.required ,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
rePassword:new FormControl(null , [Validators.required,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
age:new FormControl(null , [Validators.required , Validators.pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/)])
},{validators : this.passordmatch})
passordmatch(register:any){
let password =  register.get('password');
let repassword =  register.get('rePassword');
if(password.value === repassword.value){
return null
}
else{
repassword?.setErrors({passwordmatch: 'password and repassword not match'})
return  {passordmatch : 'password and repassword not match'}
}
}
formmm(registerr:FormGroup){
  this.ooh = true
 
  
  this.x.getdata(registerr.value).subscribe({
   
    next:(data)=>{if(data.message == 'success'){
      console.log(data);
      this._router.navigate(['/login'])
      this.ooh=false
    }
    },
error:(dataa)=>{console.log(dataa);

  this.erorr = dataa.error.message
  this.ooh=false}
});
 
  
}
}
