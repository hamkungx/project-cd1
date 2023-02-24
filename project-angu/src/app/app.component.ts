import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createForm!: FormGroup;

  data: any[] =[{
    imageUrl: '../../asse'
  }
  ]
}

intiForm() {
  this.createFrom = this.fb.group({
    txtCategory: ['', [Validators.required]],
    txtSummary: [''],
    txtDescription: [''],
    txtPrice: [null, [Validators.required]],
  });
}