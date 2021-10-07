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
    // Adds newTask name to My list
    addTaskToMyList(newTaskObject);
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
// set default mood
let mood = 'fine'
console.log(mood)
// add event listener to mood buttons to change mood
// a. create a forEach for each button
// b. 

// objectArray.forEach(element =>
//newArray.push(element.name));

const moodButtonParent = document.querySelectorAll('#mood_buttons input')
console.log(moodButtonParent);
console.log(moodButtonParent.length);
moodButtonParent.forEach((button) => 
    button.addEventListener('click', () => {
            if (button.classList.contains('clicked')) {
                button.classList.remove('clicked');
                button.style.backgroundColor = '#e79e85';
                button.style.color = '#713045'
            } else {
            button.style.backgroundColor = '#713045';
            button.style.color = '#e79e85'
            button.classList.add('clicked');
            }

        // setTimeout (
        //     button.style.backgroundColor = 'blue', 5000
        // )

        console.log(button.value);
        let buttonMood = button.id;
        mood = buttonMood;
        console.log(`Mood is ${mood}`);
    }))




const rateTask = (taskObject) => {
    //console.log(taskObject)
    if (mood == 'takeOnTheWorld') {
        console.log(`starting importance: ${taskObject.importance}`);
        console.log(taskObject.urgency);
        taskObject.importance *= 1.5;
        taskObject.urgency *= 1.5;
        console.log(taskObject.importance);
        console.log(taskObject.urgency);
    } else if (mood === 'good') {
        taskObject.urgency *= 1.5;
    } else if (mood === 'ehh') {
        taskObject.enjoyment *= 2;
    }
    console.log(mood);
    const pointTotal = taskObject.importance + taskObject.urgency + taskObject.enjoyment
    console.log(`${taskObject.name} task is rated with ${pointTotal} points.`)
    return pointTotal;
}

//create a function that adds task name to My List ul li in the order that the task is added. takes input of newTaskObject

const addTaskToMyList = (newTaskObject) => {
    const taskName = newTaskObject.name
    const taskNameLi = document.createElement('li');
    taskNameLi.innerText = `- ${taskName}`;
    const myListUl = document.querySelector('ul#myList');
    myListUl.appendChild(taskNameLi);
    taskNameLi.addEventListener('click', () => {
        console.log(taskNameLi.classList)
        if (taskNameLi.classList = 'strike') {
            taskNameLi.classList = '';
        } else {
            taskNameLi.classList = 'strike'
        }
    })
}





// Making the schedule PseudoCode
// 1. Create a function that ranks the task list in order and returns an array of the task names in that order

const sampleObjectArray = [

    {
        enjoyment: 3 ,
        importance: 7 ,
        name: "do the dishes" ,
        rating: 19 ,
        urgency: 9 ,
    }, 

    {
        enjoyment: 5 ,
        importance: 7 ,
        name: "start laundry" ,
        rating: 20 ,
        urgency: 8 ,
    },

    {
        enjoyment: 2 ,
        importance: 9 ,
        name: "edit photos" ,
        rating: 21 ,
        urgency: 10 ,
    }, 

    {
        enjoyment: 5 ,
        importance: 5 ,
        name: "inbox 0" ,
        rating: 15 ,
        urgency: 5 ,
    },

    {
        enjoyment: 3 ,
        importance: 5 ,
        name: "clean out car" ,
        rating: 14 ,
        urgency: 6 ,
    }
]

console.log(sampleObjectArray);
console.log(sampleObjectArray[0].name);
console.log(sampleObjectArray[0].rating);


// This function will use the sort method on an array of objects using the compare parameter (a-b). Because it is an object, we must target the object property we want to compare in this case, rating
// reference: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

// I wrote b.rating - a.rating so the highest number would be first

const rankTasks = (objectArray) => {
    objectArray.sort((a,b) => {
        return b.rating - a.rating;
    })
}

// This will have to wait until the create schedule is clicked
// rankTasks(toDoListArray);
// console.log(toDoListArray);


// The following function takes the sorted/ranked object array, and returns an array of the task names in that order

const rankedTaskObjectArrayToSimpleArray = (objectArray) => {
    newArray = [];
    objectArray.forEach(element =>
        newArray.push(element.name));
    return newArray;
}

// const rankedTaskArray = rankedTaskObjectArrayToSimpleArray(sampleObjectArray);
// console.log(rankedTaskArray);

// 2. Create a function that takes current time, and rounds it to the nearest 15 or 30 minute interval
const scheduleStartTime = () => {
    const today = new Date();
    const currentHour = today.getHours();
    const currentMinutes = today.getMinutes();
    console.log(`${currentHour}:${currentMinutes}`);
    // const testTime = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    // console.log(testTime);

    // const startTime = `${roundTime(currentHour, currentMinutes)[0]}:${roundTime(currentHour, currentMinutes)[1]} ${roundTime(currentHour, currentMinutes)[2]}`;
    // I'm changing the above code so that this function returns a time array since that is more workable for adding minutes.
    let startTimeA = roundTime(currentHour, currentMinutes);
    console.log(startTimeA);
    return startTimeA;
    
}

//The following function is meant to round time to the nearest quarter hour
// adding a third parameter of AmPm with default 'am' for future rounding
const roundTime = (hour, minutes, ampm='am') => {
    if ( minutes < 15 ) {
        minutes = 15;
    } else if ( minutes < 30 ) {
        minutes = 30;
    } else if ( minutes < 45 ) {
        minutes = 45;
    } else {
        hour+= 1;
        minutes = '00';
    }
    if (hour === 0 ) {
        ampm = 'am'
        hour = 12;
    } else if (hour > 12) {
        ampm = 'pm'
        hour-= 12;
    }
    const startTimeArray = [hour, minutes, ampm];
    return startTimeArray;
} 

// console.log(roundTime(0,45))
// console.log(roundTime(0,13))

let startTime = scheduleStartTime();
console.log(startTime);


// The following function takes in a time array [hours, minutes, ampm] and desired time increase in minutes, and returns the new time with the added minutes

const addTime = (timeArray, addMins) => {
    console.log(timeArray);
    console.log(typeof timeArray[1])

    console.log(typeof addMins)
    console.log((timeArray[1] + 25))
    let totalMinutes = timeArray[1] + addMins;
    console.log(totalMinutes);

    let hoursToAdd = Math.floor((totalMinutes/60));
    console.log(hoursToAdd);

    let minutesToAdd = totalMinutes % 60 ;
    console.log(minutesToAdd);

    let tempAmPm = timeArray[2];

    let newHour = timeArray[0] + hoursToAdd;
    const newMin = minutesToAdd;

    // if time changes from am to pm, this code will adjust for that
    if ( newHour > 12 ) {
        tempAmPm === 'pm' ? tempAmPm = 'am' : tempAmPm = 'pm';
        newHour -= 12;
    }

    let newTime = [newHour, newMin, tempAmPm];
    console.log(newTime);
    return newTime;
}

// addTime([4,20, 'pm'], 10)
// // 10
// addTime([4,54, 'pm'], 80)
// // 20
// addTime([10,08, 'pm'], 212)
// // 20
// addTime([10,08, 'pm'], 212)
// addTime([10,08, 'pm'], 212)

// So addMins % 60 will return the minutes that need to be added to timeArray minutes

// This variable will hold the latest time being used
let workingTime = startTime;
console.log(workingTime);

// The following function takes in a task and the minutes estimated to complete it. This will have a default amount of 25 minutes (a pomodoro) which can be overridden later if this information is given. The function will return an array containing 1. a string of current working time plus task ( to be added to schedule), 2. the new working time (which is equal to current workingTime + minutes argument via addTime function)

const scheduleTask = (task, minutesToComplete = 25) => {
    console.log(workingTime);
    console.log(minutesToComplete);
    if (workingTime[1] === 0) {
        workingTime[1] = '00'
    }
    let string = `${workingTime[0]}:${workingTime[1]} ${workingTime[2]} \u00A0\u0020\u0020\u0020\u0020\u0020 ${task}`;
    workingTime = roundTime(addTime(workingTime, minutesToComplete)[0],addTime(workingTime, minutesToComplete)[1],addTime(workingTime, minutesToComplete)[2]);
    console.log(string);
    console.log(workingTime);
    let array = [string, workingTime];
    return array;
}

// scheduleTask(rankedTaskArray[0])
console.log(workingTime);

// The following function gets the section with id #schedule and styles it with the following:
// background-color: #e79e85;
// border-radius: 50px;
// margin-bottom: 40px;
// It then gets the ul with id#scheduleList and uses a for loop to add a new time and task li for each task in the task array. It will use the scheduleTask function which inputs a task and optional minutes to complete, and returns an array of the string for the li and the new working time to be used for the next task, before using for the next task, we should use the roundTime function to round up (giving the user transition time/breaks between tasks). Note this function takes in hours minutes and ampm as arguments(test that the ampm functions okay) and returns an array of hours, minutes, ampm

// This page was helpful to assign already written css code to an element from js
// https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/

// This is the code that will run when the create schedule button is clicked, but outside of the createSchedule function:

// rankTasks(toDoListArray);
// console.log(toDoListArray);

// const rankedTaskArray = rankedTaskObjectArrayToSimpleArray(toDoListArray);
// console.log(rankedTaskArray); rankedTaskArray will be the argument for creating the schedule.

const createSchedule = (array) => {
    const scheduleSection = document.querySelector('#schedule');
    scheduleSection.style.cssText += 'background-color:#e79e85;border-radius:50px;padding:40px';
    const scheduleUl = document.querySelector('#scheduleList');
    array.forEach(function(rankedTask) {
        const li = document.createElement('li');
        const liText = scheduleTask(rankedTask)[0];
        li.innerText = liText;
        scheduleUl.appendChild(li);
    })
}
// createSchedule(rankedTaskArray);


// This will be an event listener for when the Design My Day button is clicked

const designMyDayButton = document.querySelector('#designMyDayButton');

designMyDayButton.addEventListener('click', () => {
    console.log("Design My Day! button was clicked");
    rankTasks(toDoListArray);
    console.log(toDoListArray);

    const rankedTaskArray = rankedTaskObjectArrayToSimpleArray(toDoListArray);
    console.log(rankedTaskArray);

    createSchedule(rankedTaskArray);

})


// PseudoCode for To Do List strike through upon click
// 1. get element by querySelector (the ul list)
// 2. Use forEach() on the ul to create an event listener for each li ('click')
// 3.  if the li is not striked through, strike through, if it is, unstrike.









//     li.addEventListener('click', () => {
//         if (li.style.textDecoration === 'line-through') {
//             li.style.textDecoration = '';
//         } else {
//             li.style.textDecoration = 'line-through'
//         }
//     )

// } )


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 








