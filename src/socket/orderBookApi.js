let socket;
const query = {
    "event": 'bts:subscribe',
    "data": {
      "channel": 'order_book_btcusd'
    }
};

export const Init = (call) => {

    socket = new WebSocket("wss://ws.bitstamp.net");

    socket.onopen = function() {
        socket.send(JSON.stringify(query));
    };

    socket.onmessage = function(evt) {
        const res =  JSON.parse(evt.data);
        call(res.data)
    };
}