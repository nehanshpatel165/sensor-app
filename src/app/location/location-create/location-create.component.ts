import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrl: './location-create.component.css'
})
export class LocationCreateComponent {
  constructor(private locationService:LocationService,private router:Router){}

  locationInfo={
    location_name:'',
    level:0,
    img_name:''
  }


  onSubmit(form:NgForm){
    console.log(form);
    this.locationInfo.location_name=form.value.locationName;
    this.locationInfo.level=form.value.level;
    this.locationInfo.img_name=form.value.imageGroup;
    this.locationService.createLocation(this.locationInfo).subscribe(
      response=>{
        console.log('Location created successfully',response);
      },error =>{
        console.error("Error while creating the location", error)
      }) 
    this.router.navigate(['dashboard/location-view'])
  }

  images = [
    { value: 'master-bedroom', src: 'assets/master-bedroom.1947390ab238a1ec9700.svg' },
    { value: 'kitchen', src: 'assets/kitchen.487a3f0468e09acd09f1.svg' },
    { value: 'bathtub', src: 'assets/bathtub.9930c89edf83f20c16c7.svg' },
    { value: 'bathroom', src: 'assets/bathroom.d5314344a752e7427e2d.svg' },
 ];
 selectedImage: string ='';
 

}
