module.exports = {
  CRYPTO_TABLE_TITLE: [
    'Name',
    'Price',
    'Market Cap',
    'Volume (24h)',
    'Change (24h)',
  ],
  CRYPTO_TABLE_DATA: {
    Name: 'name',
    Price: 'priceUsd',
    MarketCap: 'marketCapUsd',
    Volume: 'volumeUsd24Hr',
    Change: 'changePercent24Hr',
  },

  EXCHANGE_TABLE_TITLE: [
    'Name',
    'Price',
    'Market Cap',
    'Volume (24h)',
    'Change (24h)',
  ],
  EXCHANGE_TABLE_DATA: {
    Name: 'name',
    Price: 'tradingPairs',
    MarketCap: 'percentTotalVolume',
    Volume: 'volumeUsd',
    Change: 'updated',
  },
};
