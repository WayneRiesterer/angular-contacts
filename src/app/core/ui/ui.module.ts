import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule ],
  exports: [ TopnavComponent, FooterComponent ],
  declarations: [ TopnavComponent, FooterComponent ]
})
export class UiModule {}
