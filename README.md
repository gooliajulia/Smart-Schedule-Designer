# Smart-Schedule-Designer
**App Title:** Design Your Day: a personalized + optimized schedule for you.

**App Description:** Take someone's to-do list as user input. Return a customized schedule for their day based on certain ranking categories such as urgency, time-needed-to-complete, and importance.

**API:** "Affirmations" - https://www.affirmations.dev/

**API Snippet:** 

        {
            "affirmation": "You know more than you think"
        }

        {
            "affirmation": "You are a capable human"
        }

        {
            "affirmation": "Sucking at something is the first step towards being good at something"
        }



**Wireframes:** The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.

        https://whimsical.com/design-your-day-6SVAzgLEXFD2Lm1LqS6McK

**MVP:** A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox (or Grid)
- Use fetch to make a request to an external data source and insert some of the retrieved data on to the DOM.
- Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
- Deployed site on Github Pages.
- At least 30 commits in your project repository.
- Fulfill the build requirements you have specified in your MVP.
  * User can input a task, and that task will be added to their to-do list and schedule
  * User can add another task, and each task will remain on the list or schedule.
  * A random affirmation will display on the page
  * User can cross or tick off tasks that are complete
  * User can input priority, urgency, and enjoyment level to weight each task on their list. Tasks will be returned back to user in ranked order based off of these inputs

**Post-MVP:** 
A list of additional/advanced features you would like to include in your app after you have met MVP.

- completed tasks change style
- The weight of urgency, priority and enjoyment in ranking can depend on their mood.
- A new affirmation appears each time the user completes a task
- The time users will spend working on each tasks will vary based off of expected time and enjoyment. If low enjoyment, the task will be broken up into small increments. If the tasks is expected to take a long time, it will also be broken up into manageable chunks
- Built in suprise breaks will be built in to the user's schedule
- Add More APIs 
  * Personality info: https://app.traitify.com/developer
  * Activities - "Bored" API - various activities API to add fun new activities sprinkled throughout the neighbors day or as a reward for completing several tasks  
     (Can utilize the "type" property here)
    {
        "activity": "Bake pastries for you and your neighbor",
        "type": "cooking",
        "participants": 1,
        "price": 0.4,
        "link": "",
        "key": "8125168",
        "accessibility": 0.3
    }
    {
       "activity": "Mow your lawn",
       "type": "busywork",
       "participants": 1,
       "price": 0.1,
       "link": "",
       "key": "3590127",
       "accessibility": 0.3
    }
    {
        "activity": "Create a cookbook with your favorite recipes",
        "type": "cooking",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "1947449",
        "accessibility": 0.05
    }


**Goals:** What you plan to accomplish for each day of the project week.
        Monday: 
                * Get project approved. 
                * Create a timeframes Table. 
                * Create HTML framework
                * Set up basic CSS "passable" foundation
                * Set up basic MVP flexbox
                * Aim for 10 commits
        Tuesday:
                * Deployed site on GitHub
                * Successfully fetch from Affirmations API and manipulate to DOM
                * Start Basic JS functions
                        * User can input text as a task and its corresponding ratings. The task will be added to a to-do list array (or object with the ratings) when an 'Add' button is clicked
                        * Inputted tasks will be added to the checklist
                        * User can check tasks as either completed or not completed
                * Write the code that weights tasks ranking based off of users inputted 'importance' 'urgency' 'timing' and 'enjoyment' rankings.
                * Aim for 10 commits
        Wednesday:
                * Clean up/Elevate CSS design
                * Add responsive design
                * Ensure all MVP requirements are met
                * Aim for 10 commits
        Thursday:
                * Adapt post-MVP plan based on current state of app, including improved CSS design
        Friday:
                * Presentations

**Timeframes:** How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
