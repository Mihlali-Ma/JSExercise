/*function fullName() {
        let Nameful='Mihlali Matrose' 

}*/

//Its created using the following way

function fullName(){
  return  "Mihlali Matrose"
}

console.log(fullName());

//Question 2

let firstName='Mihlali';

let lastName='Matrose';

let  age='20';
console.log(firstName);
console.log(lastName);
console.log(age)

const listOfsubjects= [
    'Javascript','HTML','CSS'
];


for (let i = 0; i < listOfsubjects.length; i++) {
    console.log(listOfsubjects[i]);
    
}



const address=[
    streetName='Kanti Street'
    , streetNumber='35'
    , suburb='Khayelitsha'
    , city='Cape Town'
    , countryName='South Africa'
]

for (let i = 0; i < address.length; i++) {
    console.log(address[i]);
    
}





function btnResult(){
    let numb1 = +document.querySelector("#numb1").value
    let operator = document.querySelector("#sums").value
    let numb2 = +document.querySelector("#numb2").value
    let result = document.querySelector("#answer")

    if (operator == "+"){
         result.innerText = numb1 + numb2;
    }else if (operator == "-"){
         result.innerText = numb1 - numb2;
    } else if (operator == "*"){
         result.innerText = numb1 * numb2;
    }else if (operator == "/"){
         result.innerText = numb1 / numb2;
    }
}