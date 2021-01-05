import { Component, OnInit } from '@angular/core';

interface Pet {
  //add name and breed
  name: string;
  breed: string;
}

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
//properties go here
  pet : Pet = {
    name: "Sputnik",
    breed: "Lazy kitty"
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}
