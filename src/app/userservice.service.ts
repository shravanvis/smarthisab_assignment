import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    return this._http.get(this.apiUrl);
  }

  getuserbyId(id: number){
    return this._http.get(this.apiUrl + id)
  }

  getAlbums(id){
    return this._http.get(this.apiUrl + id + '/albums')
  }

  getPhotos(id){
    return this._http.get('https://jsonplaceholder.typicode.com/albums/' + id + '/photos')
  }
}
