import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomname',
  templateUrl: './randomname.component.html',
  styleUrls: ['./randomname.component.css']
})
export class RandomNameComponent implements OnInit {

  constructor() { }

 addToNames(){
  console.log("Add to list of Names")
} 

  ngOnInit() {
    
  }

}
