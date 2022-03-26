import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pageTransition = (baseEl: any, opts?: any) => {
    console.log('opts.enteringEl1:' + opts.enteringEl); //Entering element - new page
    console.log('opts.leavingEl1:' + opts.leavingEl); //Leaving element - current page
    var anim = this.animationCtrl
      .create()
      .addElement(opts.leavingEL)
      .duration(200)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0');
    return anim;
  };
  constructor(private animationCtrl: AnimationController) {}
}

