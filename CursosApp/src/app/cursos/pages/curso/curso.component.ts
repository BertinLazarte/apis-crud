import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { Gsuite } from './interfaces/gsuite.interface';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class CursoComponent implements OnInit {

  curso!: Gsuite;

  constructor( private activatedRoute: ActivatedRoute, 
              private cursosService: CursosService,
              private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params .pipe( switchMap( ({id}) => this.cursosService.getCursosPorId(id)) )
    .subscribe(curso => this.curso = curso);

  }

  regresar(){
    this.router.navigate(['./cursos/listado']);
  }

}
