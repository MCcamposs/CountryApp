import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]

})
export class CountryPageComponent implements OnInit{

  public country?: Country;
  // necesito dos cosas, el url C
  // pdoer navegar a la personal y eso nos lo ofrece router de angualr

  //servicias a importar Activated Router
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    ){

  }


  // params es un observable, imprimimos en consola los parámetros
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap (({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
    )
    .subscribe( ( country ) => {

      if ( !country ){
        return this.router.navigateByUrl('');
      }
      return this.country = country;

      })
    };
  }





// Suscribirse a los cambios en los parámetros de la ruta
    //Este código se suscribe a los cambios en los parámetros de la ruta.
    // Cuando hay cambios en los parámetros de la ruta, la función de
    //devolución de llamada proporcionada se ejecuta.
