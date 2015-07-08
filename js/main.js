var app = angular.module('myApp', []).controller('masterCtrl', function (){
  var self = this;

  self.flowers = [
  	{
  		name: "Tulip",
  		color: "pink"
  	},
  	{
  		name: "Daisy",
  		color: "white"
  	},
  	{
  		name: "Poppy",
  		color: "red"
  	},
  	{
  		name: "Lilly of the Valley",
  		color: "white"
  	},
  	{
  		name: "Amaryllis",
  		color: "pink"
  	},
  	{
  		name: "Magnolia",
  		color: "white"
  	},
  	{
  		name: "Crocus",
  		color: "purple"
  	},
  	{
  		name: "Gerberas",
  		color: "orange"
  	}

  ]
});