const characterData = [
    {
        characterName: "Ikaris",
        ability: "Superhuman Strength, superhuman durability, regeneration, telepathy",
        pic: "images\\ikaris.jpeg"
    },

    {
        characterName: "Domo",
        ability: "Effectively immortal and cant be killed through conventional means",
        pic: "images\\domo.jpeg"
    },

    {
        characterName: "Thena",
        ability: "Excellent hand-to-hand combatant, knowledge of combat methods",
        pic: "images\\thena.jpeg"
    },

    {
        characterName: "Sersi",
        ability: "Super strength, near-immortality, illusions, flight",
        pic: "images\\sersi.jpeg"
    },

    {
        characterName: "Ajak",
        ability: "Excellent hand-to-hand combatant, highlt adept at wrestling",
        pic: "Documents/Semester 1 Sophomore/FA21_12000/Week 10/ajak.jpeg"
    }
];

const showInfo = () => {
    let characterNumber = document.querySelector("#petNum").value;
    characterNumber = parseInt(characterNumber) -1;
    let selectedCharacterInfo = document.querySelector(".selectedPetInfo");
    let pet = characterData[characterNumber];
    selectedCharacterInfo.textContent = `${pet.characterName} attribute is ${pet.ability}`;
    let petPic = document.querySelector(".selectedPetPic");
    petPic.src = pet.pic;
}
let infoHeading = document.querySelector(".infoHeading");

infoHeading.textContent = "The Eternals"

let petList = document.querySelector(".petsList");
let allPetsList = `<ol>`;

characterData.forEach((pet) => {
    allPetsList += `<li> ${pet.characterName} </li>`;
});
allPetsList += `</ol>`;

allPetsList.innerHTML = allPetsList;
