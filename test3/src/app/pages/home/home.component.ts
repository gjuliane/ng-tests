import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searched: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSearched($event: string){
    console.log('container: ', $event);
    
  }
}
