/**
 * Created by Adam_Kruppa on 8/7/2015.
 */

angular.module('cm.common',[]).service('MyService', function(){
    this.myServiceFunction = function(text) {
        console.log("SERVICE HIVAS!!"+ text);
    };
});