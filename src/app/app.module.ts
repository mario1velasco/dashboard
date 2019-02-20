import { SessionService } from './shared/services/session.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AgmCoreModule } from '@agm/core';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/misc/index/index.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { TopmenuComponent } from './components/dashboard/topmenu/topmenu.component';
import { RigthsidenavComponent } from './components/dashboard/rigthsidenav/rigthsidenav.component';
import { MapComponent } from './components/dashboard/map/map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonModule } from '@angular/common';
import { NewPlaceComponent } from './components/dashboard/new-place/new-place.component';
import { BuidingsComponent } from './components/dashboard/buidings/buidings.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { UnderConstructionComponent } from './components/dashboard/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MainComponent,
    SidenavComponent,
    TopmenuComponent,
    RigthsidenavComponent,
    MapComponent,
    NewPlaceComponent,
    BuidingsComponent,
    ProfileComponent,
    UnderConstructionComponent
  ],
  entryComponents: [
    NewPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7E5jDVybM6YsC6HVD64E1Sv3Aj2Bwcpg'
   }),
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
  ],
  exports: [
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
