import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form!: FormGroup;

  selected: any = '';

  aux: String = '';


  constructor(
    private _builder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }
  save(){
    this.dialogRef.close();
    
  }


}
