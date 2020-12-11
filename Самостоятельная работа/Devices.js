function Devices(name) {
	this._name = name;
    this._state = false;
}

Devices.prototype.getName = function() {
    return this._name;
}
Devices.prototype.getState = function() {
    return this._state;
}
Devices.prototype.setState = function(value) {
    this._state = value;
}
Devices.prototype.on = function() {
    this._state = true;
}
Devices.prototype.off = function() {
    this._state = false;
}