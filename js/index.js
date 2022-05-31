let página=1;


document.addEventListener("DOMContentLoaded", async function()
{
    let peliculas = await Cartelera.getNuevasPeliculas();
    console.log(peliculas)
    
    for(let i = 0; i<10; i++)
    {
        let cartelera = new Pelicula(peliculas[i].title, peliculas[i].poster_path, "", "", "")
        cartelera.DibujaCartelera(i)
    }
})

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
