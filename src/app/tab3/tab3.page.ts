import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {
  public progress = 0;
  constructor(private alertController: AlertController) {
    const interval = setInterval(() => {
      this.progress += 0.01;
      if (this.progress >= 0.9) {
        this.progress = 0.9;
        clearInterval(interval);
      }
    }, 50);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Puedes contactarlo a través de:',
      subHeader: 'Celular: 0987654321\nCorreo:anthony.minga@epn.edu.ec',
      message: 'Cuantame lo que necesitas y te ayudaré en lo que pueda.',
      buttons: ['Action'],
    });

    await alert.present();
  }
}