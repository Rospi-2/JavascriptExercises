/* 1.- Sucht euch auf dieser Website eine API aus,und fragt diese mit der Fetch API ab. Gebt die Daten schön
 formatiert aus.
2. Nutzt die regres.in API, um jeweils einen erfolgreich , wenn ihr einen 2xx Status CODe erhaltet. 
(Beachtet, dass die API die von euch gesendeten Daten nicht speichert!.)
 */

const response = await fetch('https://official-joke-api.appspot.com/random_joke');
const data = await response.json();
console.log(response.status, data);



const user = {
    name: "Mameluco",
    job: "Toca narices"
};


const response1  = await  fetch ('https://reqres.in/api/users', {
    method: 'POST',
    headers:{
         'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
});
 const data1 = await response1.json();
console.log(response.status, data1);
 console.log(response.status, data1.name);


const response2  = await  fetch ('https://reqres.in/api/users/476', {
    method: 'PUT',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
});

const data2 = await response2.json();
console.log(response.status, data2);

const response3  = await  fetch ('https://reqres.in/api/users/212', {
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
});

const data3 = await response3.json();
console.log(response.status, data3);

