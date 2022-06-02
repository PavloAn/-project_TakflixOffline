export default class FilmService {
    url = "https://jsonplaceholder.typicode.com/todos";
    url2 = "http://localhost:8800/api/movies";

    request = new Request("http://localhost:8800/api/movies", {
        mode: 'no-cors',
    });
	
    async films4() {
        return await fetch(this.request, {
            method: 'GET',
            
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjkzNjBhNmE4MjA2OTU3YTE1YWI4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTU5NzU4MSwiZXhwIjoxNjUyMDI5NTgxfQ.ml_i1qqPVXtbWhDKxHInzcG2Ihk5JAPHzTfd3vcJ1J8`,
                'Content-Type': 'application/json'
              }
          })
        .then((response) => { 
          return response.json(); 
        }) 
        .then((data) => { 
          console.log(data); 
        });
            
    }


    request = new Request("http://localhost:8800/api/movies", {
        mode: 'no-cors',
    });

    async films3() {
        return await fetch(this.request)
            .then(value => value.json())
    }


    async films2() {
        return await fetch(this.url2)
            .then(value => value.json())
    }


    async films1() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async film(id) {
        return await fetch(this.url + "/" + id)
            .then(value => value.json())
    }
    
}