import { Injectable } from '@angular/core';
import { Food } from '../components/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../components/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(f => f.tags?.includes(tag));
  }

  getFoodByID(foodId: string): Food {
    return this.getAll().find(f => f.id === foodId) ?? new Food();
  }
}
