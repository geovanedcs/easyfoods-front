import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const cpf = this.loginForm.get('cpf').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(cpf, password)
      .subscribe(
        () => this.router.navigate(['cpf', cpf]),
        err => {
          console.log(err);
          this.loginForm.reset();
          alert('Invalid user name or password');
        }
      );
  }
}
