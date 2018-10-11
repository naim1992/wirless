import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  model = new User("","");
  url = "https://blowless.herokuapp.com/signup";

  constructor(private http:Http) { }

  onValidation() 
  {
    this.http.post(this.url, JSON.stringify(this.model)).subscribe(res => console.log(res.json()));
  }


}
