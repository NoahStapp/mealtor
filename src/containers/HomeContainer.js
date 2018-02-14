import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/actions';
import Home from '../components/Home';

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(fetchRecipes())
    };
};

const mapStateToProps = state => {
    return {
        recipes: state.storeData.recipes
    };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
