angular.module("App").controller("MixListCtrl",["$rootScope","$scope","$location","$routeParams","GENERAL_CONFIG","mixService","audio",function(t,o,n,a,e,i,l){o.audio=l,o.MixList=null,o.Mix=i,o.playing=function(){return"stopped"==l.state?!0:!1};var c=function(){$("img.lazy").lazyload({threshold:100,effect:"fadeIn"})};o.ChangeMixtape=function(o){t.$broadcast("MixChanged",o)},o.$on("$routeChangeSuccess",function(){i.GetAllPlaylists(a.collection).then(function(o){c(),t.$broadcast("AllPlaylists")})})}]);