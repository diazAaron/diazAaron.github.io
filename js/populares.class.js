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