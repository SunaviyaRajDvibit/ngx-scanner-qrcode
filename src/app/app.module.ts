import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrscannerComponent } from './qrscanner/qrscanner.component';

LOAD_WASM().subscribe((res: any) => {
  console.log('LOAD_WASM',res)
})

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    QrscannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
