const requestURL = 'https://jsonplaceholder.typicode.com/users';

const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if(name.value && username.value && email.value) {
        let body = {
            name: name.value,
            username: username.value,
            email: email.value
        };
        fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => console.error(error))
        .finally(clearInput())
    } 
});

function clearInput() {
    name.value = '';
    username.value = '';
    email.value = '';
}

const photoContainer = document.querySelector('.photo-container');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        const photoArr = data.splice(0, 15);
        for (key in photoArr) {
            photoContainer.innerHTML += `<div class="photo-container__item" 
            style="background:url(${photoArr[key].url}); 
            background-size: 100% 100%;">
            </div>`;
        }
    })


// function sendRequest (method, url, body = null) {
//     const headers = {
//         'Content-type': 'application/json'
//     };

//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
        
//         return response.json().then(error => {
//             const e = new Error('что-то пошло не так');
//             e.data = error;
//             throw e;
//         })
//     })
// }

// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error));

// const body = {
//     name: 'Zina',
//     age: 28,
// };

// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));