import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-type-buttons',
  templateUrl: './search-type-buttons.component.html',
  styleUrls: ['./search-type-buttons.component.css']
})
export class SearchTypeButtonsComponent implements OnInit {

  @Input() button: string;
  @Input() activBtn: string;

  @Output() buttonActive: EventEmitter<string | null> = new EventEmitter<string | null>();


  buttonClick() {
    this.buttonActive.emit(this.button);
  };

  constructor() { }

  ngOnInit() {
  }

}
