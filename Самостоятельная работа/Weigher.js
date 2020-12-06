/*   класс Weigher
      состояние
         _name : String                      DONE
         _state : Boolean(on\off)            DONE
         _weight : Number (0 - 150)          DONE
      поведение
         getName() : String                  DONE
         getState() : Boolean                DONE
         setState(value: Boolean) : void     DONE
         on() : void                         DONE
         off() : void                        DONE
         getWeight() : Number                DONE
         setWeight(value: Number ) : void    DONE*/
function Weigher(name) {
    this._name = name;
    this._state = false;
    this._weight = 0;
};
Weigher.prototype.getName = function() {
    return this._name;
}
Weigher.prototype.getState = function() {
    return this._state;
}
Weigher.prototype.setState = function(value) {
    if (typeof value === "boolean") {
        this._state = value;
    }
}
Weigher.prototype.on = function(value) {
    if (this._state === true) {
        this._state ="Весы сейчас включены";
        this.setWeight(value);
    }
}
Weigher.prototype.off = function() {
    if (this._state === false) {
        this._weight = 0;
        this._state ="Весы сейчас выключены";
    }
}
Weigher.prototype.getWeight = function() {
    return this._weight;
}
Weigher.prototype.setWeight = function(value) {
    if (typeof value === "number" && !isNaN(value)) {
        this._weight = value;
    }
}
