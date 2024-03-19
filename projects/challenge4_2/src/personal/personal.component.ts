import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
export default class PersonalComponent {
  personal: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.personal = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      newsletter: [false],
    });
  }

  enviarFormulario() {
    console.log(this.personal.value);
    console.log(this.personal.valid);
  }
}
