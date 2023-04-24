import { Component } from '@angular/core';
import { FormControl , FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import jwtDecode from 'jwt-decode';
import { UserService } from '../servicea/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erorr:string = ""
  ooh:boolean = false
  id:any;
  importantid:any
  show:boolean = true
  
  constructor(public z:UserService , private _router:Router){console.log(this.show);
  }
login:FormGroup = new FormGroup ({
  email:new FormControl(null , [Validators.required,Validators.email]),
  password:new FormControl(null , [Validators.required,Validators.pattern(/^(?=.*?[0-9]).{8,}$/)]),
})
formmmm(login:FormGroup){
  
  
  this.ooh = true
  this.z.sentdata(login.value).subscribe({
    next:(data)=>{if(data.message == 'success'){
      console.log(data);
      
      localStorage.setItem('userdata',data.token)
      this.id = jwtDecode(data.token)
      console.log(this.id);
      this.importantid = this.id.id
      localStorage.setItem('id',this.importantid)
      console.log(this.importantid);
      
      this.z.token = data.token
      console.log(this.z.token );
      
      this.ooh=false
      this._router.navigate(['/home'])
    }
    },
error:(dataa)=>{
console.log(dataa);

  this.erorr = dataa.error.message
  
  this.ooh=false}
});
 
}
}
