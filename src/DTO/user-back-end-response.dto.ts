import {  GameModel } from './game.model';
export interface UserBackEndResponse{
  email: string,
	usuario: string,
	senha: string,
  game: GameModel[],
	id:number,
	createAt: string,
	updateAt: string,
}


// [{"id":12,"email":"2@gmail.com","usuario":"2","senha":"$2b$08$65YnABuIzmXJAETTaLqMse0J.X9sQYYfaOBfFgA0S31we3AjbgWoS","createAt":"2022-05-29T19:31:47.000Z","updateAt":"2022-05-29T19:31:47.000Z"},
// {"id":13,"email":"3@gmail.com","usuario":"3","senha":"$2b$08$tqltMycSiMwvwO63/UVf0eRK1/f8ShvYNYqEeOzx3w8wZG0IqyzIG","createAt":"2022-05-29T20:07:24.000Z","updateAt":"2022-05-29T20:07:24.000Z"}]
