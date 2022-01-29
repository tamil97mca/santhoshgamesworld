import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CredentialService } from '../credential.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


export interface DialogData {
  email: any;
  password: any;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean = true;
  email: any;
  password: any;

  navpath: any = [];
  constructor(private http : HttpClient, public dialog: MatDialog, private credentialService : CredentialService,
    private router: Router)
  {
    this.navpath = [
      {routerLink: '/home', routerLinkActive: 'active', DisplayName: 'Home', icon: 'fas fa-home'},
      {routerLink: '/about', routerLinkActive: 'active', DisplayName: 'About Us', icon: 'fas fa-info-circle'},
      {routerLink: '/contact', routerLinkActive: 'active', DisplayName: 'Contact Us', icon: 'fas fa-globe'},
      {routerLink: '/payment', routerLinkActive: 'active', DisplayName: 'Payment', icon: 'fas fa-rupee-sign'},
      {routerLink: '/invoice', routerLinkActive: 'active', DisplayName: 'Invoice', icon: 'fas fa-receipt'},
      {routerLink: '/userdetails', routerLinkActive: 'active', DisplayName: 'User Details', icon: 'fas fa-users'},

    ]
  }

  onActivate()
  {
    window.scroll(0,0);
  }

  changeTheme()
  {
    this.isDarkTheme != this.isDarkTheme;
  }

  ngOnInit() {

  }

  async openDialog(): Promise<void> {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: {email: this.email,password: this.password},
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('The dialog was closed');
      // console.log('email', result);
      this.email = result.email;
      this.password = result.password;
      // this.http.post("https://santhoshgames1234-default-rtdb.asia-southeast1.firebasedatabase.app/loginCredential.json", result).subscribe((res: any) => {
      //   console.log("firsbase response", res);
      //   this.http.get("https://santhoshgames1234-default-rtdb.asia-southeast1.firebasedatabase.app/loginCredential.json").subscribe((getValue: any) => {
      //     console.log("get user details", getValue);
      //   })
      // });
      this.credentialService.adminCredential(result).then(async (res: any) => {
        console.log(res);
        if(res['status'] == 'success' && res['records']['docs'].length > 0 )
        {
          if(this.email.toLowerCase() === res['records']['docs'][0]['email'] && this.password === res['records']['docs'][0]['password'])
          {
            console.log(res['records']['docs']);
            this.email = '';
            this.password = '';
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            await this.router.navigate(["/adminpanel"]);
          }
        }
        else
          {
            this.email = '';
            this.password = '';
            await Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Login failed',
              showConfirmButton: false,
              timer: 1500,
            });
          }
      })
    });
  }
}





//  credential material popup start below

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
