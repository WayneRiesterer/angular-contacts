import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketingComponent } from './marketing/marketing.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
  { path: '', component: MarketingComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
