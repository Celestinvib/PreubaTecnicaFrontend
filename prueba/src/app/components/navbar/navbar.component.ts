import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  role:string | undefined;

  token : string | null | undefined;

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.getUser();

    // this.token = this.tokenStorage.getToken();

    //   if (this.token != null)
    //   {
    //     this.role = this.tokenStorage.getRole()?.toString();
    //     console.log(this.role);
    //   }
  }

  signOut()  {
    this.tokenStorageService.signOut()
    this.isLoggedIn = false;
    this.reloadPage();
    this.router.navigate(['/login']);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
