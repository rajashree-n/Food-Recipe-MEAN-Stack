import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RouterModule, Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

    user :  any = {};

    id: number;
  editMode = false;
  recipeForm: FormGroup;

   public fetchUsers() {
    return this.http.get("http://localhost:3000/profile").map((res: Response) => res.json())
}

  constructor(private http: Http, private route: ActivatedRoute,
    private router: Router) {
    this.getUser();
  }


  
  getUser() {
    this.fetchUsers().subscribe(user => {
    this.user = user
    console.log(user);

    })
  }

  ngOnInit() { 
   
  }

  

}
