import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutinModule } from './cursos-routin.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CursoComponent } from './pages/curso/curso.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CursoBoletinComponent } from './components/curso-boletin/curso-boletin.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    CursoComponent,
    CursoBoletinComponent,
    HomeComponent,
    ListadoComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CursosRoutinModule,
    MaterialModule
  ]
})
export class CursosModule { }
