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

  longURL: string;
  shortURL: string;
  ngOnInit() {
    this.userName = this.loginService.loggedUserName;
    this.userName = this.userName.substring(0, this.userName.indexOf('@'));

    this.dateTime = formatDate(new Date(), 'MMM dd, yyyy, hh:mm aa', 'en');
    console.log(formatDate(new Date(), 'MMM dd, yyyy, hh:mm aa', 'en'));
  }


  doConvert() {
    console.log("Long URL", this.longURL);
    const dataFound = localStorage.getItem("URLData");
    if (dataFound) {
      const URLArray = JSON.parse(dataFound);
      const URL = URLArray.find((URL: { longURL: string, shortURL: string }) => URL.longURL == this.longURL);
      if (URL) {
        alert('Short URL Already created...');
        this.longURL = '';
      } else {
        this.shortURLConverter();
        localStorage.setItem('URLData', JSON.stringify(this.loginService.URLData));
        this.longURL = '';
      }
    } else {
      this.shortURLConverter();
      localStorage.setItem('URLData', JSON.stringify(this.loginService.URLData));
      this.longURL = '';
    }
  }

  shortURLConverter() {
    this.shortURL = 'https://rohitshortURL/' + this.makeid(9);
    this.loginService.URLData.push({ longURL: this.longURL, shortURL: this.shortURL});
    console.log('URL Data' + this.loginService.URLData.values);
  }

  makeid(length: number) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
