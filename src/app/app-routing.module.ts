// MODULO INDEPENDIENTE
//especializado en la navegación de mi pagina



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contac-page/contact.component';


const routes: Routes = [
 /*  {
    path: '',
    component: HomePageComponent //cuando tengamos home llama a ese componente
  }, */
  {
    path: 'about',
    component: AboutPageComponent,  //cuando tengamos home llama a ese componente
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( modulo => modulo.CountriesModule) //cargamos unos hijos
                      //path donde se encuentra lo que quiero cargar/modulo principal,
                      //que ya tiene importado el routingModule donde tengo el path
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  },
]


@NgModule({
  imports:[
    RouterModule.forRoot(routes), //forRoot:
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
