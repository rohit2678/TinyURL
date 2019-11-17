import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  userName: string;
  password: string;

  ngOnInit() {
  }

  onLogin() {
    this.loginService.login(this.userName, this.password);
    this.userName = '';
    this.password = '';
  }

}
