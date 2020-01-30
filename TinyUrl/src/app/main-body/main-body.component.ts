import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  longURL: string;
  shortURL: string;

  doConvert() {
    console.log('Long URL', this.longURL);
    const dataFound = localStorage.getItem('URLData');
    if (dataFound) {
      const URLArray = JSON.parse(dataFound);
      const URL = URLArray.find((URL: { user: string, longURL: string, shortURL: string }) => URL.longURL == this.longURL);
      if (URL) {
        alert('Short URL Already created...');

      } else {
        this.shortURLConverter();
        localStorage.setItem('URLData', JSON.stringify(this.loginService.URLData));

      }
    } else {
      this.shortURLConverter();
      localStorage.setItem('URLData', JSON.stringify(this.loginService.URLData));

    }
  }

  shortURLConverter() {
    this.shortURL = 'https://rohitshortURL/' + this.makeid(9);
    this.loginService.URLData.push({ user: this.loginService.loggedUserName, longURL: this.longURL, shortURL: this.shortURL});
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

 doClear() {
   this.longURL = '';
   this.shortURL = '';
 }
}
