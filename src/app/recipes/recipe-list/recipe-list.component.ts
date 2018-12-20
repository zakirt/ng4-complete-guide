import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(1, 'Test Recipe', 'Just a test recipe', 'http://tinyurl.com/ka9wbev'),
        new Recipe(2, 'Test Recipe', 'Just a test recipe', 'http://tinyurl.com/ka9wbev')
    ];

    constructor() { }

    ngOnInit() {
        console.log('recipe list');
    }

}
