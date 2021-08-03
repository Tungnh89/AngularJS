import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  // @Output() productEvent = new EventEmitter<Product>();

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onHandleAdd() {
    // this.productEvent.emit(this.product)
    this.productService.addProduct(this.product).subscribe(data => {
      alert('bạn đã thêm thành công');
      this.router.navigateByUrl('/listProduct')
    })
  }



}
