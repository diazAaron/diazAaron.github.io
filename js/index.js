let página=1;
document.addEventListener("DOMContentLoaded",async function()
{
    let películas = await Cartelera.getNuevasPelículas(página);
    
});

document.addEventListener("DOMContentLoaded",async function()
{
    document.querySelector(".container").innerHTML="";
    for (let i = 1; i <= 5; i++) {
        let películasPopulares= await Populares.getMásPopulares(i);
        películasPopulares.DibujaPelicula();
    } 
});

