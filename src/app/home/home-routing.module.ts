import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../componentes/producto/producto.component';
import { TiendaComponent } from '../componentes/tienda/tienda.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tienda',
    component:TiendaComponent
  },
  {
    path: 'producto/:id',
    component:ProductoComponent
  },
  {
    path: '',
    component: HomePage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
