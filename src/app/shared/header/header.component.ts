import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthgardService } from 'src/app/login/authgard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  enableBackIcon: boolean;
  constructor(
    private authgardService: AuthgardService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.enableBackIcon = false;

    if (this.activatedRoute.snapshot.routeConfig.path === 'view') {
      this.enableBackIcon = true;
    }
  }
  backToHome(): void {
    this.router.navigate(['/form/add']);
  }
  logOut(): void {
    this.authgardService.Logout();
    this.router.navigate(['']);
  }
}
