import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  osh:any;

  loginuserform = new FormGroup({
  'email': new FormControl("",[Validators.required,Validators.email]),
  'password': new FormControl()

  })

  loginuser(){
    this.logininservice.loginuser(this.loginuserform.value).subscribe(resp=>(console.log(resp),
    this.osh=resp));
  }


  constructor(private logininservice:LoginserviceService) { }

  


  ngOnInit(): void {
    


    
    
  }

}
