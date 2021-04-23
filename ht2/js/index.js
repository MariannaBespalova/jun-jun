let admin;
let someName;

someName = "John";
admin = someName;

alert(admin);


// ______________

let ourPlanet = "Earth";
let currentUserName = "John";


//________________

let sum = '10' + 10;

console.log(sum, typeof sum); //1010 string, преобразование типов данных


//________________
function findNeedle(haystack) {
  if (haystack.includes("needle")){

    let index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
  }
}



findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])