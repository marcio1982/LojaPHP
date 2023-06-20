import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiURL = "http://localhost:8000/api/produto/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(produto): Observable<Produto> {
    
    return this.httpClient.post<Produto>(this.apiURL, JSON.stringify(produto), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Produto> {
    return this.httpClient.get<Produto>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  search(nome): Observable<Produto[]> {
    
    return this.httpClient.get<Produto[]>(this.apiURL + 'search/'+ nome)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.apiURL + id, JSON.stringify(produto), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Produto>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
