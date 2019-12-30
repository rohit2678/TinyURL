import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  userName: string;
  dateTime: Date;
  ngOnInit() {
    this.userName = this.loginService.loggedUserName;
    this.userName = this.userName.substring(0, this.userName.indexOf('@'));

    const today = new Date();
    const date = today.getMonth.name + ' ' + today.getDate;
    console.log(date);
    this.dateTime = date;
  }

}
