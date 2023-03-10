import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogService } from '../app/service/catalog.service';
import { ICatalogModel } from './models/modelCatalogApi';
import { LazyLoadEvent } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  createForm!: FormGroup;
  datacaoalogs!:ICatalogModel[];

  constructor(
    private fb: FormBuilder,
    private iservice: CatalogService
    ) {
    this.intiForm();
    this.iservice.GetProduct().subscribe(resp =>{
      this.datacaoalogs = resp;
    })
  }
  first = 0;
  rows=5;
  intiForm() {
    this.createForm = this.fb.group({
      txtCategory: ['', [Validators.required]],
      txtSummary: ['', [Validators.required]],
      txtDescription: ['', [Validators.required]],
      txtPrice: [null, [Validators.required]],
    });
  }
  submit(){
    if (this.createForm.invalid){
      console.log()
      for (const i in this.createForm.controls ) {
        this.createForm.controls[i].markAsDirty();
        this.createForm.controls[i].updateValueAndValidity();
      }
    }
  }
  loadCatalog(){
    this.iservice.GetProduct().subscribe((resp)=>{this.datacaoalogs=resp;});
  }
  P(){

  }
}