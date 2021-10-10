import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.css']
})
export class SearchElementComponent {
  @Input() elem;

}
