export interface Gsuite {
    id?:              string;
    materia:            string;
    tecnologias:      string;
    docente:          string;
    nivel:            string;
    idioma:           Language;
    alt_img?:         string;
}

export enum Language {
    Ingles = "Ingles Americano",
    Español = "Español",
}