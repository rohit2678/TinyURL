import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  userName: string;
  dateTime: any;
  ngOnInit() {
    this.userName = this.loginService.loggedUserName;
    this.userName = this.userName.substring(0, this.userName.indexOf('@'));

    // let dateFormat = require('dateformat');
    // let now = new Date();
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    this.dateTime = formatDate(new Date(), 'MMM dd, yyyy, hh:mm aa', 'en');
    console.log(formatDate(new Date(), 'MMM dd, yyyy, hh:mm aa', 'en'));
    //console.log(Date.now() | date: 'medium');
  }

}
