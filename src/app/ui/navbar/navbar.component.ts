import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../../auth.service';
import { AuthGuardService } from '../../auth-guard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private token: string = localStorage.getItem('id_token');
  private tokenPayload: any = jwt_decode(this.token) || null;
  public userName = this.tokenPayload.userName;
  constructor(private auth: AuthService,
    public authGuard: AuthGuardService,
    private router: Router) { }

  ngOnInit() {
  }
  logOut(): void {
    this.auth.logout();
    this.router.navigate(['signin']);
  }
}

