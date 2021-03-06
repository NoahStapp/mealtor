var express = require('express')
var path = require('path');
var request = require('request');
var _ = require('lodash');
const fs = require("fs");
var app = express();
var port = process.env.PORT || 3001;
const apiKey = 'c1e5c4381fb83a2bafa9110623b5dcc6'

app.get('/api/fetch/:ingredients', function(req, res) {
    const ingredients = req.params.ingredients;
    console.log(ingredients);
    var options = {
        url: 'http://food2fork.com/api/search?key='+apiKey+'&q='+ingredients,     
    };
    request.get(options, function(error, response, data) {
        response = _.get(response, 'body');
        response = JSON.parse(response)
        recipes = _.get(response, 'recipes');
        console.log(recipes)
        res.json(recipes);
    });
});

var server = app.listen(port, function () {
    console.log('Mealtor running on port 3001!')
});
