import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // login successful
  dolog(): void {
    //when login successful set the loh_in to 1
    sessionStorage.setItem('user_id','1');
    sessionStorage.setItem('username','Mike');
  }
  constructor() { }

  ngOnInit() {
  }

}
