import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';
// import { TabsPage } from './app.component';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [

  {path: 'tab1', component: Tab1Page},

  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
