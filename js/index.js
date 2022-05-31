let página=1;


document.addEventListener("DOMContentLoaded",async function()
{
    let películasCartelera = await Cartelera.getNuevasPelículas(página);
    
    if(location.href.split("/").slice(-1)[0]=="index.html"){
        for (let i = 0; i < 5; i++) {
            let p = new Pelicula(películasCartelera[i].title, películasCartelera[i].poster_path,películasCartelera[i].vote_average);
            
        }
    }
});

document.addEventListener("DOMContentLoaded",async function()
{
    
    let películasPopulares= await Populares.getMásPopulares(página);

    if(location.href.split("/").slice(-1)[0]=="index.html"){
        
    }else if(location.href.split("/").slice(-1)[0]=="populares.html"){
        buscaPeliculas(películasPopulares).forEach(item=>item.DibujaPelicula());
    }
});

document.querySelector(".mostrarMas").addEventListener("click", mostrarMas);

async function mostrarMas(){
    let películasPopulares= await Populares.getMásPopulares(++página);
    buscaPeliculas(películasPopulares).forEach(item=>item.DibujaPelicula());
}

async function mostrarInfo(pelicula){
    document.querySelector(".offcanvas").innerHTML=
    "<div class=\"offcanvas-header\">"+
        "<h5 class=\"offcanvas-title\" id=\"offcanvasExampleLabel\">"+pelicula.querySelector(".titulo").textContent+"</h5>"+
        "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>"+
    "</div>"+
    "<div class=\"offcanvas-body\">"+
        "<div><img width='80%' src=\""+pelicula.querySelector(".imagen").src+"\" alt=\"Poster de "+pelicula.querySelector(".titulo").textContent+"\"/></div>"+
        "<div><b>Nota:</b><br/>"+
            pelicula.querySelector(".nota").innerHTML+
        "</div>"+
        "<div><b>Sinopsis:</b><br/>"+
            pelicula.querySelector(".sinopsis").textContent+
        "</div>"+
        "<div><b>Fecha de estreno:</b><br/>"+
            pelicula.querySelector(".fecha").textContent+
        "</div>"+
    "</div>";
}

function buscaPeliculas(películas){
    const p=[];
    for (let i = 0; i < películas.length; i++) {
        p.push(new Pelicula(películas[i].title, películas[i].poster_path, películas[i].vote_average, películas[i].release_date, películas[i].overview));
        
    }
    return p;
}

//botón back to top
let bttboton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    bttboton.style.display = "block";
  } else {
    bttboton.style.display = "none";
  }
}

bttboton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}