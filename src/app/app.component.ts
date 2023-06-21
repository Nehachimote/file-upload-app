import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-upload-app';
  constructor(private router: Router) { }

  navigateToSecondPage() {
    this.router.navigate(['/file-upload']); // Replace '/second-page' with the actual route path of your second page
  }
    
}
