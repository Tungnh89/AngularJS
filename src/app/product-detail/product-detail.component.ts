import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // @Input() data: Product;
  dataset: Product;
  constructor(private ActivatedRouter: ActivatedRoute, private productService: ProductService) { 
    this.ActivatedRouter.params.subscribe(param => {
      this.productService.read(param.id).subscribe(data => {
        this.dataset = data
      })
    })
  }

  ngOnInit(): void {
  }

}
