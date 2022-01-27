import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../entities/car.entity';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input()
  car!: Car;

  @Output()
  car_id = new EventEmitter<string>();

  isReserved: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  reserve(value: string){
    this.isReserved = true;
    this.car_id.emit(value);
  }








}
