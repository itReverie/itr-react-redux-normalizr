//This is a way to visualize the origin state in our store
import { fromJS } from 'immutable';

const initialState= fromJS({
  questions:{},
  parts:{}
});
console.log('REDUCER initial state: ',initialState);
export default initialState;
