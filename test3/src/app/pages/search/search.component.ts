import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearchEmit: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(value: string) {
    console.log("search: ",value);
    this.searchService.addTerm = value;
    console.log(this.txtSearch.nativeElement.value);
    this.txtSearch.nativeElement.value = '';

    // this.onSearchEmit.emit(value);
  }

}
