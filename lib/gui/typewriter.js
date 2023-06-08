/**
    * @description      : 
    * @author           : em9836
    * @group            : 
    * @created          : 07/06/2023 - 18:10:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/06/2023
    * - Author          : em9836
    * - Modification    : 
**/

class TypeWriter{
    /** @field message @type string @access private */
    message;
    /**@type {Element}  @access private*/
    container;
    /**@field options @access private @type {speed, container_id, contentWrap} */
    options={speed, container_id, contentWrap };
    /**@access private */
    i;
    constructor(msg, container,options){
        this.message = msg;
        this.container = container;
        this.options = {
            speed: 50, container_id: "",
            contentWrap: true
          };
          this.i = 0;
    }
    /**
     * @type void
     * @access public
     */
    typeOut(){
        if (this.i < this.message.length){
           let sp = this.options.speed
            this.container.innerHTML+= this.message.charAt(this.i);
            this.i++;
            setTimeout(this.typeOut, sp);
        }
    }
}

export {TypeWriter};