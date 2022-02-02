import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressources-card',
  templateUrl: './ressources-card.component.html',
  styleUrls: ['./ressources-card.component.css']
})
export class RessourcesCardComponent implements OnInit{
  title!: string;
  imageUrl!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit(){
      this.title = 'First ressources';
      this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
      this.description = 'Création de ma première ressource !';
      this.createdDate = new Date();
      this.snaps = 13;
  }

  onAddSnap() {
    this.snaps++;
  }

}
