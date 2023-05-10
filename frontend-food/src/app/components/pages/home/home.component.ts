import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../../model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodServ: FoodService, activaredRoute: ActivatedRoute) {
    activaredRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodServ.getAllFoodBySearchTerm(params.searchTerm);
        else if(params.tag)
        this.foods= this.foodServ.getAllFoodByTag(params.tag)
      else
        this.foods = foodServ.getAll()
    })
  }

  ngOnInit(): void {
  }

}
