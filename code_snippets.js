

// This function takes in the current time using Date(); it gets hours and minutes, inputs them into the roundTime function below, which returns an array of hour, minutes and am/pm value. Then returns this array as the time the "work day" will start


const scheduleStartTime = () => {
    const today = new Date();
    const currentHour = today.getHours();
    const currentMinutes = today.getMinutes();
    console.log(`${currentHour}:${currentMinutes}`);
    // I'm changing the above code so that this function returns a time array since that is more workable for adding minutes.
    let startTimeA = roundTime(currentHour, currentMinutes);
    console.log(startTimeA);
    return startTimeA;
}

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

let colorTracker = 0
const logo = document.querySelector('#logo')
logo.addEventListener('click', () => {
    console.log('Logo was clicked!');
    if (colorTracker === 0) {
        switchColorTheme(testingTheme);
        colorTracker += 1;
    } else if (colorTracker === 1) {
        switchColorTheme(warmNeutral);
        colorTracker += 1;
    } else if  (colorTracker === 2) {
        switchColorTheme(testingTheme2);
        colorTracker += 1;
    } else if (colorTracker === 3) {
        switchColorTheme(originalTheme);
        colorTracker = 0;
    } 
})

const switchColorTheme = ([a,b,c,d]) => {
    document.querySelector('body').style.backgroundColor = a;
    document.querySelector('#task').style.backgroundColor = a;
    document.querySelector('#importance').style.backgroundColor = a;
    document.querySelector('#urgency').style.backgroundColor = a;
    document.querySelector('#enjoyment').style.backgroundColor = a;
    document.querySelector('#takeOnTheWorld').style.color = a;
    document.querySelector('#good').style.color = a;
    document.querySelector('#fine').style.color = a;
    document.querySelector('#ehh').style.color =  a;
    document.querySelector('#addRandomTaskButton').style.color = a;
    document.querySelector('#addTaskSubmitButton').style.color = a;
    document.querySelector('#myListTitle').style.color = a;
    document.querySelector('#designMyDayButton').style.color = a;
    document.querySelector('#mood_check').style.backgroundColor = b;
    document.querySelector('#task').style.borderColor = b;
    document.querySelector('#importance').style.borderColor = b;
    document.querySelector('#urgency').style.borderColor = b;
    document.querySelector('#enjoyment').style.borderColor = b;
    document.querySelector('#logo').style.color = c;
    document.querySelector('#howAreYou').style.color = c;
    document.querySelector('#takeOnTheWorld').style.backgroundColor = c;
    document.querySelector('#good').style.backgroundColor = c;
    document.querySelector('#fine').style.backgroundColor = c;
    document.querySelector('#ehh').style.backgroundColor = c;
    document.querySelector('#what').style.color = c;
    document.querySelector('#addRandomTaskButton').style.backgroundColor = c;
    document.querySelector('#addTaskSubmitButton').style.backgroundColor = c;
    document.querySelector('#to_do_list').style.backgroundColor = c;
    document.querySelector('#designMyDayButton').style.backgroundColor = c;
    document.querySelector('#advice_placeholder').style.color = c;
    

}

const earthyGreenTheme = ['#b6cdbd', '#ddeedf', '#5c715e', '#f2f9f1'];
const orangeTheme = ['#f2e9d0', '#eaceb4', '#e79e85' , '#bb5a5a'];
const originalTheme = ['#713045', '#bb5a5a', '#e79e85', '#c94e4e'];
const classicColors = ['#ece8d9', '##fffdf6', '#494949',  '#faf6e9' ]
const warmNeutral = ['#e4cdbf', '#eeddd4', '#f4f3ef', '#f6f0e4'];
const testingTheme  = [ '#909486', '#bbbfb1','#ebeee1', '#e8c1a4']
const testingTheme2 = ['#434640', '#eab18e', '#a39069', '#be5843' ]



// Future Changes:
// a. input time estimated to complete and work into the time scheduling ( so something like washing the dishes isn't scheduled for 30 minutes, and a longer 2 hour task will be broken into 25 minute sections)
// b. when switching color themes, get the input plceholders to change too and the list li's to change as well
// 
// 
// 
// 
// 
// 
