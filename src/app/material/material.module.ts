import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [MatToolbarModule]; // Array of material components used in this app
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
