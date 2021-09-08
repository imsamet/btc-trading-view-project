import TradingViewWidget from 'react-tradingview-widget';

function TradingView() {

    return(
        <div>
            <TradingViewWidget 
                symbol="BITSTAMP:BTCUSD" 
                theme="Dark"
                autosize
            />
        </div>
    )
}

export default TradingView