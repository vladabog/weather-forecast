"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var minTemp = document.querySelector('#minTemp');
var maxTemp = document.querySelector('#maxTemp');
var state = document.querySelector('#state');
var icon = document.querySelector('#icon');
var weatherTemperature = weatherBox.lastElementChild;