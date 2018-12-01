const INITIAL_STATE = {
     inSignedIn: null
}


export default (state = INITIAL_STATE,action) => {
   switch(action.type){
       case 'SIGN_IN':
       return {...state, inSignedIn:true}
       case 'SIGN_OUT':
       return {...state, inSignedIn:false}
       default:
       return state;
   }
}