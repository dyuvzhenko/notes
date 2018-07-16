import {
  GET_NOTES_LIST_START,
  GET_NOTES_LIST_END
} from './_constants'

export const getNotesList = () =>
  (dispatch) => {
    dispatch({ type: GET_NOTES_LIST_START })
    // let payload = [{title: '', color: ''}]
    let all = []
    let recent = [] // 2 недавних
    let error = null  // на валидации будут битые данные. В целом, по цвету, по временной метке, ...
    // fs.readdir...
    dispatch({ type: GET_NOTES_LIST_END, all, recent, error })
  }
