import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
location: any;
view: any;
//   images = [
//     { value: 'image1', src: 'assets/master-bedroom.1947390ab238a1ec9700.svg' },
//     { value: 'image2', src: 'assets/kitchen.487a3f0468e09acd09f1.svg' },
//     { value: 'image3', src: 'assets/bathtub.9930c89edf83f20c16c7.svg' },
//     { value: 'image4', src: 'assets/bathroom.d5314344a752e7427e2d.svg' },
//  ];
//  selectedImage: string ='';
selectedLocationId: string=''; // or number, depending on your ID type

// Example method to set the selected location ID
// setSelectedLocationId(id: string) { // or number
//  this.selectedLocationId = '2';
// }
showLocationMenu = false;
showDeviceMenu = false;
deviceMenuIcon = 'assets/right.svg';
locationMenuIcon = 'assets/right.svg';
toggleLocationMenu() {
    this.showLocationMenu = !this.showLocationMenu;
    this.locationMenuIcon = this.showLocationMenu ? 'assets/down.svg' : 'assets/right.svg';
}

toggleDeviceMenu() {
    this.showDeviceMenu = !this.showDeviceMenu;
    this.deviceMenuIcon = this.showDeviceMenu ? 'assets/down.svg' : 'assets/right.svg';
}

}
