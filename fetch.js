console.log('Baaabbbbyyyyy');
const url = 'https://jsonplaceholder.typicode.com/photos'
const url2 = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then(function (response) {
        // console.log(response);
        if (!response.ok) {
            console.log('Something went wrong');
            return 0
        }
        const data = response.json()
        return data
    }).then(function (data) {
        // console.log(typeof data);
        for (const element of data) {
            if (element.id === 1) {
                fetch(url2)
                    .then(function (response) {
                        console.log(response);
                        if (!response.ok) {
                            console.log('Something went wrong');
                            return 0
                        }
                        return response.json()
                    }).then(function (data) {
                        console.log(data);

                    })
                    .catch(function (error) {
                        console.log(error.message);

                    })
            }
        }
    })
    .catch(function (error) {
        console.log(error.message, "Please check the api");

    })

