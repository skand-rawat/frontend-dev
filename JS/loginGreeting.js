// Q1: Personalized Login Greeting

// Step 1: Declare username and current hour
let userName = "Skand";
let currentHour = new Date().getHours();

// Step 2: Display time-based greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
