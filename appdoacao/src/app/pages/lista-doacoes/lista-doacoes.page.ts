import { Component, OnInit } from '@angular/core';
import { AlunoModel } from 'src/app/pages/models/aluno.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-doacoes',
  templateUrl: 'lista-doacoes.page.html',
  styleUrls: ['lista-doacoes.page.scss']
})

export class ListaDoacoesPage implements OnInit {

  listaAlunos: AlunoModel[];
  headers: HttpHeaders;
  tipoDoacao: string;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json')
  }

  ngOnInit() {
    this.obterAlunos();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special){
        this.tipoDoacao = JSON.parse(params.special);
      }
    })
  }

  get(): Observable<string> {
    return this.http.get<string>("https://run.mocky.io/v3/c36ce3ad-87d1-4dea-a5bc-2d0375550a58", { headers: this.headers })
      .pipe(take(1));
  }

  obterAlunos() {
    this.get().subscribe((result: any) => {
      this.listaAlunos = result.data;
    })
  }

  filtrar(ev: any) {
    try {
      let val = ev.target.value;
      if (val && val.trim() != '' && val.length > 2) {
        this.listaAlunos = this.listaAlunos.filter((item) => {
          return (item.endereco_escola.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.obterAlunos();
      }
    } catch (e) {
      console.error("Ocorreu um erro: " + e);
    }
  }

  voltar() {
    this.navCtrl.navigateRoot(['home']);
  }

  doar(aluno: AlunoModel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(aluno),
        tipoDoacao: JSON.stringify(this.tipoDoacao)
      }
    };
    this.navCtrl.navigateRoot(['doacao'], navigationExtras);
  }

}
