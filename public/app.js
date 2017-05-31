(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('MealApp', ['ui.router']);

const controllers = [
    require('./controllers/home'),
];

// for loop to bring controllers

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

const mealService = require('./services/meal');
app.factory(mealService.name, mealService.func);

const userService = require('./services/user');
app.factory(userService.name, userService.func);

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: 'start',
        url: '/start',
        component: 'startPage',
    });
    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'homePage',
    });
    $stateProvider.state({
        name: 'cook',
        url: '/cook',
        component: 'cookPage',
    });
    $stateProvider.state({
        name: 'cookconfirm',
        url: '/cook-confirm',
        component: 'cookconfirmPage',
    });
    $stateProvider.state({
        name: 'meallist',
        url: '/meal-list',
        component: 'meallistPage',
    });
    $stateProvider.state({
        name: 'mealdetail',
        url: '/meal/:mealID',
        component: 'mealdetailPage',
    });
    $stateProvider.state({
        name: 'eatconfirm',
        url: '/eat-confirm',
        component: 'eatconfirmPage',
    });

});

app.component('startPage', {
    templateUrl: 'templates/start.html',
    controller: 'StartController',
});

app.component('homePage', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController', // not sure what controller to use here
});

app.component('cookPage', {
    templateUrl: 'templates/cook.html',
    controller: 'CookController',
});

app.component('cookconfirmPage', {
    templateUrl: 'templates/cook-confirm.html',
    controller: 'CookController',
});

app.component('meallistPage', {
    templateUrl: 'templates/meal-list.html',
    controller: 'MealListController',
});

app.component('mealdetailPage', {
    templateUrl: 'templates/meal-detail.html',
    controller: 'MealDetailController',
});

app.component('eatconfirmPage', {
    templateUrl: 'templates/eat-confirm.html',
    controller: 'CookController',
});


},{"./controllers/home":2,"./services/meal":3,"./services/user":4}],2:[function(require,module,exports){
module.exports = {
    name: 'HomeController',
    func: function ($scope, $stateParams, MealService) {
        console.log('it worked');
    },
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'MealService',
    func: function ($http) {

        const availableMeals = [];

        return {

            postMeal() {

                const servings = document.getElementById('servings').value;

                for(let i = 0; i < servings; i++){

                    const meal = {
                        // AUTO-GENERATED INPUTS
                        id: 1, // is this generated by the backend?
                        serving_id: 1, // is this generated by the backend?
                        // cook: true, // switched to "false" when 'claimed' by 'consumer' user // <= maybe an idea for later
                        // eta: null, // will be altered later by the 'consumer' user // <= maybe an idea for later
                        // is_complete: false, // 'false' = incomplete 'true' = complete // <= maybe an idea for later
                        
                        // USER INPUTS
                        name: document.getElementById('name').value,
                        recipe: document.getElementById('recipe').value,
                        available: document.getElementById('available'),
                        category: document.getElementById('category').value,
                        add_info: document.getElementById('addInfo').value,
                    }

                    availableMeals.push(meal);
                }
            }
        }
    }
}
},{}],4:[function(require,module,exports){

},{}]},{},[1]);
