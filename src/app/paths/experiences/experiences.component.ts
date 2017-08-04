import { Component , Input } from '@angular/core';
import { Experiences } from '../../models/experiences.model';
import { NassquaAPIServices } from '../../services/nassqua.services';


@Component({
  selector : 'experiences-component',
  templateUrl : './experiences.component.html',
  styleUrls : [ './experiences.component.css' ],
  providers : [ NassquaAPIServices ]
})

export class ExperiencesComponent{
  @Input()
  isPath = true;

  iconVideo = 'assets/videos/infobanner5.mp4';
  videoHeight = '20vh';
  titleFontSize = '50px';
  title = 'Experiences';
  titleMarginTop = '70px';
  backImage = "url('assets/images/raq1.jpg')";
  backImageHeight = '240px';
  backImageWidth = '100%';
  p: number = 1;

  _Experiences : Experiences[];

  /*

  public _Experiences: Experiences[] = [
      { 'ExperiencesId' : 1  , 'Name' : 'Raquira salvaje' ,'Description' : 'Experience1' , 'Image' : 'assets/images/raq1.jpg' , 'Price' : 250},
      { 'ExperiencesId' : 2  , 'Name' : 'Chivor extremo' , 'Description' : 'Experience2' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 3  , 'Name' : 'Camina Tinjaca' , 'Description' : 'Experience3' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 4  , 'Name' : 'Ollerias caminata' , 'Description' : 'Experience4' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 5  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 6  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 7  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 8  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 9  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 10  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 11  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 12  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 13  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 14  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 15 , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 16  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 17  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 18  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 19  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 20  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 21  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 22  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 23  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 24  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 25  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 26  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 27  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 28  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 29  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 30  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 31  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 32  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 33  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 34  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 35 , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 36  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 37  , 'Name' : 'Salto del Indio' , 'Description' : 'Experience5' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 38  , 'Name' : 'Raquira agronomica' , 'Description' : 'Experience6' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 39  , 'Name' : 'San Miguelito' , 'Description' : 'Experience7' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250},
      { 'ExperiencesId' : 40  , 'Name' : 'Alto Ricaurte' , 'Description' : 'Experience8' , 'Image' : 'assets/images/raq1.jpg', 'Price' : 250}

  ];
  */
º
  constructor( private nassquaAPIServices : NassquaAPIServices ){

    this.nassquaAPIServices.getExperiences()
      .subscribe(result => {

        console.log(result);

        if(result)
        {
          this._Experiences = result.experiences;

        }
        else{

        }

      } , e => {

      });

  }

}
