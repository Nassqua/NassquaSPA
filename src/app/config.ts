import { Injectable } from '@angular/core';

@Injectable()
export class Config{

  //static apiProvider : string = 'http://localhost:3000/api/'; // Localhost
  static apiProvider : string = 'https://nassqua-api-node.azurewebsites.net/api/'; // Azure

  contructor(){}

}
