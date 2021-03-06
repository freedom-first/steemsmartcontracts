const CONSTANTS = {

  // mainnet
  UTILITY_TOKEN_SYMBOL: 'ENG',
  STEEM_PEGGED_ACCOUNT: 'steem-peg',
  INITIAL_TOKEN_CREATION_FEE: '100',
  SSC_STORE_QTY: '0.001',
  // testnet

  /*
  UTILITY_TOKEN_SYMBOL: 'SSC',
  STEEM_PEGGED_ACCOUNT: 'steemsc',
  INITIAL_TOKEN_CREATION_FEE: '0',
  SSC_STORE_QTY: '1',
  */

  UTILITY_TOKEN_PRECISION: 8,
  UTILITY_TOKEN_MIN_VALUE: '0.00000001',
  STEEM_PEGGED_SYMBOL: 'STEEMP',

  // default values
  ACCOUNT_RECEIVING_FEES: 'steemsc',
  SSC_STORE_PRICE: '0.001',

  // forks definitions
  FORK_BLOCK_NUMBER: 30896500,
  FORK_BLOCK_NUMBER_TWO: 30983000,
  FORK_BLOCK_NUMBER_THREE: 31992326,
};

module.exports.CONSTANTS = CONSTANTS;
