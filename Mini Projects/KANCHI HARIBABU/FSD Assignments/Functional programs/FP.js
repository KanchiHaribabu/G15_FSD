let pizza = true;
pizza = false;
console.log(pizza); 


const pizza1 = true;
pizza1 = false; 


var topic = "Javascript";

if (topic) {
    let topic = "React";
    console.log(topic); 
}


console.log(topic); 


<div id="container"></div>


const container = document.getElementById("container");


for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.textContent = `Div ${i}`;
    div.addEventListener("click", () => {
        alert(`Clicked on Div ${i}`);
    });
    container.appendChild(div);
}


const firstName = "John";
const qty = 2;
const event = "Concert";
const price = 25;

const email = `
Hello ${firstName},
Thanks for ordering ${qty} tickets to ${event}.

Order Details:
${firstName} ${middleName} ${lastName}
${qty} * ${price} = ${qty * price} to ${event}

You can pick up your tickets 30 minutes before the show

${ticketAgent}'.
`;


document.body.innerHTML = `
<section>
  <header>
      <h1>The React Blog</h1>
  </header>
  <article>
      <h2>${article.title}</h2>
      ${article.body}
  </article>
  <footer>
      <p>Copyright ${new Date().getFullYear()} | The React Blog</p>
  </footer>
</section>
`;


function logCompliment() {
    console.log("You are doing great");
}

logCompliment();


function logCompliment(name, message) {
    return `${name}, ${message}`;
}

const result = logCompliment("John", "You are doing great!");
console.log(result); 


function logActivity(name = "Guest", activity = "Nothing") {
    console.log(`${name} is ${activity}`);
}

logActivity();
logActivity("John");
logActivity("Alice", "coding"); 


const greeting = (arg1, arg2) => {
    console.log(`${arg1} is from ${arg2}`);
};

greeting("John", "New York"); 


const greeting1 = (arg1, arg2) => {
    if (arg1 === undefined || arg1 === null) {
        throw new Error("arg1 is missing or null");
    }
    console.log(`${arg1} is from ${arg2}`);
    return arg1;
};

try {
    const result = greeting1(null, "New York");
    console.log(result);
} catch (error) {
    console.error(error.message);
}


const tahoe = {
    mountains: ["Mount1", "Mount2", "Mount3"],
    print: function () {
        this.mountains.forEach((mountain, index) => {
            setTimeout(() => {
                console.log(`Mountain ${index + 1}: ${mountain}`);
            }, 1000 * index);
        });
    },
};

tahoe.print();


const sandwich = {
   
}


const animals = ['horse', 'cat', 'mouse'];
const [animal1, animal2, animal3] = animals;
console.log(animal1); 
console.log(animal2); 
console.log(animal3); 


const animals1 = ['horse', 'cat', 'mouse'];
const [, , lastAnimal] = animals1;
console.log(lastAnimal);


const name = "Mountain Hike";
const altitude = 5000;

const funHike = {
    name,
    altitude,
};

console.log(funHike); 


const skier = {
    name: "John",
    sound: "Swoosh!",
    speed: function (mph) {
        console.log(`${this.name} is skiing at ${mph} mph with the sound ${this.sound}`);
    },
};

skier.speed(30);


const skier1 = {
    name: "John",
    sound: "Swoosh!",
    speed(mph) {
        console.log(`${this.name} is skiing at ${mph} mph with the sound ${this.sound}`);
    },
};

skier.speed(30); 


const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];

const tahoe1 = [...peaks, ...canyons];
console.log(tahoe1); 