import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gsuite } from '../pages/curso/interfaces/gsuite.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CursosService {  

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getCursos(): Observable<Gsuite[]> {
    return this.http.get<Gsuite[]>(`${ this.baseUrl }/gsuite`);
  }

  getCursosPorId( id:string ): Observable<Gsuite>{
    return this.http.get<Gsuite>(`${ this.baseUrl }/gsuite/${ id }`);
  }

  getSugerencias( termino:string ): Observable<Gsuite[]>{
    return this.http.get<Gsuite[]>(`${ this.baseUrl }/gsuite?q=${termino}&limit=6 `);
  }

  agregarCurso( curso: Gsuite): Observable<Gsuite>{
    return this.http.post<Gsuite>(`${ this.baseUrl}/gsuite`, curso);
  }

  actualizarCurso( curso: Gsuite): Observable<Gsuite>{
    return this.http.put<Gsuite>(`${ this.baseUrl}/gsuite/${ curso.id }`, curso);
  }

  BorrarCurso( id:string): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl}/gsuite/${ id }`);
  }
}
