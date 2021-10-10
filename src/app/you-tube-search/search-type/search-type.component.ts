import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-type',
  templateUrl: './search-type.component.html',
  styleUrls: ['./search-type.component.css']
})
export class SearchTypeComponent implements OnInit {

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
