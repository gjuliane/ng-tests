import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  heroe: Heroe = {
    name: '',
    power: 0
  }

  @Output('outputHeroe') outputHeroe: EventEmitter<Heroe> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addHeroe() {
    console.log(this.heroe);
    this.outputHeroe.emit(this.heroe);
    
  }
}
