import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'admin@admin.com' && this.password === 'admin'){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Welcome!', 'success');
    }
    else{
      this.presentToast('ERR, user or password invalid', 'danger');
    }
  }

  async presentToast(tmessage: string, alertcolor: string) {
    const toast = await this.toastController.create({
      message: tmessage,
      color: alertcolor,
      duration: 2000
    });
    toast.present();
  }

}
