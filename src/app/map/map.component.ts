import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  latitud: number;
  longitud: number;

  stations: any[];

  constructor(
    private apiService: ApiService
  ){
    this.latitud=30;
    this.longitud=-4;
    this.stations=[]; 
  }
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) =>{
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        
    });

    //llamada al api
    this.apiService.getLugar()
    .then((respose) => {
      this.stations = respose.data.stations;
      
    })
    .catch((error) => {console.log(error);
    });
  }
}
