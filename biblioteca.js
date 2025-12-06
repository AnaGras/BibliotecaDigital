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

//Funcio para añadir un libro
function anadirLibro() {
    console.log("------AÑADIR LIBRO------");
    let titulo = rl.question("Titulo: ");
    let autor = rl.question("Autor: ");
    let paginas = rl.question("Paginas: ");
    let genero = rl.question("Genero: ");

    let libro = new Libro(titulo, autor, paginas, genero);
    biblioteca.push(libro);


    console.log("Libro añadido correctamente.");
}


