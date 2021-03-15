var userTime = prompt ("Enter the time in 24-hour format: ");



if ( userTime >= 0000 && userTime < 1200) {

    alert("Good Morning");
} else if (userTime >= 1200 && userTime < 1700) {

    alert ("Good Afternoon");
} else if (userTime <=1700 && userTime < 2100) {

    alert ("Good Evening");
} else if (userTime <= 2100 && userTime < 2359) {

    alert ("Good Night");
}