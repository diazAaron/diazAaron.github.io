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
        "<div class=\"card\" style=\"width: 18rem;\" onclick=\"mostrarInfo(this)\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\">"+
            "<img src=\""+IMAGE_BASE+this.poster+"\" class=\"card-img-top imagen\" alt=\"Poster de "+this.titulo+"\">"+
            "<div class=\"card-body\">"+
                "<h5 class=\"card-title titulo\">"+this.titulo+"</h5>"+
            "</div>"+
            "<ul class=\"list-group list-group-flush\">"+
                    "<li class=\"list-group-item fecha\">"+new Date(this.fecha).toLocaleDateString()+"</li>"+
                    "<li class=\"list-group-item nota\">"+
                    "<div class=\"progress\">"+
                        "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+this.nota*10+"%;\" aria-valuenow=\""+this.nota*10+"\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+this.nota*10+"%</div>"+
                    "</div></li>"+
            "</ul>"+
            "<div hidden class=\"sinopsis\">"+this.sinopsis+"</div>"+
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
    DibujaCartelera(i)
    {
        let cuerpo = document.querySelector(".carousel-inner")
        if(i == 0)
        {
            cuerpo.innerHTML += "<div class='carousel-item active'>" +
                                    "<img src='"+ IMAGE_BASE+this.poster +"' class='d-block w-30'>" +
                                    "<div class= 'datos'>" +
                                        "<div class= 'titulo'>" +
                                            "<span>" + this.titulo + "</span>"+
                                        "</div>" +
                                        "<div>" +
                                            "<h4>" + this.nota + "</h4>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>";
        }
        else
        {
            cuerpo.innerHTML += "<div class='carousel-item'>" +
                                    "<img src='"+ IMAGE_BASE+this.poster +"' class='d-block w-30'>" +
                                    "<div class= 'datos'>" +
                                        "<div class= 'titulo'>" +
                                            "<span>" + this.titulo + "</span>"+
                                        "</div>" +
                                        "<div>" +
                                            "<h4>" + this.nota + "</h4>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>";
        }
    }
}
