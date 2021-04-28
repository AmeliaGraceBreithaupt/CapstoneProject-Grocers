import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public router: Router, public user: UsersService) { }

  ngOnInit(): void {
  }
  storeUser(userRef: any): void {
   console.log(userRef);
   this.user.storeUserDetailsInfo(userRef);
   this.router.navigate(['user-index']);  // MAY WANT TO CHANGE LATER
 }
}
