import { Component, OnInit } from '@angular/core';
import  { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Routes } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	dataBanks;
	turretNumber;

  constructor(
  	private http: Http,
  	private route: ActivatedRoute
  	) { }

 
  findTurret(turretnumber){
  	//console.log(turretnumber);
  	this.http.get('http://localhost:3000/api/turret/' +turretnumber)
  	.toPromise()
  	.then(response => this.dataBanks = response.json());
  	//console.log(this);
  }

  ngOnInit() {
  	this.route.paramMap
  		.subscribe( params => {
		this.findTurret(params.get('id'));
  		});

  }

}
