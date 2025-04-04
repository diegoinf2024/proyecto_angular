import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  name: string='Mi banner';
  urlImg: string='/img/cat3.jpg';
  photo: string = `url('${this.urlImg}')`;
}
