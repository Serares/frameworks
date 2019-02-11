import * as actionTypes from './actionTypes';


export const saveResult = (res) =>{
    const resultModif = res + 2; 
    return {
        type : actionTypes.RESULT,
        result: resultModif
    }

}

export const result = (res) => {

    return (dispatch, getState) =>{
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter;
            dispatch(saveResult(res))
        },2000)
    }

}

export const del = (id) => {
    return {
        type : actionTypes.DEL,
        resultElId: id
    }
}