import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.scss']
})
export class SigInComponent implements OnInit {

  public user: {
    message: string
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
  login() {
    const val = this.form.value;
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      this.authService.login(val.email, val.password)
        .subscribe(user => {
          this.user = user;
          console.log(user);
          if (this.user.loginStatus) {
            this.router.navigate(['ui/administration']);
          }
        });
    }
  }
  ngOnInit() {
    this.initForm();
  }

}
