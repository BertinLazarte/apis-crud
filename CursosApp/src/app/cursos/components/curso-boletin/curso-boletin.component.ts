import { Component, Input } from '@angular/core';
import { Gsuite } from '../../pages/curso/interfaces/gsuite.interface';

@Component({
    selector:'app-curso-boletin',
    templateUrl: './curso-boletin.component.html',
    styles: [`
        mat-card{
        margin-top: 20px
        }
    `]
})

export class CursoBoletinComponent {
    
    @Input() curso!: Gsuite;
}