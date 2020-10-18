import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList;
  total: number = 0;
  searchText: string = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedCart.subscribe(data => {
      this.cartList = data;
      var total = this.cartList.reduce(function (a, b) { return { price: a.price + b.price }; });
      this.total = total.price;
    });
  }

  removeFromCart(removeItem) {
    this.cartList = this.cartList.filter(item => item.id !== removeItem.id);
    var total = this.cartList.reduce(function (a, b) { return { price: a.price + b.price }; })
    this.total = total.price;
  }
}

