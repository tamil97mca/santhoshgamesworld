import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  url = '../../assets/productDetail.json';
  constructor(private http : HttpClient) 
  {
    this.http.get(this.url).subscribe((result => {
      console.log("result", result);
    }))
  }

  ngOnInit() {
  }

}
