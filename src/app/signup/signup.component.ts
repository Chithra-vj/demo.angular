import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  errormsg:any;
  successmsg:any;
  ngOnInit(): void {
  }
  signup =new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
   
   });

   signup1(){
 if(this.signup.valid){
   console.log(this.signup.value);
   this.service.signUP(this.signup.value).subscribe((res)=>{
   console.log(res,'res==>');
   this.signup.reset();
 this.successmsg=res.message;
 this.errormsg=res.messa;
 
   });
 }
 else{
   this.errormsg='all field is required !'
 }
   }
}
