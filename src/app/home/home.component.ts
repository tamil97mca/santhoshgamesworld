import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() 
  { 
  }

  ngOnInit() {
  //   Swal.fire({
  //     title: 'Welcome to Santhosh Games World',
  //     showConfirmButton: false,
  //     width: 1200,
  //     padding: '-1em',
  //     background: '#fff url("https://media.giphy.com/media/67ThVTcBxs0DQkDgTZ/giphy.gif")',
  //     backdrop: `
  //     rgba(0,0,123,0.4)
  //     url("https://media.giphy.com/media/67ThVTcBxs0DQkDgTZ/giphy.gif")
  //   center
  //   no-repeat
  // `,
  //     timer: 1500,

  //   })    
  }

}
