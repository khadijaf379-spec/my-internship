const enableDarkMode = true;
const showNotifications = false;
let autoSaveInterval = 5000; 
let preferredLanguage = "urdu"; 
const customTheme = null;
let lastLoginIp = undefined;

const permissions = ["read", "write", "execute"];
const userSettings = { theme: "dark", layout: "grid", sound: true};
const loginHistory = [ "2026-06-10", "2026-06-08", "2026-06-09"];
const backupCodes = [1489, 3920, 5849, 1029];
const geograficCoordinates = {lat: 45.4215, lng: -75.69};

//var example redeclaration alloed and update also allowed 
var x = 10;
var x = 20;
x = 30;
console.log(x);

// let example redeclaration not allowed but update (y = 25 ) allowed
let y = 10;
y = 25;
console.log(y);

//const example re-assignment not allowed (z = 20) not allowed
const z = 10;
console.log(z);

//primitive type 
let scoreOne = 100;
let scoreTwo = scoreOne;
scoreTwo = 150;
console.log(scoreOne);
console.log(scoreTwo);

//reference type
let userOne = {name: "alice" , age: 25};
let userTwo = userOne;
userTwo.name = "bob";
console.log(userOne.name);
console.log(userTwo.name);

let a = 1;
let b = 2;

[a, b] = [b, a]; 

console.log(a); 
console.log(b); 

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));  
console.log(fahrenheitToCelsius(100)); 
