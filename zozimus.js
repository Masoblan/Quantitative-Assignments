const bard = {
    bardName: "Harriet",
    realName: "Michael",
    yearOfBirth: 2004,
}

const cost = {
    baseCost: .10 ,
    discount: .3 ,

}

const poem = {
    str: "Happy birthday",
    age: 17,
    subjectName: "Jimmy", 
    verse: function() {
   return("Come ye to herald" + this.subjectName + "well, as we ring the chorus bell")
}
}

const refrain = function(times){
    
    if (this.age > 25) 
        times = "Honourable"

    else (this.age <= 25)
        times = "Young"

return(this.times + this.subjectName + "on your year" + this.age +"," + this.subjectName +"," + this.subjectName +"," + this.subjectName) 
}
writePoem = (refrain,verse) 
    refrain = document.querySelector(`.refrain`)
    verse = document.querySelector(`.verse`)
    refrain.innerHTML = (`.refrain`);
    verse.innerHTML = (`.verse`);


const personalBard = (names, ages, messages) => {
    names = prompt("Please enter a name: ")
    ages = prompt("Please enter an age: ")
    messages = prompt("Please enter a message: ")
}
// const payTheBard = function(){
//     writes = document.querySelector(`.cost`)
//     writes.innerHTML = `Now pay the bard` <this.bardName> $<cost>
// 
// }

personalBard()
// payTheBard()

