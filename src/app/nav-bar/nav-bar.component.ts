import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

 title1 = 'Explore Food !';
  // Built by LucyBot. www.lucybot.co
  private randomUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  show: boolean;
  cat: "";
  resp: "";
  search: "";
  private SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.search;
  rest: any = {};
  private CatUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.cat;
  private RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
  //use is_login to monitor the loginstatue
  is_login: string;
  res: any = {};
  res2: any = {};
  res3: any = {};
  
  username: string;

  logout(): void {
    //refresh the session
    sessionStorage.clear();
    window.location.href = 'http://localhost:3000/logout';

  }

  constructor(private http: Http) {
    this.getRes();
    this.getReceipe();
    //change the is_login between 1 and 0
    this.is_login = sessionStorage.getItem('user_id') ? '1' : '0';
    this.username = sessionStorage.getItem('username') || 'Jack';
    
  }

  getRes() {
    return this.http.get(this.randomUrl)
    .map((es1: Response) => es1.json())
    
  }

  getReceipe() {
    this.getRes().subscribe(res => {
      console.log(res);
      this.res = res
    })
  }

  getRes2() {
    return this.http.get(this.CatUrl)
    .map((es1: Response) => es1.json())
    
  }

  getReceipe2() {
    this.getRes2().subscribe(res2 => {
      console.log(res2);
      this.res2 = res2
    })
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

  onClickMe() {
   //this.show = !this.show;
  }

  ngOnInit() {
    
  }

  viewCat(cat) {
    this.cat = cat;
    console.log(cat);
    this.CatUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.cat;
    this.show = true;
    document.getElementById('catg').style.display="block";
    document.getElementById('catgN').style.display="none";
    this.getRes2();
    this.getReceipe2();
  }

  viewMeal(resp) {
    this.resp = resp;
    console.log(resp);
    this.RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
    this.show = !this.show;
    document.getElementById('catg').style.display="none";
    document.getElementById('catgN').style.display="block";
    this.getRes3();
    this.getReceipe3();
  }

  viewSearch(search) {
    this.search = search;
    console.log(search);
    this.SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.search;
    console.log(this.SearchUrl);
    this.getJson();
    this.getResult();
    
  }

  getJson() {
    return this.http.get(this.SearchUrl)
    .map((es1: Response) => es1.json())
    
  }

  getResult() {
    this.getJson().subscribe(rest => {
      console.log(rest);
      this.rest = rest
    })
  }
  
}