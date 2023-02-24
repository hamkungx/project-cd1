import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.intiForm();
  }
  intiForm() {
    this.createForm = this.fb.group({
      txtCategory: ['', [Validators.required]],
      txtSummary: [''],
      txtDescription: [''],
      txtPrice: [null, [Validators.required]],
    });
  }

  submit(){
    
    if (this.createForm.invalid){
      console.log('dwd')
      for (const i in this.createForm.controls ) {
        this.createForm.controls[i].markAsDirty();
        this.createForm.controls[i].updateValueAndValidity();
        
      }
    }
  }
}
