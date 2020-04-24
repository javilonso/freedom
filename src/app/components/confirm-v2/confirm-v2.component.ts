import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatProgressButtonOptions } from 'mat-progress-buttons'


@Component({
  selector: 'app-confirm-v2',
  templateUrl: './confirm-v2.component.html',
  styleUrls: ['./confirm-v2.component.scss']
})
export class ConfirmV2Component implements OnInit {

  data:string
  isDisable:boolean=false;

  constructor(public dialogRef: MatDialogRef<ConfirmV2Component>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public message: string) { 
      this.data = message;

  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    // Close the dialog, return true

    setTimeout(() => {
      this.dialogRef.close(true);

    }, 3000)
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

  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Enviar',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    buttonIcon: {
      fontIcon: 'local_post_office'
    }
  }

  someFunc(): void {
    this.isDisable=true;
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
      this.spinnerButtonOptions.disabled = true;
      this.spinnerButtonOptions.text = "Enviado!"
      this.spinnerButtonOptions.buttonIcon.fontIcon='check_circle'

    }, 2000)
  }

}
