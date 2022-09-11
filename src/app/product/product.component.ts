import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public productList :any;
  constructor(private service:ApiserviceService,private cartService:CartService ) { }

  ngOnInit(): void {

this.service.getProduct().subscribe(
  res=>{
    this.productList=res;



    this.productList.forEach((a:any) => {
      
      Object.assign(a,{quantity:1,total:a.price});
    });
    
  }
)


  }
  addtocart(item:any){
  this.cartService.addtoCart(item);
  }

}
