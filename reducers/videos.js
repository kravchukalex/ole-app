function videos(
  state = {favourites: [], suggestionList: {}, categoryList: {}},
  action,
) {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST': {
      return {...state, suggestionList: action.payload.suggestionList};
    }
    case 'SET_CATEGORY_LIST': {
      return {...state, categoryList: action.payload.categoryList};
    }
    case 'SET_SELECTED_VIDEO': {
      return {...state, selectedVideo: action.payload.video};
    }
    case 'SET_SELECTED_CATEGORY': {
      return {...state, selectedCategory: action.payload.category};
    }
    case 'SET_SELECTED_CATEGORY_DETAILS': {
      return {...state, selectedCategoryDetails: action.payload.details};
    }
    case 'SET_FAVOURITES': {
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }
    default:
      return state;
  }
}

export default videos;
