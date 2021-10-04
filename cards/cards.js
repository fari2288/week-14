function select(sender) {
sender.classList.add("selected");}

let elements= document.querySelector('.card');
console.log(elements);

for(let element of elements) {
    console.log(element.classList);
}