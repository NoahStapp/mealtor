import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        return(
            <div className="Recipe">
                <a href={this.props.recipe.source_url}><h3 className="recipe-title">{this.props.recipe.title}</h3></a>
            </div>
        );
    }
}

export default Recipe;