import { NassquaActions} from './actions';
import { NassquaState } from './models/nassquastate.model';

export interface IAppState{

  emailUserLogged : string;
  nameUser : string;

}

export function rootReducer(state : IAppState , action) : IAppState {

  const newState = Object.assign({}, state);

  switch(action.type){

    case  NassquaActions.SET_EMAIL_USER_LOGGED : {
      newState.emailUserLogged = action.message;
      return newState;
    }

    case NassquaActions.SET_NAME_USER : {
      newState.nameUser = action.message;
      return newState;
    }

  }

  return state;
}

export const INITIAL_STATE : IAppState = {
  emailUserLogged : '' ,
  nameUser : ''
}
