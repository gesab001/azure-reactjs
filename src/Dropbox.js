import axios from 'axios';

const token = 'kGC9gjzuKywAAAAAAAAAAeJaVHET9K7wPmfSQMnj0sjTsnvPzaOwD9xwCCtgLNf6';
export const create = (jsondata) => {
    const url = 'https://content.dropboxapi.com/2/files/upload';
    const headers = { 
        "Authorization": "Bearer " + token,
        "Dropbox-API-Arg": "{\"path\": \"/azure.json\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
        "Content-Type": "application/octet-stream"

    };
    axios.post(url, jsondata, { headers })
        .then(response => console.log(response))

}


export const retrieve = () => {
        const url = 'https://content.dropboxapi.com/2/files/download';
        const headers = { "Authorization": "Bearer " + token, "Dropbox-API-Arg": "{\"path\": \"/azure.json\"}" };
        return  fetch(url,  {headers })
         .then((response) => response.json())
         .then((data) => {return data;});
        
        
} 

export const update = (index, question, answer) => {
    const url = 'https://content.dropboxapi.com/2/files/upload';
    const jsondata = {"question": question, "answer": answer};
    const headers = { 
        "Authorization": "Bearer " + token,
        "Dropbox-API-Arg": "{\"path\": \"/azure.json\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
        "Content-Type": "application/octet-stream"

    };
    axios.post(url, jsondata, { headers })
        .then(response => console.log(response))

}

export const onDelete = (jsondata) => {
    const url = 'https://content.dropboxapi.com/2/files/upload';
    const headers = { 
        "Authorization": "Bearer " + token,
        "Dropbox-API-Arg": "{\"path\": \"/azure.json\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
        "Content-Type": "application/octet-stream"

    };
    axios.post(url, jsondata, { headers })
        .then(response => console.log(response))

}


