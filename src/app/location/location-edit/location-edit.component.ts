import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocationService } from '../location.service';
import { NgForm } from '@angular/forms';

@Component({
 selector: 'app-location-edit',
 templateUrl: './location-edit.component.html',
 styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
 locationInfo = {
    location_name: '',
    level: 0,
    img_name: '',
    id:''
 };

 constructor(private route: ActivatedRoute, private locationService: LocationService, private router :Router) {}
 images = [
  { value: 'master-bedroom', src: 'assets/master-bedroom.1947390ab238a1ec9700.svg' },
  { value: 'kitchen', src: 'assets/kitchen.487a3f0468e09acd09f1.svg' },
  { value: 'bathtub', src: 'assets/bathtub.9930c89edf83f20c16c7.svg' },
  { value: 'bathroom', src: 'assets/bathroom.d5314344a752e7427e2d.svg' },
];
selectedImage: string ='';
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.locationService.getLocationById(id).subscribe({
      next: (location) => {
        this.locationInfo = location;
      },
      error: (error) => {
        console.error("Error fetching location", error);
      }
    });
  } else {
    console.error("Location ID is not provided");
  }
}

onSubmit(form: NgForm): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.locationInfo.location_name=form.value.locationName;
    this.locationInfo.level=form.value.level;
    this.locationInfo.img_name=form.value.imageGroup;
    this.locationInfo.id=id;
    this.locationService.updateLocation(this.locationInfo).subscribe({
      next: (response) => {
        console.log('Location updated successfully', response);
      },
      error: (error) => {
        console.error("Error while updating the location", error);
      }
    });
  } else {
    console.error("Location ID is not provided");
  }
  this.router.navigate(['dashboard/location-view']);
}

}
