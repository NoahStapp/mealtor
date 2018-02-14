import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/actions';
import Home from '../components/Home';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(fetchRecipes())
    };
};

const mapStateToProps = state => {
    return {
        currentRecipe: state.storeData.currentRecipe
    };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
