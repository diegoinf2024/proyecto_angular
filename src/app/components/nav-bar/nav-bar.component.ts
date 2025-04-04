import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true, // IMPORTANTE para Standalone Components
  imports: [CommonModule], // Se necesita para usar *ngIf
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loginShow: boolean = true; // Valor inicial
}
