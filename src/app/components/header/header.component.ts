import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-header',
  imports: [ NavBarComponent, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
