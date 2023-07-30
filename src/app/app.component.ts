import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb:FormBuilder,){

  }
  m="";
  // comment="";
  // post:any;
  
  
  nForm=this.fb.group(
    {
      first:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      last:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      phone:['',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9]+@[a-z]+\.[a-z]{2,}$")]],
      city:['',[Validators.required,Validators.pattern("^[A-Za-z]{4,}[ ]*$")]],
      state:['',Validators.required],
      zipcode:['',[Validators.required,Validators.pattern("^[0-9]{5}")]],
      comment:['',[Validators.required,Validators.minLength(50)]]
    }
    
  )

  



}
