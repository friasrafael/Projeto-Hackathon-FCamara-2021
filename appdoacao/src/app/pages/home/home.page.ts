import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AlunoModel } from '../models/aluno.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  headers: HttpHeaders;

  constructor(private http: HttpClient, private navCtrl: NavController) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json')
  }

  getDoacoes(id: any): Observable<any> {
    return this.http.get<any>("https://run.mocky.io/v3/c36ce3ad-87d1-4dea-a5bc-2d0375550a58/" + id, { headers: this.headers })
      .pipe(take(1));
  }

  filtrar(ev: any) {
    let id = ev.target.value;
    if (id && id.trim() != '' && id.length > 2) {
      this.getDoacoes(id).subscribe(res => {
        this.doar(res.data[0]);
      })
    }
  }

  doar(aluno: AlunoModel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(aluno)
      }
    };
    this.navCtrl.navigateRoot(['doacao'], navigationExtras);
  }

  navegarParaLista(parametro: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(parametro)
      }
    };
    this.navCtrl.navigateRoot(['lista-doacoes'], navigationExtras);
  }
}
