import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title: string = 'Category';

  listOfCategory: any = [];

  constructor() 
  { 
    this.listOfCategory = [
      {categoryName: 'Latest Games', view: 'view'},
      {categoryName: 'Most popular', view: 'view'},
      {categoryName: 'Best Sellings', view: 'view'},
      {categoryName: 'Pc Games', view: 'view'},
      {categoryName: 'Ps2 Games', view: 'view'},
      {categoryName: 'Ps3 Games', view: 'view'},
      {categoryName: 'Ps4 Games', view: 'view'},
      {categoryName: 'Ps5 Games', view: 'view'},
      {categoryName: 'XBox Games', view: 'view'},
      {categoryName: 'Game Accessories', view: 'view'},
    ];
  }

  ngOnInit() {
  }

}
