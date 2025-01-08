// Suggested code may be subject to a license. Learn more: ~LicenseLog:2117426538.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1262113526.
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  constructor() { }

  

}