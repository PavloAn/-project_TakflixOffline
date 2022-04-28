export default class FilmService {
    url = "https://jsonplaceholder.typicode.com/todos";
    url2 = "http://apimokap.zzz.com.ua/apiproject.json";


    async films2() {
        return await fetch(this.url2)
            .then(value => value.json())
    }


    async films() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async film(id) {
        return await fetch(this.url + "/" + id)
            .then(value => value.json())
    }
}