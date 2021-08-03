import { Component } from '@angular/core';
import { Data } from './MockData';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  // products = Data;
  // onHandleAdd(product:Product) {
  //   // console.log('xem log ra gì : ',product)
    
  // }

  // onHandleRemoves(id:any) {
  //   console.log(id);
  // }
}
