import { Food } from './../components/model/Food';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './../components/model/Cart';
import { Injectable } from '@angular/core';
import { CartItem } from '../components/model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartToLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(i => i.food.id === food.id)
    if (cartItem)
      return
    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(i => i.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(fooId: string, quantity: number) {
    let cartItem = this.cart.items.find(i => i.food.id === fooId);
    if (!cartItem)
      return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObsetvable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartToLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
