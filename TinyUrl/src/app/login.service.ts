import { UserDataModel } from './userData.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) {
    const userLogged = sessionStorage.getItem('loggedUser');
    if (userLogged) {
      this.loggedUserName = userLogged;
      router.navigateByUrl('/home');
    }
  }

  loggedUserName: string;
  URLData: Array<{ user: string, longURL: string, shortURL: string }> = [];

  login(userName: string, password: string) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const userArray = JSON.parse(userInfo);
      const user = userArray.find((user: UserDataModel) => user.userName === userName && user.password === password );
      // console.log('userName ', userName , ' password ', password , ' user ', user);
      if (user) {
        sessionStorage.setItem('loggedUser', userName);
        this.loggedUserName = userName;
        this.router.navigateByUrl('/home');
      } else {
        alert('Entered userName and Password are in-correct...');
      }
    } else {
      alert('No User Found.....Please SignUp First');
      this.router.navigateByUrl('/signUp');
    }
  }

  signUp(userdata: UserDataModel) {
    let userArray = [];
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      userArray = JSON.parse(userInfo);
    }

    userArray.push({userName: userdata.userName, password: userdata.password});
    localStorage.setItem('userInfo', JSON.stringify(userArray));
  }

  logOut() {
    sessionStorage.clear();
  }
}
