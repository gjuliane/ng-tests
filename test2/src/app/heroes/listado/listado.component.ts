import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [
    {
      name: 'Capitan América',
      power: 90
    },
    {
      name: 'Iron Man',
      power: 87
    },
    {
      name: 'Hulk',
      power: 100
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarHeroe(heroe:Heroe){
    console.log('Recibido', heroe);
    this.heroes.push(heroe);
  }
}
