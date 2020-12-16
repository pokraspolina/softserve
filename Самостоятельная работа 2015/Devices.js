class Devices {
	constructor(name){
		this._name = name;
		this._state = false;
	}
	get name() {
		return this._name;
	}
	get state() {
		return this._state;
	}
	set state(value) {
		this._state = value;
	}
	on() {
		this._state = true;
	}
	off() {
		this._state = false;
	}
};