import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreateComponent } from './create/create.component';
import { ImagecomComponent } from './imagecom/imagecom.component';
import { ProductComponent } from './product/product.component';
import { ReadComponent } from './read/read.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'upload',component:ImagecomComponent},
  {path:'signIn',component:SignupComponent},
  {path:'pro',component:ProductComponent},
{path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
