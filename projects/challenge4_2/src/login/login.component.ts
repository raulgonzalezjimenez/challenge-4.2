import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}
  login = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
