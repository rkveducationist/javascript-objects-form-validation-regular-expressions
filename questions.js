const questions = [

/* =========================
MCQ - OBJECTS BASICS
========================= */

{
type:"mcq",
question:"What is an object in JavaScript?",
options:[
"Collection of key-value pairs",
"Array",
"Function",
"Loop"
],
answer:"Collection of key-value pairs",
hint:"Stores data as properties"
},

{
type:"mcq",
question:"Object properties are accessed using?",
options:[
"dot notation",
"bracket notation",
"Both",
"None"
],
answer:"Both",
hint:"obj.key or obj['key']"
},

{
type:"mcq",
question:"What is a method in object?",
options:[
"Function inside object",
"Variable",
"Loop",
"Condition"
],
answer:"Function inside object",
hint:"Object behavior"
},

/* =========================
MCQ - OBJECT ITERATION
========================= */

{
type:"mcq",
question:"Which loop is used to iterate object?",
options:[
"for..in",
"forEach",
"while",
"switch"
],
answer:"for..in",
hint:"Object iteration"
},

{
type:"mcq",
question:"forEach is used for?",
options:[
"Arrays",
"Objects",
"Strings",
"Numbers"
],
answer:"Arrays",
hint:"Array method"
},

/* =========================
MCQ - NESTED OBJECTS
========================= */

{
type:"mcq",
question:"Nested object means?",
options:[
"Object inside object",
"Array",
"Loop",
"Function"
],
answer:"Object inside object",
hint:"Multiple levels"
},

{
type:"mcq",
question:"Access nested object value using?",
options:[
"obj.inner.key",
"obj[key]",
"obj.value",
"obj()"
],
answer:"obj.inner.key",
hint:"Chain access"
},

/* =========================
MCQ - DOM SELECTORS
========================= */

{
type:"mcq",
question:"Which method selects element by id?",
options:[
"getElementById",
"querySelector",
"getElements",
"find"
],
answer:"getElementById",
hint:"ID selector"
},

{
type:"mcq",
question:"Which method selects using CSS selector?",
options:[
"querySelector",
"getElementById",
"getElements",
"selectAll"
],
answer:"querySelector",
hint:"CSS style selector"
},

{
type:"mcq",
question:"Which method selects multiple elements?",
options:[
"querySelectorAll",
"getElementById",
"selectOne",
"getSingle"
],
answer:"querySelectorAll",
hint:"Returns NodeList"
},

/* =========================
MCQ - DOM MANIPULATION
========================= */

{
type:"mcq",
question:"Which method creates element?",
options:[
"createElement",
"append",
"remove",
"set"
],
answer:"createElement",
hint:"Create DOM node"
},

{
type:"mcq",
question:"Which method adds element to DOM?",
options:[
"appendChild",
"remove",
"delete",
"replace"
],
answer:"appendChild",
hint:"Insert element"
},

{
type:"mcq",
question:"Which method removes element?",
options:[
"remove",
"append",
"create",
"set"
],
answer:"remove",
hint:"Delete node"
},

{
type:"mcq",
question:"Which property sets text?",
options:[
"innerHTML",
"value",
"text",
"content"
],
answer:"innerHTML",
hint:"Set content"
},

/* =========================
MCQ - EVENTS
========================= */

{
type:"mcq",
question:"onclick event triggers on?",
options:[
"Mouse click",
"Hover",
"Load",
"Scroll"
],
answer:"Mouse click",
hint:"User action"
},

{
type:"mcq",
question:"onsubmit is used for?",
options:[
"Form submission",
"Click",
"Scroll",
"Hover"
],
answer:"Form submission",
hint:"Form event"
},

/* =========================
MCQ - VALIDATION
========================= */

{
type:"mcq",
question:"Form validation is used to?",
options:[
"Validate input data",
"Style page",
"Create DOM",
"Loop execution"
],
answer:"Validate input data",
hint:"Check correctness"
},

{
type:"mcq",
question:"Which attribute is used for required field?",
options:[
"required",
"validate",
"check",
"must"
],
answer:"required",
hint:"HTML validation"
},

/* =========================
MCQ - REGEX
========================= */

{
type:"mcq",
question:"Regex is used for?",
options:[
"Pattern matching",
"Looping",
"Sorting",
"Calculation"
],
answer:"Pattern matching",
hint:"Validation patterns"
},

{
type:"mcq",
question:"Which symbol defines regex?",
options:[
"/pattern/",
"<pattern>",
"{pattern}",
"[pattern]"
],
answer:"/pattern/",
hint:"Regex syntax"
},

/* =========================
CODING - OBJECT
========================= */

{
type:"code",
question:"Create object with properties",

required:["object"],

hint:"Key-value",

solution:`let user = {
  name: "Ravi",
  age: 25
};

console.log(user.name);`
},

{
type:"code",
question:"Object with method",

required:["function"],

hint:"Method inside object",

solution:`let user = {
  name: "Ravi",
  greet: function(){
    console.log("Hello");
  }
};

user.greet();`
},

/* =========================
CODING - FOR IN
========================= */

{
type:"code",
question:"Iterate object using for..in",

required:["for..in"],

hint:"Loop object",

solution:`let obj = {a:1,b:2};

for(let key in obj){
  console.log(key, obj[key]);
}`
},

/* =========================
CODING - NESTED OBJECT
========================= */

{
type:"code",
question:"Access nested object",

required:["nested"],

hint:"Chain access",

solution:`let user = {
  name: "Ravi",
  address: {
    city: "Hyderabad"
  }
};

console.log(user.address.city);`
},

/* =========================
CODING - DOM SELECTOR
========================= */

{
type:"code",
question:"Select element using querySelector",

required:["queryselector"],

hint:"CSS selector",

solution:`let el = document.querySelector("#demo");
console.log(el);`
},

/* =========================
CODING - CREATE & APPEND
========================= */

{
type:"code",
question:"Create and append element",

required:["createelement","appendchild"],

hint:"Add element",

solution:`let div = document.createElement("div");
div.innerHTML = "Hello";

document.body.appendChild(div);`
},

/* =========================
CODING - REMOVE ELEMENT
========================= */

{
type:"code",
question:"Remove element",

required:["remove"],

hint:"Delete node",

solution:`let el = document.getElementById("demo");
el.remove();`
},

/* =========================
CODING - EVENT
========================= */

{
type:"code",
question:"onclick event example",

required:["onclick"],

hint:"Click event",

solution:`document.getElementById("btn").onclick = function(){
  alert("Clicked");
};`
},

{
type:"code",
question:"onsubmit event example",

required:["onsubmit"],

hint:"Form submit",

solution:`document.getElementById("form").onsubmit = function(){
  alert("Form submitted");
};`
},

/* =========================
CODING - VALIDATION
========================= */

{
type:"code",
question:"Basic form validation",

required:["if"],

hint:"Check empty",

solution:`let name = document.getElementById("name").value;

if(name === ""){
  alert("Name required");
}`
},

/* =========================
CODING - REGEX
========================= */

{
type:"code",
question:"Email validation using regex",

required:["regex"],

hint:"Pattern match",

solution:`let email = "test@gmail.com";

let pattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;

console.log(pattern.test(email));`
}

];