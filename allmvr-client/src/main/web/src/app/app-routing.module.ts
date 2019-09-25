import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { TermsComponent } from './Components/terms/terms.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { DisclaimerComponent } from './Components/disclaimer/disclaimer.component';

const routes: Routes = [
  {path: '', component: StoreComponent, pathMatch: 'full'},
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},   
  {path: 'disclaimer', component: DisclaimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    // { useHash: true }
    )],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
