import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
]; // Array of material components used in this app
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
