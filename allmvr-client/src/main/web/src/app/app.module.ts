import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatSlideToggleModule, MatIconModule,MatCheckboxModule, MatDialogModule,
   MatMenuModule, MatInputModule, MatExpansionModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreService } from './store/store.service';
import { StoreComponent, DialogOverviewExampleDialog, ContactDialog } from './store/store.component';
import { TermsComponent } from './Components/terms/terms.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer.component';


const dialogs = [
   ]

@NgModule({
  declarations: [
    AppComponent,
    ...dialogs,
    StoreComponent,
    DialogOverviewExampleDialog,
    TermsComponent,
    PrivacyComponent,
    DisclaimerComponent,
    ContactDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule, MatButtonModule, MatSlideToggleModule, MatIconModule,
    MatMenuModule, MatInputModule, 
    MatExpansionModule, FormsModule, ReactiveFormsModule, MatCheckboxModule,
    MatDialogModule, MatSelectModule
 
  ],

  providers: [
    StoreService
  ],

  entryComponents: [
   DialogOverviewExampleDialog,
   ContactDialog
  ],
  exports: [
    HttpClientModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

