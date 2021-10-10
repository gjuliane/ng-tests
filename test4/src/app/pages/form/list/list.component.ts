import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person.interfac';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _persons: Person[] = [];

  get persons(): Person[] {
    return this.personService.persons;
  }

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    
  }

  delete(id: number) {
    console.log(id);
    this.personService.deletePerson(id);
  }

}
