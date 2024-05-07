const counter=(st=0,act)=>{
    if(act.type==="inc"){
        return st+1
    }
    else if(act.type==="dec"){
        return st-1
    }
    else{
        return st
    }

}
export default counter