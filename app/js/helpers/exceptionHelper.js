/**
 * Created by Adam_Kruppa on 8/7/2015.
 */
//angular
//    .module('blocks.exception')
//    .config(exceptionConfig);
//
//
//exceptionConfig.$inject = ['$provide'];
//
//function exceptionConfig($provide) {
//    $provide.decorator('$exceptionHandler', extendExceptionHandler);
//}
//
//extendExceptionHandler.$inject = ['$delegate', 'toastr'];
//
//function extendExceptionHandler($delegate, toastr) {
//    return function(exception, cause) {
//        $delegate(exception, cause);
//        var errorData = {
//            exception: exception,
//            cause: cause
//        };
//        alert("HIBA" + exception.msg);
//        /**
//         * Could add the error to a service's collection,
//         * add errors to $rootScope, log errors to remote web server,
//         * or log locally. Or throw hard. It is entirely up to you.
//         * throw exception;
//         */
//        toastr.error(exception.msg, errorData);
//    };
//}