import { connect } from "react-redux";
import AddNews from "./addNews";
import { addNewsActionCreator, updateNewsDataActionCreator } from '../../store/newsReducer';

function mapStateToProps(state){
    return {
        title : state.newsPage.newsAddData.title,
        content : state.newsPage.newsAddData.content
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateAddNewsData: (title, content) => {
            dispatch(updateNewsDataActionCreator(title, content));
        },
        addNews: () => {
            dispatch(addNewsActionCreator());
        }
    }
}

const AddNewsContainer = connect(mapStateToProps, mapDispatchToProps)(AddNews)

export default AddNewsContainer;