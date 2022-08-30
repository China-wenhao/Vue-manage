export default {
    state:{
        iscollapse:false
    },
    mutations:{
        collapseMenu(state){
            // console.log(state);
            state.iscollapse=!state.iscollapse
        }
    }
}