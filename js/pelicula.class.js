class Pelicula{
    constructor(titulo, poster, nota){
        this.titulo=titulo;
        this.poster=poster;
        this.nota=nota;
    }
    DibujaPelicula(){
        document.querySelector(".container").innerHTML+="<div>"+this.titulo+"</div><img src='"+IMAGE_BASE+this.poster+"'/><div>"+this.nota+"</div>";
    }
    toString(){
        return this.titulo;
    }
    valueOf(){
        return this.nota;
    }
}