import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signinForm: NgForm){
    console.log(signinForm.value);
  }
}

