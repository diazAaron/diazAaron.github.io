class Pelicula{
    constructor(titulo, poster, nota, fecha, sinopsis){
        this.titulo=titulo;
        this.poster=poster;
        this.nota=nota;
        this.fecha=fecha;
        this.sinopsis=sinopsis;
    }
    DibujaPelicula(){
        document.querySelector(".contenido").innerHTML+=
        "<div class=\"card\" style=\"width: 18rem;\">"+
            "<img src=\""+IMAGE_BASE+this.poster+"\" class=\"card-img-top\" alt=\"Poster de "+this.titulo+"\">"+
            "<div class=\"card-body\">"+
                "<h5 class=\"card-title\">"+this.titulo+"</h5>"+
            "</div>"+
            "<ul class=\"list-group list-group-flush\">"+
                    "<li class=\"list-group-item\">"+new Date(this.fecha).toLocaleDateString()+"</li>"+
                    "<li class=\"list-group-item\">"+
                    "<div class=\"progress\">"+
                        "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+this.nota*10+"%;\" aria-valuenow=\""+this.nota*10+"\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+this.nota*10+"%</div>"+
                    "</div></li>"+
            "</ul>"+
        "</div>";
    }
    DibujaIndex(){
        document.querySelector(".row").innerHTML+="<img src='"+IMAGE_BASE+this.poster+"' class='index col-1' />";
    }
    toString(){
        return this.titulo;
    }
    valueOf(){
        return this.nota;
    }
}