import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  public onNoClick(value): void {
    this.dialogRef.close(value);
  }

}

export interface ModalAlert {
  title: string;
  subTitle: string;
  description?: string;
  theme: ModalTheme;
  close?: boolean;
  icon: ModalIcon;
  buttonCancelText?: string;
  buttonSuccessText: string;
}

export enum ModalTheme {
  DELETE = 'Delete',
  SUCCESS = 'Success'
}
export enum ModalButton {
  PURPLE = 'btn-purple',
  RED = 'btn-red',
}
export enum ModalIcon {
  DELETE = 'trashDelete',
  CHECK = 'check',
  SAVE = 'save'
}
