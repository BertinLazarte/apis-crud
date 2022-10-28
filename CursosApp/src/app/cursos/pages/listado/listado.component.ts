import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Gsuite } from '../curso/interfaces/gsuite.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[]
})
export class ListadoComponent implements OnInit {

  constructor( private cursosService: CursosService) { }

  cursos: Gsuite[] = [];

  ngOnInit(): void {

    this.cursosService.getCursos().subscribe( resp => { this.cursos = resp});

  }

}
 