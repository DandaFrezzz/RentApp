import fetch from 'unfetch';

export function getAllClients(){
    return fetch('api/clients')
    .then(data => data.json())
}