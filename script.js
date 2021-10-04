// Pseudo Code
// 1. Fetch Affirmations API by creating a function that:
// a. assigns the API URL to a constant (consider using string interpolation to account for any changing variables)
// b. test console.log('Making request')
// c. fetches with the URL as an argument
// d. .then returns res.json()
// e. .then inputs resJSON into a showData function
// f. .catch errors adn console.logs them
// 
// 2. display fetched data on page
// a. create a new function
// b. console.log data as test
// c. make a new constant by selectting the page element where you want to display the data using querySelector
// d. create (or target already existing) element to hold data
// 
// CORS proxy. Information source: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
// What is happening:
// 1. I cloned the github repo "cors-anywhere" and installed. Then created a heroku and pushed from heroku to master. This ensures I have CORS server.
// 2. I can use this server as a proxy URL to prefix my requested fetch URL. This will make the fetch request through my proxy adding necessary "Access-Control-Allow-Origin" header to the response. The response is then passed back to my JS request
// 
// 


const fetchAdvice = () => {
    const advAPIUrl = 'https://api.adviceslip.com/advice'

    console.log('Making request');
    //console.log(`API URL: ${advAPIUrl}`);

    fetch(advAPIUrl)
        .then((result) => { return result.json() })
        .then((resultJSON) => {

            //console.log(resultJSON)
            showAdvice(resultJSON);
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`)
        });
}


const showAdvice = (advice) => {
    //console.log(advice);

    const advicePlace = document.querySelector('#advice_placeholder');

    advicePlace.innerText = advice.slip.advice;
}

fetchAdvice()



// User Input pseudocode:
// 1. create an event_listner upon "Add Task to my To-Do List" click that stores user inputs (task, importance, urgency, and enjoyment) into an object for that task
// 2. create a function that calculates the weight of the task using input values
// 3. Add the task points weight to its object.
// 4. When button is clicked, each new task object is added to a larger task array
// 5. See if task object point value can be accessed and used as its ranking in the list
// 6. When the button is clicked, the task property "name" should be added as new li with text to the "My List" in div#to_do_list
// 7. Task names should also be added to the already existing li texts in the div#day_schedule. Their assignment will depend on ranking number
// 
// 
// 

const addTaskButton = document.querySelector('#addTaskSubmitButton');
const toDoListArray = [];


addTaskButton.addEventListener('click', () => {
    console.log("~~~~~~~~~~~~~~~New Task Added ~~~~~~~~~~~~~~~~~")
    makeNewTaskObject();
})

// Define a function that querySelects text input in task, importance, urgency and enjoyment text boxes, stores them each in a new task object and adds that task object to the toDoListArray
const makeNewTaskObject = () => {
    // assings the value entered in task input to taskName variable
    const taskName = document.querySelector('input#task').value;
    const taskImportance = document.querySelector('input#importance').value;
    const taskUrgency = document.querySelector('input#urgency').value;
    const taskEnjoyment = document.querySelector('input#enjoyment').value;
    //Create an object for new task with each input as a property
    const newTaskObject = {
        name: taskName,
        // parseInt is a JS function that converts string to int. It us used here so we can later sum these values for task rating
        importance: parseInt(taskImportance),
        urgency: parseInt(taskUrgency),
        enjoyment: parseInt(taskEnjoyment),
    }
    //console.log(newTaskObject);
    // Adds newTaskObject to the toDoListArray
    toDoListArray.push(newTaskObject);
    //console.log(toDoListArray);

    //This uses the function defined below to create a rating for the task. Will probably best to edit the function to return the rating, and assign that rating to a variable, and add that variable to the tasks object as a rating property. Will also have to change this code so that it's not always 0, but whichever object from the array we need to work on
    const newTaskRating = rateTask(toDoListArray[(toDoListArray.length-1)]);
    //console.log(newTaskRating);
    newTaskObject.rating = newTaskRating;
    console.log(newTaskObject);
    console.log(toDoListArray);
    
    //The following code resets the input text boxes so user can add more items
    const inputArray = document.querySelectorAll('.reset')
    inputArray.forEach(function(inputBox) {
        //console.log(`Input Box ${inputBox.value}`)
        inputBox.value = '';
        //console.log(`Input Box ${inputBox.value}`)
    })

}




// create a function that calculates Task's weighted ranking

const rateTask = (taskObject) => {
    //console.log(taskObject)
    const pointTotal = taskObject.importance + taskObject.urgency + taskObject.enjoyment
    console.log(`${taskObject.name} task is rated with ${pointTotal} points.`)
    return pointTotal;
}




