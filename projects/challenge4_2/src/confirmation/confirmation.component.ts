import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export default class ConfirmationComponent {
  constructor(private formBuilder: FormBuilder) {}
  confirmation = this.formBuilder.group({
    confirmationButton: ['', Validators.required],
  });
}
