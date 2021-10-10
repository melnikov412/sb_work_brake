import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/search-result.component';
import { SearchBoxComponent } from './you-tube-search/search-box.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';

import { ButtonsRadioreactiveComponent } from './you-tube-search/buttons-radioreactive/buttons-radioreactive.component';
import { SearchTypeButtonsComponent } from './you-tube-search/search-type-buttons/search-type-buttons.component';
import {SearchFormComponent} from './you-tube-search/search-form/search-form.component';
import {SearchTypeComponent} from './you-tube-search/search-type/search-type.component';
import { SearchListComponent } from './you-tube-search/search-list/search-list.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchElementComponent } from './you-tube-search/search-element/search-element.component';


@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    ButtonsRadioreactiveComponent,
    SearchTypeButtonsComponent,
    SearchFormComponent,
    SearchTypeComponent,
    SearchListComponent,
    SearchElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    // <-- right here
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {}
