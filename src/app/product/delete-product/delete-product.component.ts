import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id:any

  constructor(private ps:ProductserviceService, private ar:ActivatedRoute, private route:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data["id"]
    })
    this.ps.deleteProduct(this.id).subscribe((item:any)=>{
      alert('Product Deleted')
      this.route.navigateByUrl("product")
    })
  }
}
