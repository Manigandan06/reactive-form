import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;

  
  ngOnInit(){
      this.reactiveForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required,Validators.email]),
        password: new FormControl(null, Validators.required),
        phoneno: new FormControl(null, Validators.required),
        gender: new FormControl('male')
      })
  }
  onSubmit(){
    console.log(this.reactiveForm)
  }
}
