import { Injectable } from '@angular/core';
import { WORKS } from '../../../public/files/mock-works';
import { WorkModel } from '../models/work.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {
  works: WorkModel[] = WORKS;

  constructor() { }

  getWorks():Observable<WorkModel[]>{
    const works = of (WORKS);
    return works;
  }
}
