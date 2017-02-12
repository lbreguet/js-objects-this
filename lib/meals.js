'use strict';

const User = {
  name: 'Louis Breguet',
  bornOn: '1996-07-08',
  calorieTarget: 1500,
  meals: [
    {
      title: 'Breakfast',
      date: '2017-01-09',
      description: 'Toast with Nutella and a cup of coffee.',
      calories: 320,
    },
    {
      title: 'Lunch',
      date: '2017-01-09',
      description: 'A bacon cheeseburger from Five Guys with a bottle of water.',
      calories: 840,
    },
    {
      title: 'Dinner',
      date: '2017-01-10',
      description: 'Pizza with soda',
      calories: 760,
    },
  ],

  caloriesEatenOn: function (date) {
    let result = 0;
    for (let i = 0; i < this.meals.length; i++) {
      if (this.meals[i].date === date) {
      result += this.meals[i].calories;
      }
    } return result;
  },

// review use of `for (in...)`
//

  avgDailyCalories: function () {
    let result = 0;
    for (let i = 0; i < this.meals.length; i++) {
      result += this.meals[i].calories;
    } return result / this.meals.length;
  },
  onTrack: function () {
    if (this.avgDailyCalories <= this.calorieTarget) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = User;
