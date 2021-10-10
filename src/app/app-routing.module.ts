import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YouTubeSearchComponent} from './you-tube-search/you-tube-search.component';
import {SearchListComponent} from './you-tube-search/search-list/search-list.component';

const routers: Routes = [
  {path: '', component: YouTubeSearchComponent},
  {path: 'searchlist', component: SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
