const drink = {
  color: 'brown',
  carbonates: true,
  sugar: 40,
};

//Type Alias
type DrinkType = [string, boolean, number];

const pepsi: DrinkType = ['brown', true, 40];
const sprite: DrinkType = ['clean', false, 30];
const tea: DrinkType = ['green', false, 60];
