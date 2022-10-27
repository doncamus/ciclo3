import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';   //esto se agrega por agregar bostrap
import  { FooterComponent} from './footer/footer.component';    //esto se agrega por agregar bostrap
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  {
    path: 'header',
     component: HeaderComponent
  },   // esto para diferenciar un objeto del otro
  {
    path: 'footer', 
    component: FooterComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }