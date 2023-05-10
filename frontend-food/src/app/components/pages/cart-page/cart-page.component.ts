import { CartItem } from './../../model/CartItem';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private catServ: CartService) {
    this.catServ.getCartObsetvable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.catServ.removeFromCart(cartItem.food.id);
  }

}
