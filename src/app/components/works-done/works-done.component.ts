import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from '../work/work.component';
import { WorkModel } from '../../models/work.model';
//import { WORKS } from '../../../../public/files/mock-works';
import { WorkListService } from '../../services/work-list.service';

@Component({
  selector: 'app-works-done',
  standalone: true, // Es un Standalone Component
  imports: [CommonModule, WorkComponent], // Ahora sí importa WorkComponent
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.css']
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = 'Trabajos';

  workList: WorkModel[] = [];

  constructor(private WorkListServicet: WorkListService) { }
  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void{
    this.WorkListServicet.getWorks().subscribe((workList) => {this.workList = workList});
  }
    
}
