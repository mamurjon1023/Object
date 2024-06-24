// let nameArr = ["Ma'murjon", "12", "Sebzor"];

// console.log(`${nameArr[0]} ${nameArr[1]} yoshda, ${nameArr[2]} da turadi`);

// let nameObject = {
//     name: "Ma'murjon",
//     age: 12,
//     adress: "Sebzor"
// };

// console.log(`${nameObject["name"]} ${nameObject["age"]} yoshda, ${nameObject["adress"]} da turadi`);

let ism = prompt("Ism familyangizni kiriting");
let id = Number(prompt("Id ingizni kiriting"));
let parol = Number(prompt("Parolingizni kiriting"));

let object = {
    name: ism,
    id: id,
    password: parol,
};

console.log(object);