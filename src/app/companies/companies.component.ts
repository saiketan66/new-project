import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  constructor(private newService:MyServiceService) { }

  ngOnInit() {
    this.newService.fetchData()
    .subscribe(
      (data) => 
      {        
        this.companies = data.rows;
        console.log(this.companies)
      }
    )
  }

}
