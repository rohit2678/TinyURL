import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-urllist',
  templateUrl: './my-urllist.component.html',
  styleUrls: ['./my-urllist.component.css']
})
export class MyURLListComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  myURLListArray: Array<String>;

  ngOnInit() {
    const dataFound = localStorage.getItem('URLData');
    if (dataFound) {
      const URLArray = JSON.parse(dataFound);
      console.log('UserArray ', URLArray);
      const URL = URLArray.find((URL: { user: string, longURL: string, shortURL: string }) => URL.user == this.loginService.loggedUserName);

      if (URL) {
        console.log('URL ', URL, ' ,', URL.shortURL);
      }
    }
  }

}
