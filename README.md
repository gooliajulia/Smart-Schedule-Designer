# Smart-Schedule-Designer
**App Title:** Design your day: a personalized + optimized schedule for you.

**App Description:** Take someone's to-do list as user input. And return a customized schedule for their day based on certain ranking categories such as urgency, time-needed-to-complete, and importance.

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

**Timeframes:** How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
