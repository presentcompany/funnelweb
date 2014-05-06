# funnelweb [![Build Status](https://secure.travis-ci.org/presentcompany/funnelweb.png?branch=master)](http://travis-ci.org/presentcompany/funnelweb) #

Tries to detect if a request is coming from a machine or a person using a
regular expression. Bot and browser `User-Agent` strings sourced from
[useragentstring.com](http://www.useragentstring.com/pages/useragentstring.php).

## Installation ##

``` bash
$ npm install funnelweb
```

## Usage ##

Funnelweb just takes a user agent string and returns "true" if it's probably a bot, or "false" otherwise.

``` javascript
var funnelweb = require('funnelweb');

funnelweb('GoogleBot'); // true
funnelweb('Google Chrome'); // false
```

If you pass it an HTTP request object, it'll read the User-Agent header and do
the same:

``` javascript
var funnelweb = require('funnelweb')
  , http = require('http');

http.createServer(function(req, res) {
  var isABot = funnelweb(req);

  if (isABot) {
    res.end('you are a bot');
  } else {
    res.end('you are not a bot');
  }
}).listen(3000);
```
