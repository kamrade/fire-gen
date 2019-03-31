import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fire-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    })
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result  = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    console.log('::: onsubmit');
    const controls = this.myFirstReactiveForm.controls;
    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.myFirstReactiveForm.value);
  }

}
