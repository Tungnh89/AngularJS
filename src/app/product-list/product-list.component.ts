import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
// import { Data } from '../MockData';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // @Input() products: Product[];
  // @Output() productId = new EventEmitter<Number>();
  constructor(private productService: ProductService) { 
    // Ở đoạn trên ta khởi tạo productService: ProductService, 
    // vế trái muốn đặt tên gì cũng đc vì nó là tên thuộc tính.

    // console.log('constructor')

  }

  ngOnInit(): void {
    // console.log('ngOnInit')
    // this.products = this.productService.getProduct(); // getProduct lấy ở bên productService để list ra danh sách SP
    this.getProduct();
  }

  selected: Product;
  products: Product[];

  showDetail(prodId:any) {
    console.log(prodId)
  }

  onHandleRemove(id:number) {
    this.productService.removeProduct(id).subscribe(response => {
      alert('Bạn có muốn xóa không ?');
      this.products = this.products.filter(data => data.id != response.id)
    })
  }

  onHandleDetail(prod:Product) {
    this.selected = prod;
    // this.status = !this.status
  }

  getProduct() {
    this.productService.getProduct().subscribe(data => {
      this.products = data
    })
  }
}
