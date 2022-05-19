class Populares{
    static getMásPopulares = (página) => {
        const url = `${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${página}`;
        return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .then(data => {
            const p={
                titulo: data[0].title,
                poster: data[0].poster_path,
                nota: data[0].vote_average
            }
            return new Pelicula(p.titulo,p.poster,p.nota)
        })
        .catch(error => console.log(error))
    }
}