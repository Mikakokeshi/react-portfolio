const addStepReducer = (state = 1, action) => {
    // Actionsのtypeによってstateをどう変更するのか決める
    switch (action.type){
        case 'ADD_STEP':
            return state + 1
        default:
            return state
    }
}

export default addStepReducer