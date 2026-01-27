// loading the restaurant data (for user input module)
let restaurantNames = [];

fetch("data/restaurant_data.geojson")
    .then(res => res.json())
    .then(data => {
        restaurantNames = data.features.map(feature => feature.properties.name.toLowerCase());
    });

// this file handles all button interactions for the website.

/*
a generic button event listener function
takes in the id of the button, a link (the destination url after clicking button), and newtab
If newtab is true, the link opens in a new tab. If false, the link opens in the same tab.
*/
function button_event_listener(btn_id, link, newtab=false)
{
    const btn = document.getElementById(btn_id);
    if (btn)
        btn.addEventListener('click', () => {
            if (newtab===true)
            {
                window.open(link, '_blank');
            }
            else
            {
                window.location.assign(link);
            }
        })
}

button_event_listener('home', 'index.html');
button_event_listener('behind_the_scenes', 'behind_the_scenes.html');
button_event_listener('external_links', 'external_links.html');
button_event_listener('user_input', 'user_input.html');
button_event_listener('see_geojson', 'data/restaurant_data.geojson', true)
button_event_listener('trip_advisor',
    'https://www.tripadvisor.ca/FindRestaurants?geo=155019&sort=POPULARITY&establishmentTypes=10591&broadened=false',
    true)
button_event_listener('opentable', 'https://www.opentable.ca/s?lang=en-ca&covers=2&metroId=74&regionIds=164&ref=16282&SP=ppc_g_ca_nontm&cmid=22392002044&aid=&tid=&locp=9000942&loci=&mt=&nw=x&d=c&cid=&pos=&gad_source=1&gad_campaignid=22382106123&gbraid=0AAAAADqtrPonNKryhgtQWH-FfN9FVJHCY&gclid=CjwKCAiAj8LLBhAkEiwAJjbY7w_wkbn56GFxs4Lncooz8-lf5eIZbqsMCC8sQI15tGAgqvd5bUEvUhoCp-0QAvD_BwE',
    true)
button_event_listener('reddit', 'https://www.reddit.com/r/askTO/comments/1q1r3n1/what_restaurants_in_toronto_made_you_say_holy/',
    true)

// user submission event listener (special functionality)
function checkRestaurant()
{
    // parse user input, case insensitive
    const raw_input = document.querySelector('input').value
    const user_input = raw_input.trim().toLowerCase();

    // find result element, where text will be later appended to based on user input
    const resultDiv = document.getElementById("res");

    // prompt user to type something if they input a empty string
    if (!user_input)
    {

        resultDiv.textContent = "Sorry, please try again and enter a valid restaurant name."
        return
    }


    // match
    const match = restaurantNames.includes(user_input);

    // print an alert to be viewed by user
    if (match)
    {
        resultDiv.textContent = "Nice! Your restaurant " + raw_input + " is one of Toronto's Top 10!!!"
    }
    else
    {
        resultDiv.textContent = "Your restaurant " + raw_input + " is not currently one of Toronto's Top 10! Hidden gem perhaps?"
    }
}