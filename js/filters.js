angular.module('runecasterFilters', []).filter('removeBackSlash', function () {
    return function (input) {
        /**
         * coerce to string ..
         * this is not needed when
         * argument is string but
         * we must be sure ..
         */
        return String(input).replace(/\\/g, '');
    };
});