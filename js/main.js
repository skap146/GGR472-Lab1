
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
button_event_listener('see_geojson', 'data/restaurant_data.geojson', true)
button_event_listener('trip_advisor',
    'https://www.tripadvisor.ca/FindRestaurants?geo=155019&sort=POPULARITY&establishmentTypes=10591&broadened=false',
    true)
button_event_listener('opentable', 'https://www.opentable.ca/s?lang=en-ca&covers=2&metroId=74&regionIds=164&ref=16282&SP=ppc_g_ca_nontm&cmid=22392002044&aid=&tid=&locp=9000942&loci=&mt=&nw=x&d=c&cid=&pos=&gad_source=1&gad_campaignid=22382106123&gbraid=0AAAAADqtrPonNKryhgtQWH-FfN9FVJHCY&gclid=CjwKCAiAj8LLBhAkEiwAJjbY7w_wkbn56GFxs4Lncooz8-lf5eIZbqsMCC8sQI15tGAgqvd5bUEvUhoCp-0QAvD_BwE',
    true)
button_event_listener('reddit', 'https://www.reddit.com/r/askTO/comments/1q1r3n1/what_restaurants_in_toronto_made_you_say_holy/',
    true)