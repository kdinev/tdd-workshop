import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  public x = 0;

  @Input()
  public y = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public addNumbers(x: number, y: number) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error('Both parameters should be different from NaN');
    }
    return x + y;
  }

  public addInputNumbers() {
    return this.addNumbers(this.x, this.y);
  }
}
