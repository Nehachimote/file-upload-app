// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   styleUrls: ['./file-upload.component.css']
// })


// export class FileUploadComponent {
//   fileToUpload: File|null = null;

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
//   }

//   uploadFile() {
//     // Add your file upload logic here
//     if (this.fileToUpload) {
//       console.log('File uploaded:', this.fileToUpload);
//       // You can send the file to a server or perform any other necessary action
//     } else {
//       console.log('No file selected');
//     }
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(private router: Router) {}

  handleFileInput(event: any) {
    // Logic to handle file input
  }

  uploadFile() {
    // Perform file upload logic

    // Navigate to another screen
    this.router.navigate(['/home']);
  }
}
