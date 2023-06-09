/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 05/06/2023 - 17:56:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : eVmPr
    * - Modification    : 
**/

/**
 * 
 * 
 * 
 * */
/* MODULE */
const _id = "temperature", filename = "temperature.js";

module.id = "temperature";
static class temp_conv {
    /**@type const */
    constants = {
        CEL = 1,
        FAH = 2,
        KEL = 3,
        RAN = 4
    }

    /**
   * 
   * converconstants to celcuis
   * from: celcius (2) or kelvin (3)
   * if value is invalid function will throw an error
   * @type function
   * @param {number} from
   * @param {number} value
   * @returns {number} cel
   * 
   */
    celsius = function (from, value) {
        let cel = 0;
        switch (from) {
            case constants.FAH:
                if (value < 0) {
                    error("");
                } else {
                    cel = (value - 32) * (5 / 9);
                }
                ; break;
            case constants.KEL:
                if (value < 0) {
                    // console.error("Temperature Value cannot be lower then 0 Kelvin");
                    cel = null;
                } else {
                    cel = value - 273.15;
                }
                ; break;
            case constants.RAN:
                cel = (value - 491.67) * (5 / 9);
                ; break;
            default:
                console.error("unknown temperature");
                break;

        }
        return cel.toFixed(2);
    }

    /**
     * 
     * @param {number} from
     * @param {number} value
     */
    fahrenheit = function (from, value) {
        let fah = 0;
        switch (from) {
            case constants.FAH:
                /* if (kelvin(celsius) < 0) {
                     console.error("temperature cannot be less than 0K");
                 } else {
                     fah = (celsius * (9 / 5)) + 32;
                 }; break;*/
                fah = (celsius * (9 / 5)) + 32;
            case constants.KEL:
                fah = (value + 459.67) * (5 / 9); break;
            case constants.RAN: fah = value - 459.67; break;
            default: console.error("Unknown Temperature Type"); break;
        }
        return fah.toFixed(2);
    }
    /**
     * converconstants temperature to kelvin
     * from:celcius (2) or fahrenheit (1)
     * @param {number} from (celcuis or fahrenheit)
     * @param {number} value
     */
    kelvin = function (from, value) {
        let kel = 0;
        switch (from) {
            case constants.FAH:
                if (value < 0) {
                    kel = null;
                } else { kel = (value + 459.67) * (9 / 5) - 459.57; }
                break;
            case constants.CEL:
                if (value < 0) {
                    error("Temperature Value cannot be lower then 0 Kelvin");
                    kel = null;
                } else { kel = value + 273.15; }
                break;
            case constants.RAN:
                kel = value * (5 / 9); break;
            default:
                console.error("unknown temperature");
                break;

        }
        /* if (kel < 0) {
             console.error("temperature cannot be below 0 Kelvin.");
     
         } else {
             return kel;
         }*/
        return kel.toFixed(2);
    }


    /**
     * 
     * @param {number} from
     * @param {number} value
     */
    rankine = function (from, value) {
        var rankine = 0;
        switch (from) {
            case constants.FAH:
                rankine = value + 459.67;
                ; break;
            case constants.CEL:
                rankine = (value + 273.15) * (9 / 5);
                ; break;
            case constants.KEL:
                if (value < 0) {
                    error("value cannot be less than 0K");
                } else {
                    rankine = value * (9 / 5);
                }
                ; break;
            default:
                console.error("Unknown Temperature Type");
                break;

        }
        return rankine.toFixed(2);
    }
}
export { temp_conv };