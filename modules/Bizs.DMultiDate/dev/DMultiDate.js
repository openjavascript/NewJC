;
(function(define, _win) {
    'use strict';
    define(['JC.BaseMVC', 'JC.Calendar', 'DEV.Bizs.DMultiDate.default', 'DEV.Bizs.DMultiDate.single', 'DEV.Bizs.DMultiDate.double', 'DEV.Bizs.DMultiDate.custom'], function() {
  
        return Bizs.DMultiDate;
    });
}(typeof define === 'function' && define.amd ? define :
    function(_name, _require, _cb) {
        typeof _name == 'function' && (_cb = _name);
        typeof _require == 'function' && (_cb = _require);
        _cb && _cb();
    }, window
));
