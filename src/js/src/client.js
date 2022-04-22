import fetch from 'unfetch';

export function getAllClients(){
    return fetch('api/clients').then(data => data.json())
}

export const addNewClient = client => fetch('api/clients', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(client)
});
