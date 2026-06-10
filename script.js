



/* ==========================
   LIVE CLOCK
========================== */
function updateClock(){

    const now = new Date();

    const weekday =
    now.toLocaleDateString(
    'en-US',
    {
        weekday:'long'
    });

    const fullDate =
    now.toLocaleDateString(
    'en-US',
    {
        month:'long',
        day:'numeric',
        year:'numeric'
    });

    const time =
    now.toLocaleTimeString(
    'en-US',
    {
        hour:'numeric',
        minute:'2-digit',
        second:'2-digit'
    });

    const clock =
    document.getElementById(
    "clock"
    );

    if(clock){

        clock.innerHTML =

        weekday +

        " | " +

        fullDate +

        "<br>" +

        time;

    }

}

setInterval(
updateClock,
1000
);

updateClock();

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
});


/* ==========================
   SEARCH FUNCTION
========================== */

function searchRoom(){

    let searchText =
    document.getElementById(
    "searchBox"
    ).value.toLowerCase();

    if(searchText === ""){

        alert(
        "Please enter a room, office, or facility."
        );

        return;

    }

    if(searchText.includes("clinic")){

        alert(
        "Clinic found. Opening navigation..."
        );

        return;

    }

    if(searchText.includes("library")){

        alert(
        "Library found in Building B - 3rd Floor."
        );

        return;

    }

    if(searchText.includes("admin")){

        alert(
        "Admin Office found in Building B."
        );

        return;

    }

    if(searchText.includes("activity")){

        alert(
        "Activity Center found."
        );

        return;

    }

    alert(
    "Location found: " +
    searchText
    );

}


/* ==========================
   BUILDING BUTTONS
========================== */

function showLocation(location){

    alert(
        "📍 Searching building info for: " + location +
        "\n\n(Will be connected to Firebase Buildings next)"
    );

}

/* ==========================
   EVENTS PAGE
========================== */

async function showVenue(venue){

    const snapshot = await getDocs(collection(db, "events"));

    let found = false;

    snapshot.forEach((doc) => {

        const e = doc.data();

        if(e.venue.toLowerCase().includes(venue.toLowerCase())){

            alert(
                "📅 Event Found!\n\n" +
                e.name +
                "\n" +
                e.date +
                "\n" +
                e.venue
            );

            found = true;
        }
    });

    if(!found){
        alert("No event found for: " + venue);
    }
}


/* ==========================
   FEEDBACK PAGE
========================== */

function submitFeedback(){
    alert("Thank you for your feedback!");
}


/* ==========================
   ACCESSIBILITY
========================== */

let currentFontSize = 16;

function increaseText(){

    currentFontSize += 2;

    document.body.style.fontSize =
    currentFontSize + "px";

}

function decreaseText(){

    currentFontSize -= 2;

    if(currentFontSize < 12){

        currentFontSize = 12;

    }

    document.body.style.fontSize =
    currentFontSize + "px";

}


/* ==========================
   HIGH CONTRAST MODE
========================== */

function toggleContrast(){

    document.body.classList.toggle(
    "contrast"
    );

}


/* ==========================
   VOICE GUIDE
========================== */

function voiceGuide(){

    let speech =
    new SpeechSynthesisUtterance(

    "Welcome to the Campus Navigation Kiosk. Use the search bar to find rooms, offices, buildings, and facilities."

    );

    speech.rate = 1;

    speech.volume = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(
    speech
    );

}

/* ==========================
   LOW BATTERY WARNING
   (Simulation)
========================== */

function batteryWarning(){

    console.log(
    "Battery monitoring active."
    );

}

batteryWarning();


/* ==========================
   ACCESSIBILITY MENU
========================== */

function openAccessibility(){

    alert(

    "Accessibility Features:\n\n" +
    "A+ Increase Text\n" +
    "A- Decrease Text\n" +
    "Voice Guide\n" +
    "High Contrast Mode"

    );

}


/* ==========================
   HELP PAGE GUIDE
========================== */

function usageGuide(){

    alert(

    "1. Search for a room.\n" +
    "2. Select a building.\n" +
    "3. View map overview.\n" +
    "4. Navigate to destination."

    );

}


/* ==========================
   STARTUP MESSAGE
========================== */

window.onload = function(){

    console.log(
    "Campus Navigation Kiosk Ready"
    );



};



