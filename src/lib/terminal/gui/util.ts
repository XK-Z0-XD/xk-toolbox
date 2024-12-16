/**
 * 
 * @param {string} tagName 
 * @param {string} id 
 @param {...string[]} className
 */
export const create = (
  tagName: string = "div",
  id?: string,
  ...className: string[]
) => {
  let e = document.createElement(tagName);
  if (id) e.setAttribute("id", id);
  if (className) e.classList.add(...className);
  return e;
};
