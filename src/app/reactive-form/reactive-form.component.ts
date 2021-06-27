import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

public formData= this.formBuilder.group({
  name:['',Validators.required],
  age:['',Validators.required],
});

  constructor( 
    private common:CommonService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
  }
public onSubmit():void{
  this.common.submitData(this.formData.value);
}
}
