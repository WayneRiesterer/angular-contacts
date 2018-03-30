import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MarketingModule } from './marketing/marketing.module';
import { ContactsModule } from './contacts/contacts.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,

    AppRoutingModule,
    CoreModule,
    MarketingModule,
    ContactsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
