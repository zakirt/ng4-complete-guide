import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

export const appRoutes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            {
                path: 'list',
                component: RecipeListComponent
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            }
        ]
    },
    // {
    //     path: 'recipes/:id',
    //     component: RecipeDetailComponent
    // },
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }