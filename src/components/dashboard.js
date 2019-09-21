import React from 'react';
import RecipeDetail from './recipe/recipe-detail';
import RecipeList from './recipe/recipe-list/recipe-list';
import ShoppingList from './shopping-list/shopping-list';
import Header from './header/header';

class RecipeDashboardPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: "recipe"
        }
        this.onRecipesSelected = this.onRecipesSelected.bind(this);
        this.onShoppingListSelected = this.onShoppingListSelected.bind(this);
    }

    onRecipesSelected() {
        this.setState({
            active: "recipe"
        })
    };

    onShoppingListSelected() {
        this.setState({
            active: "shopping"
        })
    };
    
    render() {
        return(
            <div>
                <Header 
                    active={this.state.active}
                    onRecipesSelected={this.onRecipesSelected}
                    onShoppingListSelected={this.onShoppingListSelected}
                />
                {/* <RecipeDetail />
                <RecipeList />
                <ShoppingList /> */}
            </div>
        )
    }
  
};

export default RecipeDashboardPage;
