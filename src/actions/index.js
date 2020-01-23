export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = feature =>{
    return{
        type: BUY_ITEM,
        payload: feature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = feature =>{
        return{
            type: REMOVE_FEATURE,
            payload: feature
        }
    }

    export const UPDATE_TOTAL = 'UPDATE_TOTAL';

    export const updateTotal = (total) => {
        return {
            type: UPDATE_TOTAL,
            payload: total
        }
    } 

