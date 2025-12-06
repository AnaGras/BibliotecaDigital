const rl = require("readline-sync");

//Creamos la clase Libro
class Libro{
    constructor(titulo, autor, paginas, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.genero = genero;
    }

    mostrar(){
        return `${this.titulo} - ${this.autor} - ${this.paginas} - ${this.genero}`;
    }
}

//Array donde guardamos la biblioteca
let biblioteca =[];
