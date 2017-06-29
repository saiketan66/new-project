import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any;
  constructor(private newService:MyServiceService) { }

  ngOnInit() {
    this.newService.fetchData()
    .subscribe(
      (data) => 
      {        
        this.technologies = data.rows;
      }
    )
  }

}
