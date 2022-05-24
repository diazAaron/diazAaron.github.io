let página=1;
document.querySelector(".mostrarMas").addEventListener("click", mostrarMas);

async function mostrarMas(){
    let películasPopulares= await Populares.getMásPopulares(++página);
    buscaPeliculas(películasPopulares).forEach(item=>item.DibujaPelicula());
}

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

function buscaPeliculas(películas){
    const p=[];
    for (let i = 0; i < películas.length; i++) {
        p.push(new Pelicula(películas[i].title, películas[i].poster_path, películas[i].vote_average, películas[i].release_date, películas[i].overview));
        
    }
    return p;
}

