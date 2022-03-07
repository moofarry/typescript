"use strict";
(function () {
    var error = function (message) {
        if (message === 'error') {
            throw new Error('New error');
        }
        return 1;
    };
    error('error');
    console.log('hello world');
})();
//# sourceMappingURL=never.js.map