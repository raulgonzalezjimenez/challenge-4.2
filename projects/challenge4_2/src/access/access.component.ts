import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css',
})
export default class AccessComponent {
  constructor(private formBuilder: FormBuilder) {}
  access = this.formBuilder.group({
    unsername: ['', Validators.required],
    password: ['', Validators.required],
    repeatpassword: ['', Validators.required],
    accountType: ['', Validators.required],
  });
}
