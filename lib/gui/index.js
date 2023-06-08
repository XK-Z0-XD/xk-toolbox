/**
    * @description      : 
    * @author           : em9836
    * @group            : 
    * @created          : 05/06/2023 - 12:30:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : em9836
    * - Modification    : 
**/
module.id = "gui";

export function test_function(x) {
    switch (x) {
        case 0: window.alert("Module Function Successful!");
        case 1: console.log("Module Function Successful");
        default: console.log("Success!");
    }

}
/**
 * prints out message typewriter style
 * @param {string} msg
 * @param {Element} container | 
 * @param {any} options
 */
function typewrite(msg, container, options) {
    let message = "", chars = {};
    let typer = null, i = 0;
    //TODO: do Validation
    if (!msg) { console.error(" missing message"); return; }
    if (!container) { console.error(" missing container elment"); return; }
    if (!options) {
        let { delayTime = 2, speed = 50, newline = true, asString = true, } = options;
    }

    message = msg;
    chars = msg.split('');
    if (options)
        for (i = 0; i < chars.length; i++) {
            if (chars)
    }
    //TODO: typewrite
    while (i < message.length) {
        container.innerHTML += 
    }

}
function typewrite(msg) {

}

