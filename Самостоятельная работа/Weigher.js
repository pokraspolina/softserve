/*   класс Weigher
      состояние
         _name : String                      DONE
         _state : Boolean(true/false)        DONE
         _weight : Number (0 - 150)          DONE
      поведение
         getName() : String                  DONE
         getState() : Boolean                DONE
         setState(value: Boolean) : void
         on() : void                         DONE
         off() : void                        DONE
         getWeight() : Number                DONE
         setWeight(value: Number ) : void    DONE*/
function Weigher(name) {
    Devices.call(this,name);
    this._weight = 0;
};
Weigher.prototype = Object.create(Devices.prototype);
Weigher.prototype.constructor = Weigher;
Weigher.prototype.off = function() {
    Devices.prototype.off.call(this);
    this._weight = 0;
}
Weigher.prototype.getWeight = function() {
    return this._weight;
}
Weigher.prototype.setWeight = function(value) {
    if (typeof value === "number" && !isNaN(value)) {
        this._weight = value;
    }
}