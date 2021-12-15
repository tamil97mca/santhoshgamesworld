import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navpath: any = [];
  constructor() 
  { 
    this.navpath = [
      {routerLink: '/home', routerLinkActive: 'active', DisplayName: 'Home', icon: 'fas fa-home'},
      {routerLink: '/about', routerLinkActive: 'active', DisplayName: 'About Us', icon: 'fas fa-info-circle'},
      {routerLink: '/contact', routerLinkActive: 'active', DisplayName: 'Contact Us', icon: 'fas fa-globe'},
    ]
  }

  ngOnInit() {
  }

  login()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })  }
}
