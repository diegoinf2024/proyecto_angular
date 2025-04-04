import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true, // Es un Standalone Component
  imports: [CommonModule], // Se debe importar CommonModule
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  @Input() workData: any; // Aseguramos que existe este Input
}
