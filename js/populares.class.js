class Populares{
    static getMásPopulares = (página) => {
        const url = `${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${página}`;
        return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))
    }
}

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

let bttboton = document.getElementById("btn-back-to-top");

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