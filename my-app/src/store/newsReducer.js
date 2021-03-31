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
        title : "",
        content : ""
    }
};

const newsReducer = (state = initialState, action) => {
    console.log("reducer was called!");
    switch (action.type) {
        case ORDER_ASC:
            state.news.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
            state.orderMessage = "Ordered ascending";
            return state;
        case ORDER_DESC:
            state.news.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            state.orderMessage = "Ordered descending";
            return state;
        case ADD_NEWS:
            var id = Math.max.apply(Math,
                state.news.map(function (item) { return item.id; }));
            id += 1;
            state.news.push({
                id: id,
                title: state.newsAddData.title,
                content: state.newsAddData.content,
                likes: 0
            });
            state.newsAddData.title = "";
            state.newsAddData.content = "";
            return state;
        case UPDATE_NEWS_DATA:
            state.newsAddData.title = action.title;
            state.newsAddData.content = action.content;
            return state;
        default:
            return state;
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

