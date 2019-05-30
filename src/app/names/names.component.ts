import { Component, OnInit } from '@angular/core';
import { NameTile } from '../models/name';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor() { }

  tiles: NameTile[] = [
    {
      text: "Venus Kario",
      id:1
    },
    {
      text: "Juice ",
      id:2
    },
    {
      text: "Martin Awdisho",
      id:3
    },
    {
      text: "Alvin Tito",
      id:4
    },
    {
      text: "Youssep Chimon",
      id:5
    },
    {
      text: "Labak Labak",
      id:6
    },
  ]

  //random function that will choose from above names

  randomName: string;

  pickRandom(){

    this.randomName = this.tiles[Math.floor(Math.random()*this.tiles.length)].text;


  }


  ngOnInit() {
    
  }

}