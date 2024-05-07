import { configureStore } from "@reduxjs/toolkit";
import counter from "../reducers";
const sto=configureStore({
    reducer:{count:counter}
})
export default sto