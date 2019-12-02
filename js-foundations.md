# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
The console that is inside the function will log 'outside' because it occurs before we re-assign the variable since Javascript reads line by line. If we console log the function, it should then display 'inside.' 


1b. Test the function. Explain why the function returned what it did.

  Your answer: When I console the function with test as the argument, I get 'undefined' twice. 

  Researched answer: When I built the function myself, I could see several issues with the above function, here's how I would write it: 
  var text2 = "outside" // proper string notation was missing
const logIt2 = () => { 
    console.log(text2)
    return text = "inside" // the return statement was missing and var text was already assigned outside of the function so we don't need to write "var" again.
}
console.log(logIt2(text2)) //This needed a console log with an argument

  

2. What is JSON?

  Your answer: Javascript code

  Researched answer: JSON stands for JavaScript Object Notation. JSON allows us to send a JavaScript object to the server so that we can work with Javascript objects. 


3. What does CRUD stand for?

  Your answer: 

  Researched answer: Create, Read, Update, Delete - I did not know this one!



4. What are the 5 HTTP verbs?

  Your answer: 

  Researched answer: GET, POST, DELETE, PATCH, PUT (Have we used these yet? I don't recognize them, but I found an article that named them.)


5. What is a higher-order function?

  Your answer: Higher order functions act on arrays by iterationg through the array. .map will take a value and index and act on an array, returning the same array length. .filter will take a value but not return the same array length, since it's filtering out some of the values within your array. .reduce is a good method when you want to both .filter and .map. 

  Researched answer: A higher order function is a function that takes a function as an argument, or returns a function. .reduce takes an accumulator and the current value in the list and returns a new accumulated value. 


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: 

  Researched answer: A closure is the function and the scope of the variables within the enviornment of the function. 


7. STRETCH: What is an API?

  Your answer: 

  Researched answer: Application Programming Interface, it allows the user to access data from a web application. 


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
If you could freaky Friday with a fictional character for one day, who it would be? Keep in mind, that means the character you choose would also be you for a day!


2. What was your favorite topic this week?
Practicing with array methods in the pig latin translator challenge


3. What was your "A-ha!" moment this week?
Console.log() helps you understand how your code is working, especially when passing arguments through it. This helps when your code is not returning what you expected, because you can see in the console.log where it's going wrong. 