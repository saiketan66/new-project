import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class MyServiceService {
    fetchedData:any;

  constructor(private http:Http) { }

  handleError(error) {
    console.log(error);
  }

  fetchData(){
    return this.http.get('assets/data/info.json')
    .map(
      (response) => response.json()
    )
  }
}
