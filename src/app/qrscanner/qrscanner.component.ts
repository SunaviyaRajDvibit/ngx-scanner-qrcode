import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.scss']
})
export class QrscannerComponent {

  public output: string = '';

  @ViewChild('action', { static: true }) action!: NgxScannerQrcodeComponent;

  constructor() { }

  public onError(e: any): void {
    alert(e);
  }

  start() {
    this.action.start;
  }

  dataHandler(event: any) {
    event;
  }

}
