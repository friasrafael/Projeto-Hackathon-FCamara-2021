import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoModel } from 'src/app/pages/models/aluno.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take } from 'rxjs/operators';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ResponsavelModel } from 'src/app/pages/models/responsavel.model';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})

export class DoacaoPage implements OnInit {

  data: any;
  aluno: AlunoModel;
  listaResponsaveis: ResponsavelModel[];
  responsavel: ResponsavelModel;
  headers: HttpHeaders;
  tipoDoacao: string;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController) {
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Content-Type', 'application/json')
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      
      if (params && params.special){
        this.tipoDoacao = JSON.parse(params.tipoDoacao);
        this.data = JSON.parse(params.special);
        this.aluno = this.data;

        this.getResponsavelAluno().subscribe(res => {
          this.listaResponsaveis = res.data;
          if(res.data.length > 0){
            this.listaResponsaveis.forEach(resp => {
              if(resp.id == this.aluno.id_responsavel){
                this.responsavel = resp;
              }
            });
          }
        })

      }
    })
  }

  //Como forma de burlar a falta de parâmetros até a correção ideal,
  //alterei a navegação do botão voltar para a tela home, obrigando
  //que o usuário repasse os parâmetros do tipo de doação
    voltar() {
    this.navCtrl.navigateRoot(['home']);
  }

  getResponsavelAluno(): Observable<any> {
    return this.http.get<any>("https://run.mocky.io/v3/ab5ef037-a28f-4794-8719-247503f5762f", { headers: this.headers })
    .pipe(take(1));
  }

  finalizarDoacao() {
    let id = this.tipoDoacao == 'identificada' ? '10013' : '10012';
    this.presentAlert(id);
  }

  async presentAlert(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Obrigado por doar!',
      subHeader: 'Doação do tipo ' + this.tipoDoacao + '.',
      message: 'Acompanhe-a pela página inicial com o ID: ' + id + '.',
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