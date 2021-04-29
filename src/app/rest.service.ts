import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/';

export interface Plat {
  id: number;
  libelle: string;
  ingredients: string;
  categorie: Categorie;
  allergene: string;
  regime: string;
  image: string;
}

export interface Categorie {
  id: number;
  libelle: string;
  plats: Array<Plat>;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPlats(): Observable<any> {
    return this.http.get<Plat>(endpoint + 'plat');
  }

  addPlat(plat: any): Observable<any> {
    return this.http.post(endpoint + 'plat', plat).pipe(
      catchError(RestService.handleError)
    );
  }

  updatePlat(id: number, plat: Plat): Observable<any> {
    return this.http.put<Plat>(endpoint + 'plat/' + id, plat).pipe(
      catchError(RestService.handleError)
    );
  }

  deletePlat(id: number): Observable<any> {
    return this.http.delete<Plat>(endpoint + 'plat/' + id).pipe(
      catchError(RestService.handleError)
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<Categorie>(endpoint + 'category');
  }

  addCategory(categorie: any): Observable<any> {
    return this.http.post(endpoint + 'category', categorie).pipe(
      catchError(RestService.handleError)
    );
  }

  updateCategory(id: number, categorie: Categorie): Observable<any> {
    return this.http.put<Categorie>(endpoint + 'category/' + id, categorie).pipe(
      catchError(RestService.handleError)
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<Categorie>(endpoint + 'category/' + id).pipe(
      catchError(RestService.handleError)
    );
  }
}
