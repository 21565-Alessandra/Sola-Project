import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  activeTab: string = 'chats'
  constructor() { }

  segmentChange(e){
    this.activeTab = e.target.value;
  }

  ngOnInit() {
  }

}
