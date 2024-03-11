import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { Route, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrl: './location-view.component.css'
})
export class LocationViewComponent {
 location_info_array: any[] = []; 
 imagePath = 'assets/'
 constructor(private locationService: LocationService,private router : Router,private route : ActivatedRoute) {}
 deleteLocation(id: string): void {
  if (id !== null) {
    this.locationService.deleteLocation(id).subscribe({
      next: (response) => {
        console.log('Location deleted successfully', response);
        this.location_info_array = this.location_info_array.filter(location => location.id !== id);
      },
      error: (error) => {
        console.error("Error while deleting the location", error);
      }
    });
  } else {
    console.error("Location ID is not provided");
  }
}
 ngOnInit(): void {
    this.locationService.getLocation().subscribe(data => {
      console.log(data.data);
      data.data.forEach((item: { location_name:string; img_name:string; level: number; id :number }) => {
        let location_info = {
          location_name: item.location_name,
          img_name: this.imagePath + item.img_name +'.svg',
          level: item.level,
          id:item.id,
        };
        this.location_info_array.push(location_info);
      });
    });
 }
}
