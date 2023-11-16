//A-service-httpclient

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';

import { Observable, catchError, of,} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {
  //API
  private apiURL:string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient){ } // tenemos que importar el httpclient, en appModule

  searchCapital( term: string ):Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ term }`
    return this.http.get<Country[]>(url).pipe(
     catchError( error => of([])) //si sucede un error, lo atrapa y regresa un nuevo onservable array vacio
    );
  }

  searchRegion( term: string ):Observable<Country[]> {
    const url = `${ this.apiURL }/region/${ term }`
    return this.http.get<Country[]>(url).pipe(
     catchError( error => of([])) //si sucede un error, lo atrapa y regresa un nuevo onservable array vacio
    );
  }

  searchCountry( term: string ):Observable<Country[]> {
    const url = `${ this.apiURL }/name/${ term }`
    return this.http.get<Country[]>(url).pipe(
     catchError( error => of([])) //si sucede un error, lo atrapa y regresa un nuevo onservable array vacio
    );
  }


}
