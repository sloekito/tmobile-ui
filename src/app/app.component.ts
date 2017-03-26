import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Jsonp } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Twisk Us Please!';
  options = {
    min: 0,
    title: 'Your twisk.us score'
  };
  max: number = 100;
  gValue: number = 0;
  // getScoreLink = "http://ec2-54-186-89-132.us-west-2.compute.amazonaws.com:5000/score";
  getScoreLink = "http://localhost:5000/score";
  http: Http;
  scoreData: any[];

  constructor(http: Http, private jsonp: Jsonp) { this.http = http }
  apiLink: string;
  search(searchTerm): void {
    console.log(searchTerm);
    var apiLink = this.getScoreLink + "/" + searchTerm;
    this.apiLink = apiLink;


    this.http.request(apiLink).subscribe(
      (res: Response) => {
        console.log(res.json());
        let result = res.json();
        this.gValue = result.score;
      });


  }



}
