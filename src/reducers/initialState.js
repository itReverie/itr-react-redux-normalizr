//This is a way to visualize the origin state in our store
import { fromJS } from 'immutable';

const initialState= fromJS({
  questions:[],
  parts:{}
});
export default initialState;
