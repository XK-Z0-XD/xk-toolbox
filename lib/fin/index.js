/**
    * @description      : financials Module
    * @author           : em9836
    * @group            : XK-Z0-XD
    * @created          : 05/06/2023 - 16:25:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : em9836
    * - Modification    : 
**/

/**
 * prints out a message or 
 * @param {number} x 
 */
const test_run = function(x){
    switch(x){
        case 0: window.alert("Module Function Successful!"); break;
        case 1: console.log("Module Function Successful"); break;
        default: console.log("Success!");window.alert("test run complete")
        break;
    }

}


export {test_run};