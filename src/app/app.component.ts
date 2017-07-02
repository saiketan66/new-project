import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { MyServiceService } from './my-service.service';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data : any;
  @ViewChild('homePage') el:ElementRef; 

  specialElementHandlers = {
    '#editor': function(element, renderer){
      return true;
    }
  };

  constructor(private newService: MyServiceService){}

  ngOnInit(){
    this.newService.fetchData()
    .subscribe(
      (data) => 
      {
        this.data = data;
      }
    )
  }

  downloadPDF(){
    let pdf = new jsPDF();
        let options = {
            pagesplit: true,
            background:'#fff'
        };
        pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
            pdf.save("test.pdf");
        });
    // Save the PDF
  }
}
