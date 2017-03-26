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

    //  this.jsonp.get(this.apiLink)
    //   .map(function (res: Response) {
    //     return res.json() || {};
    //   }).catch(function (error: any) {
    //     return Observable.throw(error);
    //   });

    this.http.request(apiLink).subscribe(
      (res: Response) => {
        console.log(res.json());
        let result = res.json();
        this.gValue = result.score;
      });

    // this.jsonp.request(apiLink, { method: 'Get' })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    // //          return this.http.get(this.commentsUrl)
    // //                     // ...and calling .json() on the response to return data
    // //                      .map((res:Response) => res.json())
    // //                      //...errors if any
    // //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // // this.getService(apiLink);
    // console.log(apiLink);
    // this.getService(apiLink)
    //   .subscribe(
    //   scoreData => this.scoreData = scoreData, //Bind to view
    //   err => {
    //     // Log errors if any
    //     console.log(err);
    //   });

    //   console.log(this.scoreData);
    //this.getTestData();
  }

  getTestData(): Observable<any[]> {
    console.log(this.apiLink);
    return this.jsonp.get(this.apiLink)
      .map(function (res: Response) {
        return res.json() || {};
      }).catch(function (error: any) {
        return Observable.throw(error);
      });
  }

  getService(): Observable<any[]> {

    // ...using get request
    return this.http.get(this.apiLink)
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
