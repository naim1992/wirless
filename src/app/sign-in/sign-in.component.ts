import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Router } from '@angular/router';
import { Reponse } from '../reponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  title = 'wasteless';
  model = new User("","");
  reponse = new Reponse("");
 private url = "https://blowless.herokuapp.com/authen";

  constructor(private http:Http, private router:Router) { }


  onClick()
  {
    this.router.navigate(["signup"]);
  
  }

  onValidation()
  {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url, JSON.stringify(this.model)).subscribe(
      res => {this.reponse = res.json(); alert(this.reponse.status); console.log(this.reponse.reponse);});
       
      
   //   
  
  }

}
