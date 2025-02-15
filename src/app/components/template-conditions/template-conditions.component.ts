import { Component, Input, OnInit } from '@angular/core';
import { TemplateConditionsInputStructure } from 'src/app/utilities/interfaces/template-conditions';

@Component({
  selector: 'app-template-conditions',
  templateUrl: './template-conditions.component.html',
  styleUrls: ['./template-conditions.component.scss'],
})
export class TemplateConditionsComponent implements OnInit {
  @Input() inputData: TemplateConditionsInputStructure | undefined;

  constructor() {}

  ngOnInit(): void {}
}
