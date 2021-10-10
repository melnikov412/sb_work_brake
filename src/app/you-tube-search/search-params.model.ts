/**
 * SearchParams is a data-structure that holds an
 * parameters of a YouTube video search
 */
export class SearchParamsModel {
  time: string;
  inputText: string;
  tipe: string;


  constructor(obj?: any) {
    this.time            = obj && obj.time             || null;
    this.inputText       = obj && obj.inputText        || null;
    this.tipe            = obj && obj.tipe             || null;
  }
}
