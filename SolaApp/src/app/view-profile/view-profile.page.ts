import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  isSeeMore: boolean = false;
  hobbies = ['Music', 'Sports', 'Photography', 'Cooking'];
  constructor() { }

  ngOnInit() {
  }

  getColor(i){
    let colors =["#FFBD97", "#88D2EF", "#CBAFED", "#FFFF67"];
    return colors[i];
  }

}
