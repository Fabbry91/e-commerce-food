import { FoodService } from './../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from './../../model/Food';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(activatedRoute: ActivatedRoute, foodServ: FoodService, private cartServ: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food = foodServ.getFoodByID(params.id)
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartServ.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
