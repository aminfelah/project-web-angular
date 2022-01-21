import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  @Output() idToEmit2 = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  showId(id: any){
    this.idToEmit2.emit(id);
  }
}
