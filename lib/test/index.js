/**
    * @description      : test module
    * @author           : em9836
    * @group            : 
    * @created          : 04/06/2023 - 20:30:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 04/06/2023
    * - Author          : eVmPr
    * - Modification    : 
**/
/**
 * 
 */
/**
 * @
 */
function test_function(x){
    switch(x){
        case 0: window.alert("Module Function Successful!");
        case 1: console.log("Module Function Successful");
        default: console.log("Success!");
    }

}
module.id = "test module"
module.exports = {test_function};