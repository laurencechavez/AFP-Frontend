import { Component, OnInit,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteComponent } from '../../components/dialogs/delete/delete.component';
import { AddComponent } from '../../components/dialogs/add/add.component';
import { UpdateComponent } from '../../components/dialogs/update/update.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = ELEMENT_DATA;


  total:number=10;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  add(){
    this.dialog.open(AddComponent,{
      width:"450px",
      data: {}
    })
  }

  onUpdate(/*pharmacy: Pharmacy*/){
    const dialog = this.dialog.open(UpdateComponent,{
    width: "450px",
    data: {ELEMENT_DATA},
    })
    // dialog.afterClosed().subscribe(data=>{
    //   if(data!=null&&data!=undefined&&data!=""){
    //     this.total--;
    //     this.dataSource = new MatTableDataSource(this.pharmacyList);
    //     this.dataSource.data = (this.pharmacyList)
    //   }
    // })

  }
  onDelete(/*pharmacy: Pharmacy,i:number*/){
  const dialog = this.dialog.open(DeleteComponent,{
  width: "450px",
  })
  //   dialog.afterClosed().subscribe(data=>{
  //     if(data=='ok'){
  //       this.pharmacyList.splice(i,1);
  //       this.total--;
  //       //this.dataSource = new MatTableDataSource(this.pharmacyList);
  //       this.dataSource.data = (this.pharmacyList)
  //     }
  //   })
  }

}
