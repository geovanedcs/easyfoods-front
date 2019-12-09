import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.isLogged()) {
      this.userService.logout();
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['']);
    }
  }

}
