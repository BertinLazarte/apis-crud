import { Component, OnInit } from '@angular/core';
import { Gsuite } from '../curso/interfaces/gsuite.interface';
import { CursosService } from '../../services/cursos.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  cursos: Gsuite[] = [];
  cursoSeleccionado!: Gsuite | undefined;

  constructor( private cursosService: CursosService
               , private router: Router) { }

  ngOnInit(): void {
  }

  buscando(){
    this.cursosService.getSugerencias( this.termino.trim() ) .subscribe( cursos => this.cursos = cursos );
  
  }

  opcionSeleccionada ( event:MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      this.cursoSeleccionado = undefined;
      return;
    }

    const curso:Gsuite = event.option.value;
    this.termino = curso.materia;

    // this.cursosService.getCursosPorId(curso.id!) .subscribe( curso => this.cursoSeleccionado = curso);
    this.cursosService.getCursosPorId(curso.id!) .subscribe( resp => this.router.navigate([`/cursos/${ curso.id }`]));
  }

}
