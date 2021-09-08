let socket;
const query = {
    "event": 'bts:subscribe',
    "data": {
      "channel": 'live_trades_btcusd'
    }
};

export const initLiveTrades = (call) => {

    socket = new WebSocket("wss://ws.bitstamp.net");

    socket.onerror = (error) => {
        console.log('WebSocket Error ' + error);
    };

    socket.onopen = () => {
        socket.send(JSON.stringify(query));
    };

    socket.onmessage = (evt) => {
        const res =  JSON.parse(evt.data);
        call(res.data)
    };

    socket.onclose = () => {
        console.log('Websocket connection closed');
    };
}