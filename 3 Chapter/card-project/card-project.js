const cards = [
  {
    image: "./images/1.png",
    titleTop: "The",
    titleBottom: "Algorithm",
    description: "A deep dive into problem solving and logical thinking."
  },
  {
    image: "./images/2.png",
    titleTop: "The",
    titleBottom: "Developer",
    description: "Building scalable applications with clean architecture."
  },
  {
    image: "./images/3.png",
    titleTop: "The",
    titleBottom: "Designer",
    description: "Crafting intuitive and beautiful user experiences."
  },
  {
    image: "./images/4.png",
    titleTop: "The",
    titleBottom: "Architect",
    description: "Designing systems that stand the test of time."
  },
  {
    image: "./images/5.png",
    titleTop: "The",
    titleBottom: "Innovator",
    description: "Turning creative ideas into impactful solutions."
  },
  {
    image: "./images/6.png",
    titleTop: "The",
    titleBottom: "Engineer",
    description: "Solving real-world challenges through technology."
  }
];

let cardContainer = document.querySelector(".card-container");
let clutter = "";
let cardCount = 1;

cards.forEach(elem => {
  clutter += `
    <div class="card card-${cardCount}">
      <img src="${elem.image}" alt="${elem.titleBottom}">
      <h1>
        <span>${elem.titleTop}</span> <br> 
        <b>${elem.titleBottom}</b>
      </h1>
      <p>${elem.description}</p>
    </div>
  `;

  cardCount++;
});

cardContainer.innerHTML = clutter;


let style = document.createElement("style");

style.innerText = `
.card {
  width: 22rem;
  height: 32.5rem;
  background-color: #2c241f;
  border-radius: 12px;
  padding: 3rem;
  position: sticky;
  top: 15vh;
  margin: 3rem;
}

.card img{
  width: 90%;
  margin: -2rem 0.5rem 2rem 0.5rem;
  padding: 1rem;
}

.card h1 {
  font-family:Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.card h1 span {
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.card p {
  text-align: center;
  margin-bottom: rem;
}
`;

document.head.append(style);