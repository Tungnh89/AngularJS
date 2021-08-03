import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product ;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.read();
  }

  read() {
    this.activateRoute.params.subscribe(param => {
      // console.log(param)
      this.productService.read(param.id).subscribe(data => {
        this.product = data
      })
    })
  }

  onEditProduct() {
    this.productService.editProduct(this.product).subscribe(data => {
      alert('bạn đã cập nhật thành công');
      this.router.navigateByUrl('/listProduct')
    })
  }

}
