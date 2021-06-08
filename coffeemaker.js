

const coffee_name = document.querySelector(".coffee_name");
const coffee_description = document.querySelector(".coffee_description");
const coffee_filling = document.querySelector(".filling");
const buttons = document.querySelectorAll("button");
let current_element = null;

const descriptions = {
  americano: "1 shot of espresso strong coffee diluted with water.☕",
  au_lait: "30% brewed coffee, 70% milk.☕",
  cappuccino:"Double espresso with steamed milk, topped with milk foam, cinnammon is a must.☕",
  corretto: "Simple espresso with a dash of liquor.☕",
  espresso: "Black coffee. Straight to the point.☕",
  flatwhite: "Double strong espresso with steamed milk.☕",
  latte: "Combination of a shot of espresso and steamed frothy milk.☕",
  lungo: "2-3 shots of strong espresso with water.☕",
  macchiato: "Loads of frothy creamy milk with a dash of espresso.☕",
  mocha: "Delicious combination of coffee, chocolate sauce, milk and cream.☕",
  ristretto: "Elegant concentrated coffee prepared with half the water.☕"
}

const changeCoffeeType = (selectedbutton) => {
  if (current_element) {
    current_element.classList.remove("selected");
    coffee_filling.classList.remove(current_element.id);

  }  
  current_element = selectedbutton;
  coffee_filling.classList.add(current_element.id);
  current_element.classList.add("selected");
  coffee_name.innerText = selectedbutton.innerText;

  coffee_description.innerText = descriptions[selectedbutton.id];
  

};

const setActiveType = (element) => {
  element.toggleClass("selected");
};

[...buttons].forEach((button) => {
  button.addEventListener("click", (event) => {
    changeCoffeeType(button);
  });
});