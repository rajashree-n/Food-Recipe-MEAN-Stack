import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title1 = 'Explore Food !';
  // Built by LucyBot. www.lucybot.co
  private randomUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  show: boolean;
  cat: "";
  resp: "";
  private CatUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.cat;
  private RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
  
  res: any = {};
  res2: any = {};
  res3: any = {};

  constructor(private http: Http) {
    this.getRes();
    this.getReceipe();
    
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
    this.show = !this.show;
  }

  ngOnInit() {
    this.show = !this.show;
  }

  viewCat(cat) {
    this.cat = cat;
    console.log(cat);
    this.CatUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.cat;
    this.show = true;
    this.getRes2();
    this.getReceipe2();
  }

  viewMeal(resp) {
    this.resp = resp;
    console.log(resp);
    this.RespUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.resp;
    this.show = true;
    this.getRes3();
    this.getReceipe3();
  }

  
}