import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-mml',
  templateUrl: './create-mml.component.html',
  styleUrls: ['./create-mml.component.css']
})
export class CreateMmlComponent implements OnInit {

  createMMLForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createMMLForm = this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({

    })
  }

  onSubmit()
  {
    
  }
}
