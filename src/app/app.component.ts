import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data : any;

  constructor(private newService: MyServiceService){}

  ngOnInit(){
    this.newService.sayHello();
    this.newService.fetchData()
    .subscribe(
      (data) => 
      {
        this.data = data;
        this.newService.fetchedData = data;
      }
    )
    //this.newService.fetchCompanies();
    //this.newService.fetchTechnologies();
  }
}
