/**
 * 
 * @param {string} tagName 
 * @param {string|undefined} id 
 @param {string|undefined} className
 */
export const create = (tagName, id, className)=> {
    let e = document.createElement(tagName);
    e.setAttribute("id",id);
};