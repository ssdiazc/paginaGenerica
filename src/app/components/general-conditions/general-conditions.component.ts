import { Component, OnInit } from '@angular/core';
import { TemplateConditionsInputStructure } from 'src/app/utilities/interfaces/template-conditions';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let GENERAL_CONDITIONS_CONSTS: TemplateConditionsInputStructure;

@Component({
  selector: 'app-general-conditions',
  templateUrl: './general-conditions.component.html',
  styleUrls: ['./general-conditions.component.scss'],
})
export class GeneralConditionsComponent implements OnInit {
  constructor(private constantsService: ConstantsService) {
    GENERAL_CONDITIONS_CONSTS =
      constantsService.selectorConstants('gen-conditions');
  }

  ngOnInit(): void {}

  get generalConditionsData() {
    return GENERAL_CONDITIONS_CONSTS;
  }
}
