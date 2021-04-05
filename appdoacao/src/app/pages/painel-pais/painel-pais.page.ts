
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-pais',
  templateUrl: './painel-pais.page.html',
  styleUrls: ['./painel-pais.page.scss'],
})
export class PainelPaisPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.navigateBack('home');
  }

}
