import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<AddComponent>,
  ) {
    this.form = this._builder.group({
      position:[""],
      name:[""],
      weight:[""],
      symbol:[""],
    })
  }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close();
    
    // var newHospital={
    //   idDepartment:this.selected,
    //   name:this.form.get(["name"])?.value,
    //   location:this.form.get(["location"])?.value,
    //   phoneNumber:this.form.get(["phoneNumber"])?.value,
    //   lat:this.form.get(["lat"])?.value,
    //   lng:this.form.get(["lng"])?.value
    // }; 
    // console.log(newHospital);
    // this.hospitalService.addHospital(newHospital).subscribe({
    //   next:(data)=>{
    //     this.dialogRef.close();     
    //   },
    //   error:(error)=>{
    //     this.dialogRef.close();    
    //     console.log(error);
    //   }
    // });
  }

}
