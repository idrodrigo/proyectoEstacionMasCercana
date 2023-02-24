import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLugar(): Promise<any>{
    return this.httpClient.get<any>('https://gbfs.mex.lyftbikes.com/gbfs/en/station_information.json').toPromise();
  }
}
