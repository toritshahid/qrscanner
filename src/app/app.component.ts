import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import jsQR, { QRCode } from 'jsqr';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ANGULAR QR SCANNER';

  constructor(private route:Router, private service: DataServiceService){}



}
