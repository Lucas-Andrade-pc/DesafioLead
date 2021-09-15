import * as type from '../types' 

export function getMovie(){
    return {
        type: type.GET_REQUEST
        
    }
}

export function getSearchMovie(){
    return {
        type: type.GET_SEARCH_REQUEST
        
    }
}

