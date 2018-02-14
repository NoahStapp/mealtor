import React from 'react'
import { Field, reduxForm } from 'redux-form'

let IngredientsForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <Field name="ingredients" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

IngredientsForm = reduxForm({
    IngredientsForm,
    form: 'ingredients'
  })(IngredientsForm)
  
  export default IngredientsForm