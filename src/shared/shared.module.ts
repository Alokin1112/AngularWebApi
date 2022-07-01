import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularTiltModule } from 'angular-tilt';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    MatCommonModule,
    MatToolbarModule,
    AngularTiltModule,
    MatCardModule,
  ],
  exports: [
    MatCommonModule,
    MatToolbarModule,
    AngularTiltModule,
    MatCardModule,
  ],
})
export class SharedModule {}
