import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QRCode } from 'jsqr';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  subs!: any;
  result : any;
  constructor(private service: DataServiceService){
  }
  ngOnInit(): void {
    this.service.getResult().subscribe(data => {
      this.subs =  data;
   });
  }


}
