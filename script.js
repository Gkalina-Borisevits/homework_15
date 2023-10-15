if(document.getElementById("formGenderName")) {



const formGenderName = document.getElementById("formGenderName");
const nameList = document.getElementById("nameList");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

formGenderName.addEventListener("submit", event => {
    event.preventDefault();

    const name = event.target.formInputName.value;
    event.target.formInputName.value = "";

    fetch(`https://api.genderize.io?name=${name}`)
    .then(result => result.json())
    .then(data => {
        const {count, name, gender, probability} = data;

        loader.style.display = "block";
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";

        nameList.textContent = `Name: ${name.toUpperCase()}\n Gender: ${gender}\n Probability of obtaining: ${probability}\n Number in the list: ${count}`;

    }, 1000);
});
});
};
  

if(document.getElementById("cardInfo")) {
    const cardInfo = document.getElementById("cardInfo");
    const userText = document.getElementById("userText");
    const userImage = document.getElementById("userImage");

    async function getUser() {
        const response = await fetch(`https://gkalina-borisevits.github.io/userApi/user.json`);
        const users = await response.json();
     
        console.log(users);
        users.forEach(user => {
            const {name, date, img} = user;
            const userContainer = document.createElement("div");
            const userImage = document.createElement("img");
            const userText = document.createElement("h1");
            userImage.src = user.img;
            userImage.alt = name;
            
            userText.textContent = `${name} :\n ${date}`;
            userContainer.appendChild(userImage);
            userContainer.appendChild(userText);
            cardInfo.appendChild(userContainer);

            userContainer.classList.add("userCard");
            userText.style.whiteSpace = 'pre-line';
        })
    }
getUser();
}