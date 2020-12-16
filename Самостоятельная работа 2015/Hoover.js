/*класс Hoover
      состояние
         _name : String                      
         _state : Boolean(true/false)        
         _mode : Number(1-4)
      поведение
         get name() : String                  
         get state() : Boolean                
         set state(value: Boolean) : void
         on() : void                         
         off() : void                        
         get mode() : String                
         set mode(value: Number ) : void*/
class Hoover extends Devices{
    constructor(name){
        super(name);
        this._mode = "На зарядке";
    }
    off() {
        super.off();
        this._mode = "На зарядке";
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
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
};