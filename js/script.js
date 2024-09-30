//*-----------js-----------*//


//*-----------jq-----------*//

$(document).ready(funtion(){
	//alert
	$('#btn').on("click",funtion(){
		alert("welcome");
	})
})

	//show/hide
	$('#btnh').on("click",funtion(){
		$(#sh).fadeout();
	})

	$('#btns').on("click",funtion(){
		$(#sh).fadeout();
	})

$(document).ready(funtion(){
	//alert
	$('#ques').on("click",funtion(){
		$('.ans').slideToggle(500);
	})
})


$(funtion(){
	
		$("_#dragg_").draggable(500);
	});

//ex16{

document.getElementById("demo").innerHTML = "Hello World!";

//ex15{

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

//ex14{
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

//You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on  a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.


//ex13{

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("demo").innerHTML =
myCar1.name + " " + myCar2.name;
//ex12{

myFunction();

function myFunction() {
  let a = 4;
  document.getElementById("demo").innerHTML = a * a;
}

//ex11{
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }


const person1 = {
  firstName:"John",
  lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.apply(person1); 
}


//ex10{
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }

document.getElementById("demo").innerHTML = myObject.fullName();
}

//ex9{
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;


let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

document.getElementById("demo").innerHTML = x;
}

//ex8{

const x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x;
</script>



//ex7{
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


//ex6{
 Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


//ex5{

let number1, number2, result;
	 number1 = 5;
	 number2 = 5;
	 Result = number1 > number2;

	function Show Result(){
	document.getElementById('sr2').innerHTML=result;
}



//ex4
function textShow(){
	document.getElementById('tsh').style.display="block";
}
function textHide(){
	document.getElementById('tsh').style.display="none";
}




//ex3{
	var number1 = 5;
	var number2 = 2;
	var Result = number1 + number2;

	function Show Result(){
	document.getElementById('sr').innerHTML=number1;
}


//ex2
function textchange(){
	document.getElementById('tc').innerHTML=welcome to home;
}






//ex1
function bulbon(){
	document.getElementById('bulb').src='images/on.gif';
}



function bulboff(){
	document.getElementById('bulb').src='images/off.gif';
}




	
	