function myFunction() {
    alert ("Welcome to Code Academy!");
}

const person = {firstName:"Code", lastName:"Academy"
};

let text = "";
for (let x in person) {
    text += person[x] + " ";
}
document.getElementById("users").innerHTML = text
