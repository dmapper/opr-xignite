# Module to pull data from Xignite API

## Available nex api list

### Delayed Equity Option Quote API List

- GetAllEquityOptionChain
- GetAllExtendedEquityOptionChain
- GetEquityOptionChain
- GetExtendedEquityOptionChain
- GetEquityOptionSymbol
- GetEquityOption
- GetExtendedEquityOption
- GetEquityOptionBySymbol
- GetExtendedEquityOptionBySymbol
- GetEquityOptionBySymbols
- GetExtendedEquityOptionBySymbols
- GetBlackScholesOptionValue

## How to use

```
  var xgnite = require('./index')('{{TOKEN HERE}}');
  
  xgnite.getAllEquityOptionChain({
    IdentifierType: 'Symbol',
    Identifier: 'MSFT',
    SymbologyType: '',
    OptionExchange: ''
  }, function(err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(result);
  });
  
```

You also can use common method for some api

```
  var xgnite = require('./index')('868198AD065847AAB5569F768C94AAD7');
  
  xgnite.get('getAllEquityOptionChain', {
    IdentifierType: 'Symbol',
    Identifier: 'MSFT',
    SymbologyType: '',
    OptionExchange: ''
  }, function(err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(result);
  });
  
```