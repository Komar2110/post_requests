const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(JSON.parse(xhr.response));
            }
        };
        
        xhr.onerror = () => {
            reject(xhr.response);
        };
        
        xhr.send(JSON.stringify(body));
    });
    
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const body = {
    name: 'Zina',
    age: 28,
};

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(error => console.log(error));