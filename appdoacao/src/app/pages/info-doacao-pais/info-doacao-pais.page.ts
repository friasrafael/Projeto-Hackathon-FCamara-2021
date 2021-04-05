import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-doacao-pais',
  templateUrl: './info-doacao-pais.page.html',
  styleUrls: ['./info-doacao-pais.page.scss'],
})
export class InfoDoacaoPaisPage implements OnInit {

  constructor(private navCtrl : NavController,public alertCtrl : AlertController) { }

  ngOnInit() {
  }

voltar() {
  this.navCtrl.navigateBack('painel-pais');
}

async aceitar() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Você aceitou a doação!',
    subHeader: '',
    message: 'Fique atento a data e o horário do encontro.',
    buttons: [
      {
          text: 'OK',
          handler: () => {
              alert.dismiss();
              return false;
          }
      }
  ]
});

await alert.present();
await alert.onDidDismiss().then(() => {
  this.navCtrl.navigateRoot(['home']);
});
}

async cancelar() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Você recusou a doação!',
    subHeader: '',
    message: 'Fique atento as doações recebidas para receber novas doações.',
    buttons: [
      {
          text: 'OK',
          handler: () => {
              alert.dismiss();
              return false;
          }
      }
  ]
});

await alert.present();
await alert.onDidDismiss().then(() => {
  this.navCtrl.navigateRoot(['home']);
});
}

}
