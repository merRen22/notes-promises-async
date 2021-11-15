# Asynchronism in JS

Javascript is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.

In order to handles asynchronism it makes use of an stack which acummulates all Promises and calls that would block the browser. Once the task its completed is moved to the callback queue.

When the heap is empty the event loop moves the task from the callback queue. This process can be seen in this graph 👇

//image

Its important to remember that the heap has to be empty so the callback events can access it. If the browser is always executing something this would never happend and the promises would not return their data.

## Reference

For information on how JS handles async calls with the usage of event loop look [here](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
