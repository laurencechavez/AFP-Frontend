import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class SharedModule { }
