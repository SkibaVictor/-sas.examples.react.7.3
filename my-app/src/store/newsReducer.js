const ORDER_ASC = "ORDER_ASC";
const ORDER_DESC = "ORDER_DESC";
const ADD_NEWS = "ADD_NEWS";
const UPDATE_NEWS_DATA = "UPDATE_NEWS_DATA";

let initialState = {
    news: [
        { id: 1, title: "First news", content: "First item content", likes: 2 },
        { id: 2, title: "Second news", content: "Second item content", likes: 4 },
        { id: 3, title: "Third news", content: "Third item content", likes: 223 },
        { id: 4, title: "Fourth news", content: "Fourth item content", likes: 12 }
    ],
    orderMessage: "Not ordered",
    newsAddData: {
        title: "",
        content: ""
    }
};

const newsReducer = (state = initialState, action) => {
    let newState = { ...state };
    newState.news = [...state.news];
    switch (action.type) {
        case ORDER_ASC: {
            newState.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
            newState.orderMessage = "Ordered ascending";
            return newState;
        }
        case ORDER_DESC: {
            newState.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            newState.orderMessage = "Ordered descending";
            return newState;
        }
        case ADD_NEWS: {
            var id = Math.max.apply(Math, 
                newState.news.map(function (item) { return item.id; })) + 1;
            newState.news.push({
                id: id,
                title: newState.newsAddData.title,
                content: newState.newsAddData.content,
                likes: 0
            });
            newState.newsAddData.title = "";
            newState.newsAddData.content = "";
            return newState;
        }
        case UPDATE_NEWS_DATA: {
            newState.newsAddData = {...state.newsAddData};
            newState.newsAddData.title = action.title;
            newState.newsAddData.content = action.content;
            return newState;
        }
        default:
            return newState;
    }
}
export function orderAscActionCreator() {
    return { type: ORDER_ASC }
}
export function orderDescActionCreator() {
    return { type: ORDER_DESC }
}
export function addNewsActionCreator() {
    return { type: ADD_NEWS }
}
export function updateNewsDataActionCreator(title, content) {
    return {
        type: UPDATE_NEWS_DATA,
        title: title,
        content: content
    }
}
export default newsReducer;

