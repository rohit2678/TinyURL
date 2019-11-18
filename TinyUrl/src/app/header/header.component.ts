import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  userName: string;

  ngOnInit() {
    const user = sessionStorage.getItem('loggedUser');
    if (user) {
      this.userName = user;
    } else {
      this.router.navigateByUrl('');
    }
  }

  onLogout() {
    this.loginService.logOut();
  }

}
