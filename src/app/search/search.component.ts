import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: "";
  resp: "";
  private SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.search;
  rest: any = {};
  res3: any = {};
  private RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
  show: boolean;
  is_login: string;
  username: string;
  constructor(private http: Http) {
    this.is_login = sessionStorage.getItem('user_id') ? '1' : '0';
    this.username = sessionStorage.getItem('username') || 'Jack';
  }

  viewMeal(resp) {
    this.resp = resp;
    console.log(resp);
    this.RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
    document.getElementById('catg1').style.display="none";
    document.getElementById('catgN1').style.display="block";
    this.getRes3();
    this.getReceipe3();

  }


  viewSearch(search) {
    this.search = search;
    console.log(search);
    this.SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.search;
    console.log(this.SearchUrl);
    document.getElementById('catg1').style.display="block";
    document.getElementById('catgN1').style.display="none";
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

  ngOnInit() {
  }
}
