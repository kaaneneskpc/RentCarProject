import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = { carId: 1, brandId: 1, colorId: 1, modelYear: 1998, dailyPrice: 15000, description: "Dodge" }
  car2 = { carId: 1, brandId: 1, colorId: 1, modelYear: 1998, dailyPrice: 15000, description: "Dodge" }
  cars = [this.car1, this.car2]

  constructor() { }

  ngOnInit(): void {
  }

}
