/*класс Hoover
      состояние
         _name : String                      
         _state : Boolean(true/false)        
         _mode : String 
      поведение
         getName() : String                  
         getState() : Boolean                
         setState(value: Boolean) : void
         on() : void                         
         off() : void                        
         getMode() : String                
         setMode(value: Number(0-4) ) : void*/
function Hoover(name) {
    Devices.call(this,name);
    this._mode = "На зарядке";
};
Hoover.prototype = Object.create(Devices.prototype);
Hoover.prototype.constructor = Hoover;

Hoover.prototype.off = function() {
    Devices.prototype.off.call(this);
    this._mode = "На зарядке";
}
Hoover.prototype.getMode = function() {
    return this._mode;
}
Hoover.prototype.setMode = function(value) {
    if (typeof value === "number" && !isNaN(value)) {
        switch(value){
            case 0: this._mode = "На зарядке";
                    break;
            case 1: this._mode = "Автоматический режим";
                    break;
            case 2: this._mode = "Локальная очистка";
                    break;
            case 3: this._mode = "По периметру";
                    break;
            case 4: this._mode = "Режим 'МАX'";
                    break;
            default: this._mode = "Автоматический режим";
                    break;
        }
    }
}