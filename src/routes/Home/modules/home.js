// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';
export const CHANGE_ORDER = 'CHANGE_ORDER';

// ------------------------------------
// Actions
// ------------------------------------

export const updateSearchString = searchString => ({
  type: UPDATE_SEARCH_STRING,
  payload: searchString
});

export const getSearchResults = searchString => {

  if (searchString.length == 0) {
    return {
      type: SET_SEARCH_RESULTS,
      payload: {
        message: 'Empty search string.'
      }
    };
  }

  return (dispatch, getState) => {
    fetch('https://api.github.com/search/repositories?q=' + searchString).then(
        response => {
          response.json().then(data => {
            console.log('data');
            console.log(data);
            dispatch({
              type: SET_SEARCH_RESULTS,
              payload: data
            });
          });
        },
        error => {
          console.log(error);
        }
    );
  }
}

export const changeSortBy = sortBy => ({
  type: CHANGE_SORT_BY,
  payload: sortBy
})

export const changeOrder = orderBy => ({
  type: CHANGE_ORDER,
  payload: orderBy
});

export const actions = {
  changeSortBy,
  changeOrder,
  updateSearchString,
  getSearchResults
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  UPDATE_SEARCH_STRING: (state, action) => {
    return Object.assign({}, state, {
      searchString: action.payload
    });;
  },

  SET_SEARCH_RESULTS: (state, action) => {
    console.log(SET_SEARCH_RESULTS);
    return Object.assign({}, state, {
      searchResults: action.payload
    });
  },

  CHANGE_SORT_BY: (state, action) => {
    return Object.assign({}, state, {
      sortBy: action.payload
    });
  },

  CHANGE_ORDER: (state, action) => {
    return Object.assign({}, state, {
      order: action.payload
    });
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  order: 'Ascending',
  sortBy: 'Relevance',
  searchString: '',
  searchResults: undefined,
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state;
}
