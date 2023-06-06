/**
    * @description      : 
    * @author           : em9836
    * @group            : 
    * @created          : 05/06/2023 - 18:41:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : em9826
    * - Modification    : 
**/
//Loan
module.id = "Loan";

/**
 * @class Loan
 * 
 * 
 */
export class Loan {
    constructor() {
        this.amount = 0;
        this.rate = 0;
        this.term = 0;
        this._error = 0;
    }
    /**
     * overload constructor
     * for loan class
     * @param {number} amount
     * @param {number} rate
     * @param {number} term
     */
    constructor(amount, rate, term) {
        this.amount = amount;
        this.rate = rate; this.term = term;

    }

    getAmount() { return this.amount; }
    getRate() { return this.rate; }
    getTerm() { return this.term; }
    getError(){return this._error;}
    setAmount(_amount) { this.amount = this.amount; }
    setRate(rate) { this.rate = rate; }
    setTerm(_term) { this.term = _term; }

    isValid() {
        var valid = true;
        if (this.amount <= 0) { valid = false; this._error += "amount cannot be less than 1 \n"; }
        if (this.rate <= 0 || this.rate > 25) { valid = false; this._error += "rate out of bounds; 1 - 25 only \n"; }
        if (this.term <= 0) { valid = false; this._error += "term cannot be less than 1 \n"; }
        return valid;
    }
/**
 * Builds Loan
 */
    build() {
        this.totInt = 0;
        this.bbal = new Number[this.term]; this.bbal[0] = this.amount;
        this.intchar = new Number[this.term];
        this.intearn = new Number[this.term];
        this.ebal = new Number[this.term];
        let monthly_rate = this.rate / 12 / 100; //monthly rate in fractional form
        this.monthly_pmnt = (monthly_rate + (monthly_rate/((((1+monthly_rate)^ this.term)-1))))*this.amount;
        for (i=0;i<this.term;i++){
            if (i>0){
                this.bbal[i] = this.ebal[i-1];
            }
            this.intchar[i] = this.bbal[i]*monthly_rate;
            this.ebal[i] = (this.bbal[i]+this.intchar[i]-this.monthly_pmnt);
            this.totInt += this.intchar[i];
        }
    }
    getMonthlyPayment(){return this.monthly_pmnt;}
    getTotalInt(){return this.totInt;}
    getBbal(mo){return this.bbal[this.term-1];}
    getInterest(mo){return this.intchar[mo-1];};
    getEbal(mo){return  this.ebal[mo-1];}

}