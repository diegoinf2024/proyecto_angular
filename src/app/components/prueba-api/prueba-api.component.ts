import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/api-rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  templateUrl: './prueba-api.component.html',
  imports: [CommonModule],
  styleUrls: ['./prueba-api.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}
