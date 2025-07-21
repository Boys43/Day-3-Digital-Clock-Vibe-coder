// It msut be updated every milisecond so,

setInterval(() => {
    const now = new Date();

    // let extract all times components
    var hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2 , "0");
    const miliSeconds = now.getMilliseconds();
    
    var timeIndicators = (hours > 12) ? "PM" : "AM";


    // Refernce shape moon/sun
    var timeShape = document.getElementById("time-shape");

    // let's set horizontal motion of the shape
    let timePercent = (hours / 24) * 100;
    timeShape.style.left = `${timePercent - 4}%`

    // Updating vertical arc motion of the shape
    let topOffset = Math.abs(hours - 12) * (40 / 12);
    timeShape.style.top = topOffset + "%";

    // Day and night theme corresponding to the current TIme


    if (hours > 6 && hours <= 12) {
        // Day 

        timeShape.style.backgroundColor = "yellow";
        timeShape.style.boxShadow = "5px 5px 50px orange"
        document.body.style.backgroundColor = "rgba(0, 157, 255, 0.84)";
    } else if (hours > 12 && hours <=18) {
        // Afternoon

        timeShape.style.backgroundColor = "yellow";
        timeShape.style.boxShadow = "5px 5px 50px orange";
        document.body.style.backgroundColor = "rgba(255, 81, 0, 0.5)";
    } else if (hours > 18 || hours <= 6) {
        // Night 

        timeShape.style.backgroundColor = "grey";
        timeShape.style.boxShadow = "5px 5px 50px grey";
        document.body.style.backgroundColor = "rgba(0, 21, 255, 0.84)";
    }

    // Now let's change the 24hr format to 12hr
    let displayHours = String(hours % 12 || 12).padStart(2, "0");
    let displayMiliSeconds = String(miliSeconds).padStart(3, "0");

    // Now move all the elements to the DOM and render them

    document.getElementById("hours").innerText = displayHours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("mili-sec").innerText = displayMiliSeconds;
    document.getElementById("indicators").innerText = timeIndicators;

}, 1); //After every mili - Second