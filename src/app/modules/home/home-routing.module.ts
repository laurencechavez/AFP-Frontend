import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './pages/information/information.component';
import { MainComponent } from './pages/main/main.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  { path: '',component:MainComponent,
    children:[
      { path: 'main', component: MainComponent },
      { path: 'table', component: TableComponent },
      { path: 'info', component: InformationComponent },
      { path: '**', redirectTo: 'table' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
