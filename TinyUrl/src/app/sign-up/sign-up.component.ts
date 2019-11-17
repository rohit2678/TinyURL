import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private loginservice: LoginService) { }

  userName: string;
  password: string;
  rePassword: string;

  ngOnInit() {
  }

  onSignUp() {
    if (this.password === this.rePassword) {
      this.loginservice.signUp({userName: this.userName, password: this.password});
      this.userName = '';
      this.password = '';
      this.rePassword = '';
    } else {
      alert('Password and re-type password doesnot match...');
      this.password = '';
      this.rePassword = '';
    }
  }

}
