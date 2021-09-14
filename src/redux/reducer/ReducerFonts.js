
const INITIAL_STATE = {count:15}

export function ReducerFonts(state = INITIAL_STATE, action){
    switch(action.type){
        case 'UP':
            while(state.count < 35){
                return {count: state.count + 10}
            }
        case 'DOWN':
            while(state.count > 15){
                return {count: state.count - 10}
            }
        default:
            return state
    }
}

