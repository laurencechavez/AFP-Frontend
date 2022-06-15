import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  delete(){
    // this.dialogRef.close('ok');
    // const InitPath = "hospital/";
    // const finalPath = InitPath.concat(this.data.hospital.idHospital.toString());

    // this.hospitalService.delete(finalPath).subscribe({
    //   next:(data)=>{
    //     this.dialogRef.close(this.data.hospital);        
    //   },
    //   error:(error)=>{
    //     console.log(error);
    //   }
    // });
  }

}
