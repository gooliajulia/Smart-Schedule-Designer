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
// 

const fetchAffirmation = () => {
    const affAPIUrl = 'https://www.affirmations.dev/'

    console.log('Making request');
    console.log(`API URL: ${affAPIUrl}`);

    fetch(affAPIUrl)
        .then((res) => { return res.json()})
        .then((resJSON) => {
            showAffirmation(resJSON);
        })
        .catch((err) => {
            console.log(`ERROR: ${err}`)
        });
}


const showAffirmation = (affirmation) => {
    console.log(affirmation);

    const affirmationPlace = document.querySelector('#affirmation_placeholder');

    affirmationPlace.innerText = affirmation.affirmation;
}

fetchAffirmation()


