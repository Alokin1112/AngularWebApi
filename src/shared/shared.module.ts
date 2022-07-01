import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularTiltModule } from 'angular-tilt';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    MatCommonModule,
    MatToolbarModule,
    AngularTiltModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatCommonModule,
    MatToolbarModule,
    AngularTiltModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
