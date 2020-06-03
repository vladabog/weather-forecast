"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temp_min = '';
    this._temp_max = '';
    this._state = '';
    this._temperature = '';
    this._icon = '';

}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function () {
        return this._temperature;
    },
    set: function (value) {
        this._temperature = 'Temperature: ' + (value * 1 - 273.15).toFixed(2) + 'C.';


    }
});
Object.defineProperty(Weather.prototype, 'minTemp', {
    get: function () {
        return this._temp_min;
    },
    set: function (value) {
        this._temp_min = 'Min-temp: ' + (value * 1 - 273.15).toFixed(2) + 'C.';


    }
});
Object.defineProperty(Weather.prototype, 'maxTemp', {
    get: function () {
        return this._temp_max;
    },
    set: function (value) {
        this._temp_max = 'Max-temp: ' + (value * 1 - 273.15).toFixed(2) + 'C.';


    }
});
Object.defineProperty(Weather.prototype, 'state', {
    get: function () {
        return this._state;
    },
    set: function (value) {
        this._state = 'State: ' + (value);


    }
});
Object.defineProperty(Weather.prototype, 'icon', {
    get: function () {
        return this._icon;
    },
    set: function (value) {
        this._icon = '<img src="images/weathericon/' + (value) + '.png"></img>'


    }
});
