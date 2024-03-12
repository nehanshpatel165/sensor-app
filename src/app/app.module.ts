import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule}from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SensorgaugeComponent } from './sensorgauge/sensorgauge.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationViewComponent } from './location/location-view/location-view.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon, MatIconModule} from '@angular/material/icon'
import { MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu';
import { DeviceCreateComponent } from './device/device-create/device-create.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { DeviceEditComponent } from './device/device-edit/device-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorListComponent,
    SensorgaugeComponent,
    DashboardComponent,
    LocationCreateComponent,
    LocationViewComponent,
    LocationEditComponent,
    DeviceCreateComponent,
    DeviceListComponent,
    DeviceEditComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    KnobModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatRadioModule,
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTreeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
