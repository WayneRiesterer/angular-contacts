import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MarketingComponent } from './marketing.component';
import { ServicesComponent } from './services/services.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  imports: [ RouterModule ],
  declarations: [
    MarketingComponent,
    ServicesComponent,
    ShowcaseComponent,
  ]
})
export class MarketingModule {}
