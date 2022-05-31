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
        document.querySelector(".mostrarMas").addEventListener("click", mostrarMas);

        window.onscroll = function () {
            scrollFunction();
        };
    }
});