import { combineReducers } from "redux";
import state from "./state";

const user = (state = null) => state
const listings = (state = []) => state

export default combineReducers({ user, listings});