# <a href="https://rakibmahmudanik.github.io/PH-Assignment-5/" target="_blank">Click Here to view website</a>

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   getElementById()
   --- Returns one element or first element.
   --- Returns null if no element exists.

   getElementsByClassName()
   --- Returns HTMLCollection of elements.
   --- Updates automatically if the DOM changes.

   querySelector()
   --- It also returns the first element of the class.

   querySelectorAll(cssSelector)
   --- Returns a static NodeList of all elements matching the selector.
   --- Does not auto-update like getElementsByClassName().

2. How do you create and insert a new element into the DOM?

   --- First we have to create html element by using createElement().
   --- find the parent div and append to is as child by using parent.appendChild();

3. What is Event Bubbling and how does it work?
   --- Clicking a button tag inside a div will trigger the button’s event, then the div’s event, then body tag if listeners added.

4. What is Event Delegation in JavaScript? Why is it useful?
   --- Event Delegation is a technique where instead of attaching event listeners to multiple child elements, i can attach a single listener to a parent element and handle events through event bubbling. like event.target.tagname/classlist/value etc that i used in my project.
5. What is the difference between preventDefault() and stopPropagation() methods?
   --- preventDefault()
   --- Stops the form submission or default behaviour.

   stopPropagation()
   --- Stops the event from bubbling parent elements.
   --- Prevent parent div from also receiving the click.
