import { Component , Input } from '@angular/core';
import { Experiences } from '../../models/experiences.model';

@Component({
  selector : 'experiences-component',
  templateUrl : './experiences.component.html',
  styleUrls : [ './experiences.component.css' ]
})

export class ExperiencesComponent{
  @Input()
  isPath = true;

  iconVideo = 'assets/videos/infobanner5.mp4';
  videoHeight = '20vh';
  titleFontSize = '50px';
  title = 'Experiences';
  titleMarginTop = '70px';

  public _Experiences: Experiences[] = [
      { 'ExperiencesId' : 1  , 'Name' : 'Raquira salvaje' ,'Description' : 'Experience1'},
      { 'ExperiencesId' : 2  , 'Name' : 'Chivor extremo' , 'Description' : 'Experience2'},
      { 'ExperiencesId' : 3  , 'Name' : 'Camina Tinjaca' , 'Description' : 'Experience3'},
      { 'ExperiencesId' : 4  , 'Name' : 'Ollerias caminata' , 'Description' : 'Experience4'},
      { 'ExperiencesId' : 5  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5'},
      { 'ExperiencesId' : 6  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6'},
      { 'ExperiencesId' : 7  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7'},
      { 'ExperiencesId' : 8  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8'}
  ];

}
