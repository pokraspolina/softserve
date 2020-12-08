/*   класс Weigher
      состояние
         _name : String                      DONE
         _state : String                     DONE
         _weight : Number (0 - 150)          DONE
      поведение
         getName() : String                  DONE
         getState() : Boolean                DONE
         on(value) : void                    DONE
         off() : void                        DONE
         getWeight() : Number                DONE
         setWeight(value: Number ) : void    DONE*/
function Weigher(name) {
    this._name = name;
    this._state = "Весы сейчас выключены";
    this._weight = 0;
};
Weigher.prototype.getName = function() {
    return this._name;
}
Weigher.prototype.getState = function() {
    return this._state;
}
Weigher.prototype.on = function(value) {
    this._state = "Весы сейчас включены";
    this.setWeight(value);
}
Weigher.prototype.off = function() {
    this._state = "Весы сейчас выключены";
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
