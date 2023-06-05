/**
    * @description      : test module
    * @author           : em9836
    * @group            : 
    * @created          : 04/06/2023 - 20:30:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 04/06/2023
    * - Author          : em9836
    * - Modification    : 
**/
/**
 * 
 */
/**
 * @
 */
const _run = function(x){
    switch(x){
        case 0: window.alert("Module Function Successful!"); break;
        case 1: console.log("Module Function Successful"); break;
        default: console.log("Success!");window.alert("test run complete")
        break;
    };
}
module.id = "test";
module.exports = {_run};