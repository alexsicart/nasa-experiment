// const apiClient = store => next => action => {
//   fetch(url)
//   .then()
//   .catch()
//
//   // _REQUEST
//   // _SUCCESS
//   // _FAILURE
// }

// export default logger;

const logger = store => next => action => {
  console.log('Previous State', store.getState());
  console.log('Action', action)
  next(action);
  console.log('Next State', store.getState());
  console.log('=====================');

  if(action.type !== 'MDLWR CREATED ACTION')
    store.dispatch({type: 'MDLWR CREATED ACTION'})
}

export default logger;
