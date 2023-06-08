/**
    * @description      : 
    * @author           : em9836
    * @group            : 
    * @created          : 05/06/2023 - 18:03:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : em9836
    * - Modification    : 
**/

module.id = "annuity";

export class Annuity {
    constructor(amount, rate, term) {
        this.amount = 0;
        this.rate = 0;
        this.term = 1;
        this._error = "";
    }

    getAmount() { return this.amount; }
    getRate() { return this.rate; }
    getTerm() { return this.term; }

    setAmount(_amount) { this.amount = this.amount; }
    setRate(rate) { this.rate = rate; }
    setTerm(_term) { this.term = _term; }

    isValid() {
        let valid = true;
        if (this.amount <= 0) { valid = false; this._error += "amount must be positive.\n"; }
        if (this.rate <=1 || this.rate >25) { valid = false; this._error += "rate out of bounds be less than 1 or greater than 25 \n"; }
        if (this.term <= 0) { valid = false; this._error += "term must be positive \n"; }
        return valid;
    }
    /**
     * Builds Annuity Account
     * @type {void}
     */
    build() {
        //TODO: BUILD ANNUITY
      //  log("Build: TO BE IMPLEMENTED");
      //TODO: Create All values for annuity schedule
        this.bbal = new Number[this.term];
        this.intearn = new Number[this.term];
        this.ebal = new Number[this.term];

        let monthly_rate = this.rate / 12 / 100; //monthly rate in fractional form
        for (i=0; i<this.term; i++){
            if (i > 0){
                this.bbal = this.ebal[i-1];
            }
            this.intearn[i] = (this.bbal[i]+this.amount) * monthly_rate;
            this.ebal[i] = this.bbal[i] + this.amount + this.intearn[i];
            
        }
    }
    getFVA(){return this.ebal[this.term-1];}
    getTotalInt(){return this.ebal[this.term-1]-(this.amount * this.term);}
    getBbal(mo){return this.bbal[this.term-1];}
    getInterest(mo){return this.intearn[mo-1];};
    getEbal(mo){return  this.ebal[mo-1];}

}