import { Component, OnInit } from '@angular/core';
import { ingredients } from '../ingredients';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent implements OnInit {
  ingredients = [...ingredients];

  constructor() {}

  ngOnInit(): void {}
}
