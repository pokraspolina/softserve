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
            offAllDevice(): void
            delayedOff(name: String, delay: Number, callback: Function): void*/
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
        let device;
        this._devices.forEach((value) =>{
            if(name === value.name){
                device = value;
            }
        });
        return device;
    };
    deleteDeviceByName(name) { 
        this._devices.forEach((value, index) => {
            if(name === value.name){
                this._devices.splice(index,1);
            }
        } );
    };
    offAllDevice() {
        this._devices.forEach((value) =>
        value.off()
        );
    };
    onDevice(name, delay, callback) {
        this._devices.forEach((value) => {
            if(name === value.name){
                setTimeout(()=>{
                    callback(null,value.on())},delay)
            } else {
                callback(Error, null)
                }
        });
    };
};



// var sh = new SmartHouse("HOME");
// sh.addDevice(new Hoover("Пылесос"));
// sh.addDevice(new Weigher("Весы"));
// console.log(sh.devices);
// console.log(sh.getDeviceByName("Весы"));
// sh.getDeviceByName("Пылесос").on();
// sh.offAllDevice();