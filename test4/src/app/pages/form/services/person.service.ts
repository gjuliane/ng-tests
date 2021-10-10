import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person.interfac';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  _persons: Person[] = [
    { id:1, name: 'Lucia', age: 41 },
    { id:2, name: 'Sandra', age: 21 },
    { id:3, name: 'Pedro', age: 34 },
    { id:4, name: 'Gustavo', age: 27 },
    { id:5, name: 'Pablo', age: 18 },
  ];

  get persons(): Person[] {
    return this._persons;
  }

  constructor() {
    console.warn("Servicio contruido");
  }

  personById( id: number): Observable<Person|undefined> {
    const person = this._persons.find( person => person.id == id);
    console.log(person);
    return of(person);
  }

  addPerson(person: Person) {
    console.log('Debug:', person);
    
    if (!person.hasOwnProperty('id')) {
      const id = this._persons.length + 1;
      this._persons.push({id: id , ...person});
      console.log('agregar');
      return;
    }
    const index = this.existPerson(person)
    console.log('Index:', index);
    
    if (index >= 0) {
      // actualizamos
      console.log('actualizar');
      
      this._persons[index] = {...person};
    }
    console.log(this._persons);
    
  }
  existPerson(personFind: Person): number {
    const index = this._persons.findIndex( person => person.id == personFind.id);
    return index
  }

  deletePerson(index: number) {
    this._persons.splice(index, 1);
  }
}
