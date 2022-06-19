import { AlertService } from './alert.service';
import { GameDto } from './../DTO/game.dto';
import { GameModel } from './../DTO/game.model';
import { ResponseLogin } from './../DTO/response-login-back-end.dto';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { UserLogin } from './../DTO/user-login.dto';
import { UserBackEndResponse } from './../DTO/user-back-end-response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUpdateUserDto } from 'src/DTO/create-user.dto';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private alertService: AlertService
  ) {}

  user = '';

  private userReceived: ResponseLogin;

  // loggedUser :  BehaviorSubject<ResponseLogin>;
  loggedUser = new BehaviorSubject<ResponseLogin | null>(null);

  createUser(dto: CreateUpdateUserDto) {
    return firstValueFrom(this.http.post<UserBackEndResponse>('user', dto));
  }

  saveGameInfo(dto: GameDto) {
    return firstValueFrom(this.http.post<GameModel>('game', dto));
  }

  listarUsuarios(): Observable<UserBackEndResponse[]> {
    return this.http.get<UserBackEndResponse[]>('user');
  }

  getAllUserGames(): Observable<UserBackEndResponse[]> {
    if (this.loggedUser.value) {
      return this.http.get<UserBackEndResponse[]>(
        `user/game/${this.loggedUser.value?.id}`
      );
    }
    return this.http.get<UserBackEndResponse[]>(`user/game/-1}`);
  }

  verificarLogin(dto: UserLogin) {
    this.http
      .post<ResponseLogin>('user/login', dto)
      .pipe(take(1))
      .subscribe(
        (user) => {
          this.userReceived = user;
          if (this.userReceived) {
            let jsonData = JSON.stringify(this.userReceived);
            localStorage.setItem('user', jsonData);
            this.loggedUser.next(user);
          }
          console.log(this.userReceived);
          this.alertService.success('Usuário logado com sucesso!');
          this.router.navigate(['/game']);
        },
        (err) => {
          console.log('HTTP Error', err);
          this.alertService.error(
            'Não foi possível fazer o LOGIN, verifique os dados digitados'
          );
        }
      );
  }

  getLoggedUser() {
    if (localStorage.length > 0) {
      console.log('entrei');

      let jsonData = localStorage.getItem('user');
      if (jsonData) {
        console.log('getLoggedUser --> jsonData: ', jsonData);

        const obj = JSON.parse(jsonData);
        this.loggedUser.next(obj);
      }
    }
  }

  loggout() {
    if (this.loggedUser.value) {
      localStorage.removeItem('user');
      this.loggedUser.next(null);
    }
  }

  hasUserLogged(): boolean {
    if (this.loggedUser.value) {
      return true;
    }
    return false;
  }

  atualizaUsuarioLogado(user: any) {
    this.user = user;
  }
}
