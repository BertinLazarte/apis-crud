import { Component, OnInit } from '@angular/core';
import { Gsuite, Language } from '../curso/interfaces/gsuite.interface';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  curso: Gsuite = {
    materia:        '',
    tecnologias:     '',
    docente:        '',
    nivel: '',
    idioma:       Language.Español,
    alt_img: ''
  };

  language = [
    {
      id: 'Ingles Americano',
      desc: 'EEUU - Ingles'
    },
    {
      id: 'Español Latinoamericano',
      desc: 'LA - Español'
    }
  ];

  constructor( private cursosServices: CursosService, private activatedRoute: ActivatedRoute
               , private router: Router) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params. pipe(switchMap( ({id}) => this.cursosServices.getCursosPorId( id ) ))
    . subscribe( curso => this.curso = curso);
  }


  
  guardar(){
    if( this.curso.materia.trim().length === 0){
      return;
    }

    if( this.curso.id){
      //Actualizar
      this.cursosServices.actualizarCurso( this.curso ). subscribe( curso => console.log( 'Actualizando...', curso));
    } else{
      // Crear
      this.cursosServices.agregarCurso( this.curso ) .subscribe( curso => { this.router.navigate(['/cursos/editar', curso.id])})
    } 
  }

  borrarCurso(){
    this.cursosServices.BorrarCurso( this.curso.id! ). subscribe( resp => { this.router.navigate(['/cursos'])});
  }
}
