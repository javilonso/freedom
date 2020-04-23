import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  data:string

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public message: string) { 
      this.data = message;

  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  congrat():boolean{
    if (this.data=="¡INVITACIÓN ENVIADA!"){
      return false;
    }
    else{
      return true;
    }
  }
  
  unirse():boolean{
    if (this.data=="UNIRSE"){
      return false;
    }
    else{
      return true;
    }
  }

}
