import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL: string = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  salvar(todo: Todo) : Observable<Todo>{
      return this.http.post<Todo>(this.API_URL, todo);
  }

  listar() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  deletar(id: number) : Observable<void> {
    const url = `${this.API_URL}/${id}`
    return this.http.delete<void>(url)
  }

  marcarComoConcluido(id: number): Observable<Todo> {
    const url = `${this.API_URL}/${id}/done`
    return this.http.patch<Todo>(url, {})
  }
}
