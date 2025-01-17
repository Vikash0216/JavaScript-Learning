console.log('Babbbyyyyyyyy');
const url = 'https://jsonplaceholder.typicode.com/photos'
const url2 = 'https://jsonplaceholder.typicode.com/todos'

async function getUserData(url, url2) {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    for (const element of data) {
        if (element.id === 1) {
            const response2 = await fetch(url2)
            const data2 = await response2.json()
            // console.log(data2);  
            for (const element of data2) {
                console.log(element.title);

            }
        }
    }

}
getUserData(url, url2)

