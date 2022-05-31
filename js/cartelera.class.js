'use strict'
class Cartelera
{
    static getNuevasPeliculas = () => {
        const url = `${API_BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    

        return fetch(url)
            .then(Response => Response.json())
            .then(results => results.results)
            .catch(error => console.log(error))
        
    }
}
