import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-buttons-radioreactive',
  templateUrl: './buttons-radioreactive.component.html',
  styleUrls: ['./buttons-radioreactive.component.css']
})
export class ButtonsRadioreactiveComponent implements OnInit {
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }
}
