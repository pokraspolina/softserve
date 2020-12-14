/*Чертеж класса Дом
   класс SmartHouse
      состояние
         _name: String                       DONE
         _devices: [Object]                  DONE
      поведение
         getName(): String                   DONE
         addDevice(device): void             DONE
         getDevices(): [Object]              DONE
         getDeviceByName(name): Object
         deleteDeviceByName(name): void
         offAllDevice(): void*/
function SmartHouse(name) {
    this._name = name;
    this._devices = [];
}
SmartHouse.prototype.getName = function() {
    return this._name;
};
SmartHouse.prototype.addDevice = function(device) {
    this._devices.push(device);
};
SmartHouse.prototype.getDevices = function() {
    return this._devices;
};
SmartHouse.prototype.getDeviceByName = function(name) {
    for (var i = 0; i < this._devices.length; i++) {
        if (name === this._devices[i].getName()) {
            return this._devices[i];
        }
    }
};
SmartHouse.prototype.deleteDeviceByName = function(name) {
    for (var i = 0; i < this._devices.length; i++) {
        if (name === this._devices[i].getName()) {
            this._devices.splice(i, 1);
        }
    }
};
SmartHouse.prototype.offAllDevice = function() {
    this._devices.forEach((value) =>{
        value.off();
    });
};

// var sh = new SmartHouse("HOME");
// sh.addDevice(new Hoover("Пылесос"));
// sh.addDevice(new Weigher("Весы"));
// console.log(sh.getDevices());
// console.log(sh.getDeviceByName("Весы"));
// sh.getDeviceByName("Пылесос").on();
// sh.offAllDevice();
