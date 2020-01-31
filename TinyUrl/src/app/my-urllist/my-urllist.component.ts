import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-urllist',
  templateUrl: './my-urllist.component.html',
  styleUrls: ['./my-urllist.component.css']
})
export class MyURLListComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  myURLListArray: Array<Object>;

  ngOnInit() {
    const dataFound = localStorage.getItem('URLData');
    if (dataFound) {
      console.log('data JSON ', dataFound);
      const URLArray = JSON.parse(dataFound);
      console.log('UserArray ', URLArray.length);
      this.myURLListArray = URLArray;
      URLArray.forEach(element => {
        if (element.user === this.loginService.loggedUserName) {
          console.log('Long URL ', element.longURL);
        }
      });
    }
  }

}
