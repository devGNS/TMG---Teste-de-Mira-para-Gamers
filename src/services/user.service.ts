import { GameDto } from './../DTO/game.dto';
import { GameModel } from './../DTO/game.model';
import { ResponseLogin } from './../DTO/response-login-back-end.dto';
import { catchError, Observable } from 'rxjs';
import { UserLogin } from './../DTO/user-login.dto';
import { UserBackEndResponse } from './../DTO/user-back-end-response.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUpdateUserDto } from 'src/DTO/create-user.dto';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  user = '';

  createUser(dto : CreateUpdateUserDto){
    return  firstValueFrom(  this.http.post<UserBackEndResponse>('user',dto));

  }

  saveGameInfo(dto : GameDto){
    return  firstValueFrom(  this.http.post<GameModel>('game',dto));

  }


  listarUsuarios() {
    this.http.get<UserBackEndResponse[]>('user')
             .subscribe(resultado => console.log(resultado));
  }

  verificarLogin(dto: UserLogin): Observable<ResponseLogin>{
    return  this.http.post<ResponseLogin>('user/login',dto)
  }

  atualizaUsuarioLogado(user: any){
    this.user = user;
  }
  // verificarLogin(dto: UserLogin){
  //   return  firstValueFrom(  this.http.post<UserBackEndResponse>('user/login',dto))

  // }

}
