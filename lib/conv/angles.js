/**
    * @description      : 
    * @author           : em9836
    * @group            : 
    * @created          : 05/06/2023 - 17:53:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/06/2023
    * - Author          : em9836
    * - Modification    : 
**/

/**
 * angles.js
 * TODO: add functions:
 *
 * 
 */
module.id = "angles";
const angle_types = {
    STRAIGHT = 180,
    RIGHT = 90
}
/**
 * converts degrees to radians
 * @param {number} degrees
 */
export const Radians = function (degrees) {
    let rad = 0;
    rad = degrees * (1 / 180);
    return rad;
}
/**
 * converts radians to degrees
 * @param {number} radians
 */
export const Degrees = function (radians) {
    let deg = 0;
    deg = radians * 180;
    return deg;
}
/**
 * 
 * @param {any} x
 * @param {any} a
 */
export const Coterminal = function (x, a) {

}
