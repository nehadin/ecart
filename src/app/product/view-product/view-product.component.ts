import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  prodid: any
  prodata:any

  constructor(private ar: ActivatedRoute, private ps:ProductserviceService) {

  }

  ngOnInit(): void {
    // this params is an asynchronous method, because params is getting data from URL, and this URL is currently working in port 4200 whereas the actual data/path is from port 3000
    this.ar.params.subscribe((data:any) => {
      this.prodid = data["id"];
      this.ps.viewproduct(this.prodid).subscribe((item:any)=>{
        // console.log(item);
        this.prodata=item
      })
      
    })
  }
}
