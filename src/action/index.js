import { type } from "@testing-library/user-event/dist/type"

const increment=()=>{
    return {type:"inc"}
}
const decrement=()=>{
    return {type:"dec"}
}
export {increment,decrement}