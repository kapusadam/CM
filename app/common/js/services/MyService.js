/**
 * Created by Adam_Kruppa on 8/7/2015.
 */

angular.module('common',[]).service('MyService', function(){
    this.myServiceFunction = function() {
        console.log("SERVICE HIVAS!!");
    };
});