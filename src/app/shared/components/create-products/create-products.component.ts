import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {

  public formGroup: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<CreateProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.data) {
      this.formGroup.patchValue({
        name: this.data.name,
        value: this.data.value,
        model: this.data.model,
        description: this.data.description
      });
    }
  }

  public createForm(): void {
    this.formGroup = this.fb.group({
      name: new FormControl(''),
      value: new FormControl(''),
      model: new FormControl(''),
      description: new FormControl('')
    });
  }

  public sendBody(): object {
    return {
      name: this.formGroup.get('name').value,
      value: this.formGroup.get('value').value,
      model: this.formGroup.get('model').value,
      description: this.formGroup.get('description').value,
    }
  }

  public onNoClick(value): void {
    this.dialogRef.close(value);
  }

}
