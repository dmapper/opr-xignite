# Module to pull data from Xignite API

## Available next api list

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
  var xignite = require('xignite')('{{TOKEN HERE}}');
  
  xignite.getAllEquityOptionChain({
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
  var xignite = require('xignite')('{{TOKEN HERE}}');
  
  xignite.get('getAllEquityOptionChain', {
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