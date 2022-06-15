import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './pages/main/main.component';
import { TableComponent } from './pages/table/table.component';
import { DeleteComponent } from './components/dialogs/delete/delete.component';
import { SharedModule } from '../shared/shared.module';
import { InformationComponent } from './pages/information/information.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddComponent } from './components/dialogs/add/add.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/dialogs/update/update.component';



@NgModule({
  declarations: [
    SidenavComponent,
    MainComponent,
    TableComponent,
    DeleteComponent,
    InformationComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
