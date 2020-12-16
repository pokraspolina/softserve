/*Чертеж класса Дом
    класс SmartHouse
        состояние
            _name: String
            _devices: [Object]
        поведение
            name(): String                   
            addDevice(device): void             
            get devices(): [Object]
            getDeviceByName(name): Object
            deleteDeviceByName(name): void
            offAllDevice(): void*/
class SmartHouse{
    constructor(name){
        this._name = name;
        this._devices = [];
    }
    get name() {
        return this._name;
    };
    addDevice(device) {
        this._devices.push(device);
    };
    get devices() {
        return this._devices;
    };
    getDeviceByName(name) {
        let r;
        this._devices.forEach((value) =>{
            if(name === value.name){
                r = value;
            }
        });
        return r;
    };
    deleteDeviceByName(name) {
        for (var i = 0; i < this._devices.length; i++) {
            if (name === this._devices[i].name) {
                this._devices.splice(i, 1);
            }
        }
    };
    offAllDevice() {
        this._devices.forEach((value) =>{
        value.off();
    });
    };
};

//var sh = new SmartHouse("HOME");
// sh.addDevice(new Hoover("Пылесос"));
// sh.addDevice(new Weigher("Весы"));
// console.log(sh.devices);
// console.log(sh.getDeviceByName("Весы"));
// sh.getDeviceByName("Пылесос").on();
// sh.offAllDevice();