const initailState = {
    clips: []
}
const reducer = (state = initailState, action) => {
    switch (action.type) {
        case 'ADD_CLIP':
            return {
                ...state,
                clips: [...state.clips, action.clip]
            }
        case 'DELETE_CLIP':
            return {
                ...state,
                //この条件に当てはまった以外のものを配列にして返す
                clips: state.clips.filter(clip => clip.url !== action.clip.url)
            }
        default:
            return state
    }

}

export default reducer;