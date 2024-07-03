import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule
  ]
})
export class MaterialModule {
}
