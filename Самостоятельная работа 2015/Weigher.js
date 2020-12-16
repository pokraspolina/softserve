/*   класс Weigher
      состояние
         _name : String                      
         _state : Boolean(true/false)        
         _weight : Number (0 - 150)
      поведение
         get name() : String                  
         get state() : Boolean                
         set state(value: Boolean) : void
         on() : void                         
         off() : void                        
         get weight() : Number                
         set weight(value: Number ) : void*/
class Weigher extends Devices{
    constructor(name){
        super(name);
        this._weight = 0;
    }
    off() {
        super.off();
        this._weight = 0;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        if (typeof value === "number" && !isNaN(value)) {
            this._weight = value;
        }
    }
};