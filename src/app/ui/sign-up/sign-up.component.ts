import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: {
    message: string
    token: string,
    loginStatus: boolean
  };
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

    private initForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    const result: boolean = control.invalid && control.touched;

    return result;
  }

  ngOnInit() {
    this.initForm();
  }

  addUser() {
    const val = this.form.value;
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {

      val.email = val.email.trim();
      val.password = val.password.trim();
      if (!val.email && !val.password) {
        return;
      }
      const dataUser = val;
      return this.authService.addUser(dataUser)
        .subscribe(user => {
          this.user = user;
          if (user.sacces) {
            this.router.navigate(['signin']);
          }
        });
    }
  }
}
