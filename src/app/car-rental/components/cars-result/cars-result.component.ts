import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../entities/car.entity';
import { CarRentalService } from '../../services/car-rental.service';

@Component({
  selector: 'app-cars-result',
  templateUrl: './cars-result.component.html',
  styleUrls: ['./cars-result.component.css']
})
export class CarsResultComponent implements OnInit {
  cars: Car[] = [];

  constructor(
    private carRentalService : CarRentalService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAvailableCars()
    this.getAllBrands()
    this.getAllYears()
    this.getAllCarClasses()
    this.getAllCarTypes()
    this.getAllFuelPolicies()
    this.getAllColors()
  }

  // -------------------------------------------- ALL CARS
  
  getAvailableCars(){
    this.carRentalService.getAvailableCars()
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }

  // -------------------------------------------- ALL CARS FILTERED
  // 1. BY BRAND:
  brand: string = "";
  brands: string[] = [];

  setBrand(brand: string){
    this.brand = brand;
  }
  getAllBrands(){
    this.carRentalService.getAllBrands()
      .subscribe(
        res => {
          this.brands = res;
        }
      );
    return this.brands;
  }
  getCarsByBrand(){
    this.carRentalService.getCarsByBrand(this.brand)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }

  // 2. BY year:
  year: number = 1970;
  years: number[] = [];

  setYear(year: number){
    this.year = year;
  }
  getAllYears(){
    this.carRentalService.getAllYears()
      .subscribe(
          res => {
            this.years = res;
        });  
    return this.years;
  }
  getCarsByYear(){
    this.carRentalService.getCarsByYear(this.year)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }

  // 3. BY CAR CLASS:
  car_class: string = "";
  car_classes: string[] = [];

  setCarClass(car_class: string){
    this.car_class = car_class;
  }
  getAllCarClasses(){
    this.carRentalService.getAllCarClasses()
      .subscribe(
        res => {
          this.car_classes = res;
        }
      );
    return this.car_classes;
  }
  getCarsByCarClass(){
    this.carRentalService.getCarsByClass(this.car_class)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }

  // 4. BY CAR TYPE:
  car_type: string = "";
  car_types: string[] = [];

  setCarType(car_type: string){
    this.car_type = car_type;
  }
  getAllCarTypes(){
    this.carRentalService.getAllCarTypes()
      .subscribe(
        res => {
          this.car_types = res;
        }
      );
    return this.car_types;
  }
  getCarsByCarType(){
    this.carRentalService.getCarsByType(this.car_type)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }
  // 5. BY AIR CONDITIONER:
  ac: string = "0";
  acs: string[] = [];

  setAC(ac: string){
    this.ac = ac;
  }
  getCarsByAC(){
    this.carRentalService.getCarsByAC(this.ac)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }
  // 6. BY FUEL POLICY:
  fuel_policy: string = "";
  fuel_policies: string[] = [];

  setFuelPolicy(fuel_policy: string){
    this.fuel_policy = fuel_policy;
  }
  getAllFuelPolicies(){
    this.carRentalService.getAllFuelPolicies()
      .subscribe(
        res => {
          this.fuel_policies = res;
        }
      );
    return this.fuel_policies;
  }
  getCarsByFuelPolicy(){
    this.carRentalService.getCarsByFuelPolicy(this.fuel_policy)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }
  // 7. BY COLOR:
  color: string = "";
  colors: string[] = [];

  setColor(color: string){
    this.color = color;
  }
  getAllColors(){
    this.carRentalService.getAllColors()
      .subscribe(
        res => {
          this.colors = res;
        }
      );
    return this.colors;
  }
  getCarsByColor(){
    this.carRentalService.getCarsByColor(this.color)
      .subscribe(
        res => {
          this.cars = res;
        }
      );
    return this.cars;
  }
  // -------------------------------------------- RESERVATION


  sendCadId(car_id: string){
    this.carRentalService.setCar_id(car_id);
    this.addReservation();
    this.router.navigate(['/rent/success']);
  }

  addReservation(){
    this.carRentalService.createReservation()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }


}
