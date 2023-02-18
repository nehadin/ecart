import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pid: any
  pdata: any


  constructor(private ar: ActivatedRoute, private ps: ProductserviceService, private route:Router) { }

  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })

    this.ps.viewproduct(this.pid).subscribe((item: any) => {
      this.pdata = item
    })

  }

  updateProduct(form: any) {
    let updateData = {
      id: form.value.id,
      productBrand: form.value.productBrand,
      categoryId: form.value.categoryId,
      categoryName: form.value.categoryName,
      productName: form.value.productName,
      mrpPrice:form.value.mrpPrice,
      price: form.value.price,
      isAvailable: form.value.isAvailable,
      productImage: form.value.productImage,
      rating: form.value.rating,
      reviews: form.value.reviews,
      discount: form.value.discount
    }
    this.ps.editProduct(this.pid,this.pdata).subscribe((data:any)=>{
      alert("Product details Updated")
      this.route.navigateByUrl("product")
      
      
      
    })
  }
}
