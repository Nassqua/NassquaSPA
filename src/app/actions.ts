import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { NassquaState } from './models/nassquastate.model';
import { IAppState } from './store';


@Injectable()
export class NassquaActions{

  constructor(private ngRedux : NgRedux<IAppState>){}

  static  SET_EMAIL_USER_LOGGED = 'SET_EMAIL_USER_LOGGED';
  static  SET_NAME_USER = 'SET_NAME_USER';

  addEmailUserLogged(emailUserLogged){
    this.ngRedux.dispatch({ type : NassquaActions.SET_EMAIL_USER_LOGGED , message : emailUserLogged });
  }

  addNameUser(nameUser){
    this.ngRedux.dispatch({ type : NassquaActions.SET_NAME_USER , message : nameUser });
  }

}
