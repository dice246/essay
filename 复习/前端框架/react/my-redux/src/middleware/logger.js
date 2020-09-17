export default function (midApi) {
  console.log('midApi: ', midApi)
  return dispatch => action => {
    console.log(action.type + '执行了')
    return dispatch(action)
  }
}
