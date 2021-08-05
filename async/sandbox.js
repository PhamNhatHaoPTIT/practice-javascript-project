// const getTodo = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText);
//         } else if(request.readyState === 4) {
//             callback('cannot fetch data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
//     request.send();
// };

// getTodo((err, data) => {
//     console.log('callback fire');
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


// const getTodo = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             resolve(request.responseText);
//         } else if(request.readyState === 4) {
//             reject('cannot fetch data');
//         }
//     });

//     request.open('GET', resource);
//     request.send();
//     });
// };

// getTodo('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log('in then: ' + data);
// }).catch(err => {
//     console.log('in catch: ' + err);
// });


// fetch API
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     return data.json();
// }).then(data => {
//     console.log('in 2nd block: ' + data);
// }).catch(err => {
//     console.log('in catch: ' + err);
// })

// async - await
const getTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

getTodo().then(data => {
    console.log(data);
});
