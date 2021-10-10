import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { YouTubeSearchService } from 'app/you-tube-search/you-tube-search.service';
import { SearchResult } from 'app/you-tube-search/search-result.model';

import { environment } from '../../../environments/environment';
import {any} from 'codelyzer/util/function';
import {SearchParamsModel} from '../search-params.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  env = environment;
  buttonActive = this.env.buttonActive;
  tipeQuery: string | null = null;
  buttons = this.env.buttons;
  textInput = '';

  form: FormGroup;

  updateButtonActive($event: string) {
    this.buttonActive = $event;
    // console.log('APP-COMPONENT buttonActive: ', this.buttonActive);
  }

  constructor(
    private youtube: YouTubeSearchService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
  this.route.queryParams.subscribe((params) => {
    this.textInput = params.inputText;
    if (params.tipe) {
      this.buttonActive = params.tipe;
    }
  });
    this.form = new FormGroup({
      textInput: new FormControl(this.textInput, [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  submit() {
    if (this.form.valid) {
      this.tipeQuery = (this.buttonActive === this.env.buttonActive) ? null : this.buttonActive;
      this.textInput = this.form.value.textInput;

      this.youtube.search(this.form.value.textInput, this.tipeQuery).subscribe(
        (results: SearchResult[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
          // console.log('////  RESULT ///  DATA: ', Date.now(), ' ЗАПРОС: ', this.form.value.textInput, ' ТИП: ', this.tipeQuery);
          this.youtube.setLocalStorageParams(new SearchParamsModel({
            time: Date.now(),
            inputText: this.form.value.textInput,
            tipe: this.tipeQuery
          }));
          this.form.reset();
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
    } // if (this.form.valid)
  }
}
