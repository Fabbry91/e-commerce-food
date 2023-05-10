import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];

  constructor(foodServ: FoodService) {
    this.tags = foodServ.getAllTags();
  }

  ngOnInit(): void {
  }

}
