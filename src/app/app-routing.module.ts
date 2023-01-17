import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './componentes/producto/producto.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'tienda',
    component: TiendaComponent
  },
  {
    path: 'producto/:id',
    component: ProductoComponent
  },
  {
    path: 'linterna',
    loadChildren: () => import('./linterna/linterna.module').then( m => m.LinternaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
