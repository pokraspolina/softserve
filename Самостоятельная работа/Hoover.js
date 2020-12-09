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
    this._name = name;
    this._state = false;
    this._mode = "На зарядке";
};
Hoover.prototype.getName = function() {
    return this._name;
}
Hoover.prototype.getState = function() {
    return this._state;
}
Hoover.prototype.setState = function(value) {
    this._state = value;
}
Hoover.prototype.on = function() {
    this._state = true;
}
Hoover.prototype.off = function() {
    this._state = false;
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
