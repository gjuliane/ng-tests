import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../pages/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  terms: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit():void{
    this.terms = this.searchService.terms;
  }

}
