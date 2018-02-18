//This is a way to visualize the origin state in our store
import Immutable from 'immutable';
let initialState= Immutable.Map({
  questions:{},
  parts:{},
  error:{message:''}
});
console.log('INITIAL STATE: ',initialState);
export default initialState;
