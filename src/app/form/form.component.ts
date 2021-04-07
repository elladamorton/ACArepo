import { Component, OnInit } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  testUser = new User('Ellada', '1234');
  submitted = false;
  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    this.submitted = true;
  }

  // tslint:disable-next-line:typedef
  get diagnostic() {
    return JSON.stringify(this.testUser);
  }
}

