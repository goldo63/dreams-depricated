import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInfo } from '@dreams/data';
import { AuthService } from '@dreams/auth';

/**
 *
 */
interface UserInfoFormGroup extends FormGroup {
  value: UserInfo;
  controls: {
    firstName: AbstractControl;
    lastName: AbstractControl;
    password: AbstractControl;
    emailAdress: AbstractControl;

    // phoneNumber?: AbstractControl
    // id?: number
    // roles: UserRole[]
    // isActive: boolean
    // token: string | undefined
  };
}

/**
 *
 */
@Component({
  selector: 'dreams-auth-register-form',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  @Output() formSubmitted = new EventEmitter<UserInfo>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
      console.log("construct");
    }

  ngOnInit(): void {
    console.log("init");
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      emailAdress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    }) as FormGroup;
  }

  onSubmit(): void {
    console.log("Submitted");
    if (this.registerForm.valid) {
      const registeredUser: UserInfo = this.registerForm.value;
      


    } else {
      console.error('registerForm invalid');
    }
  }
}
