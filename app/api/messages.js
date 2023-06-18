import client from './client';

const send = (message, listingId) => {
    client.post('/messages', {
        message,
        listingId
    });
};

const getMessage = (message, listingId) => {
    client.get('/messages', {
        message,
        listingId,
    })
}

export default {
    send,
    getMessage
};

