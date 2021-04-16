


let a = [1,2,3,4,6,7,1,2,3]

// console.log(a.reduce((a,b)=>a+b))

const init = [12,51]

function reducer (state, action){
    switch(action.type){
        case "Authentication":
            return {...state, ...action.payload}
        case "hungry":
            case "thirsty":
            return {...state, 'eat a snack'}
        
        default: return {...state}

    }
}

const [state, dispatch] = useReducer(reducer, init)

dispatch({type:"Authentication", payload:'girls'})
