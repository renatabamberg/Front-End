import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Atendimento } from '../atendimento';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements OnInit{

  loadAtendimento: Atendimento[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  addAtendimento(Atendimento: {nomeDoCliente: string, data: string, hora: string, tipo: string, status: string, descricao: string})
  {
    return this.http.post('https://residencia-9c476-default-rtdb.firebaseio.com/posts.json', Atendimento).subscribe(responseData => {console.log(responseData)});
  }

  getAtendimentos()
  {
    return this.http.get<{[key: string]: Atendimento}>('https://residencia-9c476-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      const postArray: Atendimento[] = [];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          postArray.push({...responseData[key], id: key});
        }
      }
      return postArray;
    }
    ));
  }

  getAtendimento(id: string)
  {
    return this.http.get<Atendimento>('https://residencia-9c476-default-rtdb.firebaseio.com/posts/' + id + '.json');
  }

  updateAtendimento(id: string, Atendimento: {nomeDoCliente: string, data: string, hora: string, tipo: string, status: string, descricao: string})
  {
    return this.http.put('https://residencia-9c476-default-rtdb.firebaseio.com/posts/' + id + '.json', Atendimento, {observe: 'response'});
  }

  deleteAtendimento()
  {
    return this.http.delete('https://residencia-9c476-default-rtdb.firebaseio.com/posts.json');
  }
}
