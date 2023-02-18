import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private ps:ProductserviceService,private router:Router) { }

  addProductForm = this.fb.group({
    id: [''],
    productBrand: [''],
    categoryId: [''],
    categoryName: [''],
    productName: [''],
    mrpPrice:[''],
    price: [''],
    isAvailable: [''],
    productImage: [''],
    rating: [''],
    reviews: [''],
    discount: ['']
    })


ngOnInit(): void { }
  addNewProduct(){
    let newProductData={
      id: this.addProductForm.value.id,
      productBrand: this.addProductForm.value.productBrand,
      categoryId: this.addProductForm.value.categoryId,
      categoryName: this.addProductForm.value.categoryName,
      productName: this.addProductForm.value.productName,
      mrpPrice: this.addProductForm.value.mrpPrice,
      price: this.addProductForm.value.price,
      isAvailable: this.addProductForm.value.isAvailable,
      productImage: this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      reviews: this.addProductForm.value.reviews,
      discount: this.addProductForm.value.discount
    }
    this.ps.addProduct(newProductData).subscribe((item:any)=>{
      alert('product added')
      this.router.navigateByUrl('/product')
    })
  }

  

}
