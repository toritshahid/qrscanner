import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  scan = true;
  scanResult: any='';
  constructor(private route:Router, private service: DataServiceService, private spinner: NgxSpinnerService){}

  onCodeResult(result:string)
  {
    this.scanResult=result;
    this.service.sendResult("Here we are");
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.scan = false;
    //this.route.navigate(['/details']);
  }
  newScan(){
    this.scan=true;
    }

  ngOnInit(): void {
  }


}
