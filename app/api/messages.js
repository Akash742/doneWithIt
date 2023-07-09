import client from './client';

const send = (message, listingId) => {
    client.post('/messages', {
        message,
        listingId
    });
};

const getMessage = () => {
    return client.get('/messages');
}

export default {
    send,
    getMessage
};

