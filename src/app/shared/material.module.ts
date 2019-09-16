import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatSortModule, MatPaginatorModule, MatTableDataSource } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatTableDataSource
  ],
  exports: [

    MatTableModule,

    MatSortModule,

    MatPaginatorModule,
    MatTableDataSource

  ]
})
export class MaterialModule { }
