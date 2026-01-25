Quiz - 5:51:22 freeCodeCamp

1 - You have 2 options for what you canpass in to a state setter function (eg, 'setCount'). What are they?
Ans -
a - A state value or a new value of state.
b - a callback.

2 - When would you want to pass the first option (from answer above) to the state setter function?
Ans - Where I do not need the previous value.

3 - When would you want to pass the second option (from answer above) to the state setter funciton?
Ans - When I want the previous value to check what it was.

Quiz - 7:45:00 freeCodeCamp

1 - what is "conditional rendering"?
Ans - Conditional rendering is a technique in javascript to render something as per the first conditional.
eg. true && then render this.

2 - When would you use &&?
Ans - where I have to render something conditionally, or based on the first condition. if the first condition is true then I will render that thing just by putting next to &&. if the first value is true or truthy, then it will return the second value.

3 - When would you use a ternary?
Ans - When we have two things to render as per a specific condition. which mean, if the condition gets true then render the first value if false then render the second value.
eg. true ? first value(rendered) : second value(rendered if false)

4 - what if you need to decide between > 2 options on what to display?
Ans - I will use if else conditional.


Quiz - 8:35:30 - freeCodeCamp.org 

1 - In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?
Ans - on the form submission. (right before the form is submitted) 

2 - In a React app, when do you gather all the data from the filled-out form? 
Ans - In react, we don't gather information at once, we do it as we proceed. like we keep updating state as we fill the form fields. 

3 - Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?
Ans - name

4 - what's different about saving the data from a checkbox element vs. other form elements? 
Ans - checkbox element holds the value in boolean and other holds in the string. 
Ans 2 - A checkbox uses the 'checked' property to detemine what should be saved in state. Other form elements use the 'value' property instead.

5 - How do you watch for a form submit? How can you trigger a form submit? 
Ans - We can use "onSubmit" event on submit button to watch for submit. on submit call, we can send the gathered data in the API to proceed with further process. 

Quiz - 9:12:00 - freeCodeCamp.org

1 - What is a "Side effect" in React? What are some examples? 
Ans - Side effect is a concept in react, this applies to where, there react can not reach. 
- Anything that react is not incharge of. 
eg. Broswer API call, Networking, Websockets, API call, etc.

2 - What is NOT a "side effect" in React? Examples?
Ans - Things that we can access by being inside the react environment. 
- Anything that react is incharge of. 
eg. props, state, etc.

3 - When does React run your useEffect funtion? when dos it NOT run the effect function? 
Ans - React runs useEffect function whenever the component re-renders. It runs after DOM updation in the browser. It does not run it before DOM updation. 

4 - How would you explain what the "dependencies array" is? 
Ans - Dependency array is the second parameter of the useEffect function, that is optional but very important. It is array, that gets compared whenever component re-rendered. 