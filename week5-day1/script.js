/*
    Exercise 1: Traversing the DOM
Knowing how to traverse the DOM using JavaScript provides a foundation
to altering an HTML page in real time.
Using the HTML markup in Listing 1, perform these tasks:
1. Use the firstElementChild property to access an element.
2. Use the lastElementChild property to access an element.
3. Use the nextElementSibling property to access an element.
4. Use the previousElementSibling property to access an element.
5. Use the parentNode property to access an element.
6. Use the childNodes property to access a group of child elements.
*/
let page = document.querySelector("body").firstElementChild;
let content = page.lastElementChild;
let p1 = content.firstElementChild.nextElementSibling;
let header = content.previousElementSibling;
// let page2 = header.parentElement;
console.log(page, content, header, p1);
console.log(page.parentNode);
console.log(page.childNodes);
/*
Exercise 2: Targeting nodes
In exercise 1, you learned how to target nodes in several ways.
Continuing to use the markup in Listing 1, perform the following tasks:
1. Retrieve the value of a node using / innerText / innerHTML / textContent.
2. Change the value of a node using / innerText / innerHTML. / textContent.
3. Retrieve the value of a node attribute.
4. Change the value of a node attribute.
*/
console.log(p1.innerHTML);
console.log(p1.innerText);
console.log(p1.textContent);
p1.textContent = "boo";
console.log(header.getAttribute("id"));
header.setAttribute("id","hoooly");

/*
Exercise 3: Manipulating the DOM
Now that you know how to traverse the DOM and alter node values,
the next logical step is to learn how to add, remove, and replace nodes.
Perform the following tasks:
1. Use the appendChild method to add a node.
2. Use the insertBefore method to add a node.
3. Use the removeChild method to remove a node.
4. Use the replaceChild method to replace a node.
*/

let appendent = document.createElement("h1");
appendent.innerText = "APPEND_ME";
content.appendChild(appendent);
content.insertBefore(appendent, p1);
let pageTitle = document.querySelector("h1");
let removed = header.removeChild(title);
content.replaceChild(removed, p1);