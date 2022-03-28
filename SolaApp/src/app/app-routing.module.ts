import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatPage } from './chat/chat.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { ConnectionsPage } from './connections/connections.page';

const routes: Routes = [

  {path: 'tabs', component: AppComponent},

  {path: 'chat', component: ChatPage},
  {path: 'connections', component: ConnectionsPage},

  {path: 'tab1', component: Tab1Page},
  {path: 'tab2', component: Tab2Page},
  {path: 'tab3', component: Tab3Page},

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then( m => m.ConnectionsPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
