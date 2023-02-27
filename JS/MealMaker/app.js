const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    //Getters e Setters 
    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    set appetizers(appetizerIn)
    {
      this._appetizers = appetizerIn;
    },
    set mains(mainIn)
    {
      this._mains = mainIn;
    },
    set desserts(dessertIn)
    {
      this._desserts = dessertIn;
    }
  },
  //Getter for Courses
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  //Adding dish to object _course , Método para adicionar keys ao object(courseName)
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice 
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    //gera o numero random consoante o length do Coursename passado
    const randomIndex = Math.floor(Math.random() * dishes.length);
    //função retorna o int randomIndex
    return randomIndex;
  },
  generateRandomMeal() {
    //guarda o valor gerado pelo método getRandomDishFromCourse para os appetizers
    const appetizer = this.getRandomDishFromCourse('appetizers');
    //guarda o valor gerado pelo método getRandomDishFromCourse para os mains
    const main = this.getRandomDishFromCourse('mains');
    //guarda o valor gerado pelo método getRandomDishFromCourse para os desserts
    const dessert = this.getRandomDishFromCourse('desserts');
    //faz a soma de todos os prices gerados
    const totalPrice = this._courses.appetizers[appetizer].price + this._courses.mains[main].price + this._courses.desserts[dessert].price;
    return `For appetizer we choose ${this._courses.appetizers[appetizer].name} for the main plate we choose ${this._courses.mains[main].name} , and finally for dessert we choose ${this._courses.desserts[dessert].name} , your total price is ${totalPrice}$`;
  }
};

menu.addDishToCourse('appetizers', 'azeitonas', 1);
menu.addDishToCourse('appetizers', 'pão com manteiga', 0.50);
menu.addDishToCourse('appetizers', 'pão de alho', 2);
menu.addDishToCourse('mains', 'arroz de pato', 20);
menu.addDishToCourse('mains', 'lasanha de atum', 18);
menu.addDishToCourse('mains', 'arroz de polvo', 25);
menu.addDishToCourse('desserts', 'arroz doce', 3);
menu.addDishToCourse('desserts', 'leite de creme', 4);
menu.addDishToCourse('desserts', 'pudim fla', 3);

let meal = menu.generateRandomMeal();
console.log(meal);
