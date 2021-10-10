import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../interfaces/person.interfac';
import { PersonService } from '../services/person.service';
import { pluck, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.required, Validators.min(18), Validators.maxLength(1)]]
    }
  )

  person: Person = {
    name: '',
    age: 18
  }

  labelButton: string = 'Agregar'

  labelErrors = {
    name: '',
    age: ''
  }

  constructor(
    private fb: FormBuilder,
    public personService: PersonService,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {

    // this.personService.personById(1);
    // Inicializador
    this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap( id => this.personService.personById(id))
    // ).subscribe( person => this.person = person! );
    ).subscribe( person => {
      console.log(person);
      if (person != undefined) {
        // Editar
        this.person = {...person};
        this.myForm.reset(person);
        this.labelButton = 'Editar'
      }
    });

  }

  save() {
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }
    this.person.name = this.myForm.get('name')?.value;
    this.person.age = this.myForm.get('age')?.value;
    console.log('Save Valid');
    console.log(this.person);

    this.personService.addPerson(this.person);

  }

  fieldHasErrors(field: string) {
    const error = this.myForm.controls[field].errors;
    // console.log(error);
    if (error == null) {
      this.labelErrors = {...this.labelErrors, ...{[field]: ''}}
    }
    else if (error.hasOwnProperty('required')) {
      this.labelErrors = {...this.labelErrors, ...{[field]: 'Campo requerido'}}
    }
    else if (error.hasOwnProperty('minlength')) {
      this.labelErrors = {...this.labelErrors, ...{[field]: `Debe terner al menos ${error.minlength.requiredLength}`}}
    }
    else if (error.hasOwnProperty('min')) {
      this.labelErrors = {...this.labelErrors, ...{[field]: `Debe terner al menos ${error.min.min} años`}}
    }

    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
}
