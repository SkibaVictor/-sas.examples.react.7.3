import { connect } from "react-redux";
import News from "./news";
import { orderAscActionCreator, orderDescActionCreator } from '../../store/newsReducer';

function mapStateToProps(state){
    return {
        newsPage : state.newsPage,
    }
}

function mapDispatchToProps(dispatch){
    return {
        sortNewsAsc: () => {
            dispatch(orderAscActionCreator());
        },
        sortNewsDesc: () => {
            dispatch(orderDescActionCreator());
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer;

// props = {
//     newsPage : state.newsPage,
//     sortNewsAsc: () => {},
//     sortNewsDesc: () => {}
// }


