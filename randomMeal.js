const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = Math.round((appetizer.price + main.price + dessert.price + Number.EPSILON) * 100) / 100;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is: ${totalPrice}€.`;
    }
};

menu.addDishToCourse('appetizers', 'Salad', 4.80);
menu.addDishToCourse('appetizers', 'Wings', 3.20);
menu.addDishToCourse('appetizers', 'Fries', 4.25);

menu.addDishToCourse('mains', 'Steak', 16.40);
menu.addDishToCourse('mains', 'Entrecôte', 21.50);
menu.addDishToCourse('mains', 'Brochette', 14.70);

menu.addDishToCourse('desserts', 'Moelleux', 7.20);
menu.addDishToCourse('desserts', 'Banana split', 8.00);
menu.addDishToCourse('desserts', 'Coffee', 4.30);

const meal = menu.generateRandomMeal();
console.log(meal);