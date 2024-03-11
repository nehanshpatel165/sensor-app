import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationViewComponent } from './location/location-view/location-view.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { DeviceCreateComponent } from './device/device-create/device-create.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceEditComponent } from './device/device-edit/device-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'',component:DashboardComponent,pathMatch:'full'},
  // {path:'location/create',component:LocationCreateComponent},
  // {path:'location/view',component:LocationViewComponent},
  // {path:'device/create',component:DeviceCreateComponent},
  // {path:'device/list',component:DeviceListComponent},
  // {path: 'location/edit/:id', component: LocationEditComponent },

  {path:'home',component:HomeComponent},
  {path:'location-create',component:LocationCreateComponent},
  {path:'location-view',component:LocationViewComponent},
  {path:'device-create',component:DeviceCreateComponent},
  {path:'device-list',component:DeviceListComponent},
  {path: 'location-view/locations/edit/:id', component: LocationEditComponent },
  {path: 'device-list/devices/edit/:id', component: DeviceEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
