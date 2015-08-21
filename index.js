var request = require('request');

module.exports = function (token) {

  var urlPattern = 'http://{{subdomen}}.xignite.com/{{product}}.json' +
      '/{{method}}?_Token={{token}}&{{params}}';

  function _getApiUrl(subdomain, product, method, token, params) {
    var query = '', queryPairs = [], url;

    for (var param in params) {
      queryPairs.push(param + '=' + params[param])
    }
    query = queryPairs.join('&');

    return urlPattern
        .replace('{{subdomen}}', subdomain)
        .replace('{{product}}', product)
        .replace('{{method}}', method)
        .replace('{{token}}', token)
        .replace('{{params}}', query);
  }

  function _process(method, params, callback) {
    var subdomain, product, url;

    switch (method) {
      // Delayed Equity Option Quote API List
      case 'GetAllEquityOptionChain':
      case 'GetAllExtendedEquityOptionChain':
      case 'GetEquityOptionChain':
      case 'GetExtendedEquityOptionChain':
      case 'GetEquityOptionSymbol':
      case 'GetEquityOption':
      case 'GetExtendedEquityOption':
      case 'GetEquityOptionBySymbol':
      case 'GetExtendedEquityOptionBySymbol':
      case 'GetEquityOptionBySymbols':
      case 'GetExtendedEquityOptionBySymbols':
        subdomain = 'globaloptions';
        product = 'xglobaloptions';
        break;
    }

    if (!subdomain || !product) {
      return callback(new Error('Can\'t define subdomain and product parameters'));
    }

    url = _getApiUrl(subdomain, product, method, token, params);

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        if (data.Outcome === 'Success') {
          return callback(null, data);
        } else {
          callback(new Error(data.Outcome + ' ' + data.Message));
        }
      }
      return callback(new Error('Some request error'));
    });
  }

  return {
    /**
     * Common method for request
     *
     * @link http://www.xignite.com/products/
     * @param method For example getAllEquityOptionChain or other from API list
     * of some product
     * @param params
     * @param callback
     * @returns {*}
     */
    get: function(method, params, callback) {
      return _process(method, params, callback);
    },

    /**
     * Returns the complete option chain for an equity.
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetAllEquityOptionChain/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getAllEquityOptionChain: function(params, callback) {
      return _process('GetAllEquityOptionChain', params, callback);
    },
    /**
     * Returns the complete option chain with extended information
     * for an equity.
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetAllExtendedEquityOptionChain/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getAllExtendedEquityOptionChain: function(params, callback) {
      return _process('GetAllExtendedEquityOptionChain', params, callback);
    },
    /**
     * Returns the option chain for an equity for a given expiration
     * (month & year)
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetEquityOptionChain/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getEquityOptionChain: function(params, callback) {
      return _process('GetEquityOptionChain', params, callback);
    },
    /**
     * Returns the option chain with extended information for an equity
     * for a given expiration (month & year)
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetExtendedEquityOptionChain/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getExtendedEquityOptionChain: function(params, callback) {
      return _process('GetExtendedEquityOptionChain', params, callback);
    },
    /**
     * Returns the option symbol for an equity for a given expiration
     * (month & year) and strike price
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetEquityOptionSymbol/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getEquityOptionSymbol: function(params, callback) {
      return _process('GetEquityOptionSymbol', params, callback);
    },
    /**
     * Returns a specific option for an equity for a given expiration
     * (month & year) and strike price
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetEquityOption/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getEquityOption: function(params, callback) {
      return _process('GetEquityOption', params, callback);
    },
    /**
     * Returns a specific option with extended information for an equity
     * for a given expiration (month & year) and strike price
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetExtendedEquityOption/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getExtendedEquityOption: function(params, callback) {
      return _process('GetExtendedEquityOption', params, callback);
    },
    /**
     * Returns a specific option for an equity when requested
     * using the full option symbol
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetEquityOptionBySymbol/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getEquityOptionBySymbol: function(params, callback) {
      return _process('GetEquityOptionBySymbol', params, callback);
    },
    /**
     * Returns a specific option with extended information for an equity
     * when requested using the full option symbol
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetExtendedEquityOptionBySymbol/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getExtendedEquityOptionBySymbol: function(params, callback) {
      return _process('GetExtendedEquityOptionBySymbol', params, callback);
    },

    /**
     * Returns an array of options for equities when requested using
     * their full option symbols
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetEquityOptionBySymbols/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getEquityOptionBySymbols: function(params, callback) {
      return _process('GetEquityOptionBySymbols', params, callback);
    },
    /**
     * Returns a specific option with extended information for an equity
     * when requested using the full option symbol
     *
     * @link http://www.xignite.com/product/global-option-price-data/api/GetExtendedEquityOptionBySymbols/
     * @param {object} params
     * @param {function} callback
     * @returns {object}
     */
    getExtendedEquityOptionBySymbols: function(params, callback) {
      return _process('GetExtendedEquityOptionBySymbols', params, callback);
    },
  }
};
