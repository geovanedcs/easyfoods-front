import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../service/token.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    const cpf = this.loginForm.get('cpf').value;
    const senha = this.loginForm.get('senha').value;

    this.authService
      .authenticate(cpf, senha)
      .subscribe(
        res => {
          this.router.navigate(['cardapio']);
          this.userService.setToken(res.token);
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          alert('Dados de login inválidos.');
        }
      );
  }
}
