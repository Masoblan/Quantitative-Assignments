const petsData = [

    {

        petName: "Stella",

        age: 7,

        weightInKilos: 24,

        breed: "Dalmation"

    },

    {

        petName: "Cody",

        age: 8,

        weightInKilos: 22,

        breed: "Corgi"

    },

    {

        petName: "Mango",

        age: 2,

        weightInKilos: 11,

        breed: "Persian"

    },

    {

        petName: "Lucy",

        age: 4,

        weightInKilos: 35,

        breed: "Ball Python"

    },

    {

        petName: "Buhmie",

        age: 1,

        weightInKilos: 28,

        breed: "Bull-dog"

    }

];
let pets = document.querySelector(".petsData")

let index = prompt("Enter a number 0 through 4");
for (let index = 0; index < petsData.length; index++)

if (index == "0")
document.getElementById("arrPrint").innerHTML = petsData[0].petName + " the dog is " + petsData[0].age + " years old."+ "This dog weighs " + petsData[0].weightInKilos + " kilos and is a " + petsData[0].breed + " Breed.";

if (index == "1")
document.getElementById("arrPrint").innerHTML = petsData[1].petName + " the dog is " + petsData[1].age + " years old."+ "This dog weighs " + petsData[1].weightInKilos + " kilos and is a " + petsData[1].breed + " Breed.";

if (index == "2")
document.getElementById("arrPrint").innerHTML = petsData[2].petName + " the dog is " + petsData[2].age + " years old."+ "This dog weighs " + petsData[2].weightInKilos + " kilos and is a " + petsData[2].breed + " Breed.";

if (index == "3")
document.getElementById("arrPrint").innerHTML = petsData[3].petName + " the dog is " + petsData[3].age + " years old."+ "This dog weighs " + petsData[3].weightInKilos + " kilos and is a " + petsData[3].breed + " Breed.";

if (index == "4")
document.getElementById("arrPrint").innerHTML = petsData[4].petName + " the dog is " + petsData[4].age + " years old."+ "This dog weighs " + petsData[4].weightInKilos + " kilos and is a " + petsData[4].breed + " Breed.";

