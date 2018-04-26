import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.display="none";
           document.getElementById('contents').style.visibility="visible";
        },3000);
    }
  }
  }
}
