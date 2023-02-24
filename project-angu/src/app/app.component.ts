import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    
  }

  data: any[] =[{
    imageUrl: '../../asse'
  }
  ]
  intiForm() {
    this.createForm = this.fb.group({
      txtCategory: ['', [Validators.required]],
      txtSummary: [''],
      txtDescription: [''],
      txtPrice: [null, [Validators.required]],
    });
  }
}
