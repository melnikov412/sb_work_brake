import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { SearchResult } from './search-result.model';
import {SearchParamsModel} from './search-params.model';

/*
  This API key may or may not work for you. Your best bet is to issue your own
  API key by following these instructions:
  https://developers.google.com/youtube/registering_an_application#Create_API_Keys

  Here I've used a **server key** and make sure you enable YouTube.

  Note that if you do use this API key, it will only work if the URL in
  your browser is "localhost"
*/
export const YOUTUBE_API_KEY =
  'AIzaSyCkF0FeQxgvG8Oe8NWX_LDnPsjSFYvpRgI';
  // 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/search';
// 'https://www.googleapis.com/youtube/v3/channels';

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
@Injectable()
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string, typeQuery: string | null): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `type=${typeQuery}`,
      `part=snippet`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    // console.log('////// queryUrl: ', queryUrl);
    return this.http.get(queryUrl).map(response => {
      return <any>response['items'].map(item => {
       // console.log('raw item', item); // uncomment if you want to debug
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
          kind: item.id.kind
        });
      });
    });
  }

  getFromLocalStorage(index: string): SearchParamsModel[] | null {
      return  JSON.parse(localStorage.getItem(index));
  }

  setLocalStorageParams(params: SearchParamsModel): void {
    const tempArray = this.getFromLocalStorage('index');
    if (tempArray) {
      tempArray.unshift(params);
      localStorage.setItem('index', JSON.stringify(tempArray));
    }else {
      localStorage.setItem('index', JSON.stringify([params]));
    }
  }

}
