module.exports = {
    isObject: function(value) {
        return Object.prototype.toString.call(value) == '[object Object]'
    },
    // https://davidwalsh.name/javascript-debounce-function
    debounce: function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}