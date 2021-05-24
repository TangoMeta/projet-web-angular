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

export interface UpdatableCategorie {
  id: number;
  libelle: string;
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

  updatePlat(plat: Plat): Observable<any> {
    console.log(plat);
    return this.http.put<Plat>(endpoint + 'plat/' + plat.id, plat).pipe(
      catchError(RestService.handleError)
    );
  }

  getPlat(id: number): Observable<any> {
    return this.http.get<Plat>(endpoint + 'plat/' + id);
  }


  deletePlat(id: number): Observable<any> {
    return this.http.delete<Plat>(endpoint + 'plat/' + id).pipe(
      catchError(RestService.handleError)
    );
  }

  searchPlat(search: string): Observable<any> {
    return this.http.get<Plat>(endpoint + 'plat/search/' + search).pipe(
      catchError(RestService.handleError)
    );
  }

  filterPlat(filter: string): Observable<any> {
    return this.http.get<Plat>(endpoint + 'plat/filter/' + filter).pipe(
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

  updateCategory(categorie: UpdatableCategorie): Observable<any> {
    console.log(categorie);
    return this.http.put<UpdatableCategorie>(endpoint + 'category/' + categorie.id, categorie).pipe(
      catchError(RestService.handleError)
    );
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<UpdatableCategorie>(endpoint + 'category/' + id);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<Categorie>(endpoint + 'category/' + id).pipe(
      catchError(RestService.handleError)
    );
  }
}
