import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-bookmarkwall',
  templateUrl: './bookmarkwall.component.html',
  styleUrls: ['./bookmarkwall.component.scss']
})
export class BookmarkwallComponent implements OnInit {
  
  user :  any = {};
  res3: any = {};
  resp: "";
  private RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;

  public fetchUsers() {
   return this.http.get("http://localhost:3000/profile").map((res: Response) => res.json())
}

 constructor(private http: Http) {
   this.getUser();
 }

 
 getUser() {
   this.fetchUsers().subscribe(user => {
   this.user = user
   })
 }

 MealDisplay(resp) {
  this.resp = resp;
  console.log(resp);
  this.RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
  document.getElementById('catg1').style.display="none";
  document.getElementById('catgN').style.display="block";
  this.getRes3();
  this.getReceipe3();
}

getRes3() {
  return this.http.get(this.RespUrl)
  .map((es1: Response) => es1.json())
  
}

getReceipe3() {
  this.getRes3().subscribe(res3 => {
    console.log(res3);
    this.res3 = res3
  })
}

 ngOnInit() { }

}
