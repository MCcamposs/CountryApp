import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]

})
export class CountryPageComponent implements OnInit{

  // necesito dos cosas, el url C
  // pdoer navegar

  constructor( private activatedRoute: ActivatedRoute ){

  }



  // params por si es ub observable, imprimimos en consola los parámetros
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params)
    } )
  }


}
