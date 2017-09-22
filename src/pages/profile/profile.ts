import { Component } from '@angular/core';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor() {

  }

}
