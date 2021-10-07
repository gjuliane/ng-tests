import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _terms : string[] = [
    'Term 1',
    'Term 2',
    'Term 3',
    'Term 4',
  ];

  constructor() { 
    console.warn("Constructed service");
  }

  get terms(): string[]{
    return this._terms;
  }

  set addTerm(term: string) {
    this._terms.push(term);
  }

}
