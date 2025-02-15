import { Component, OnInit } from '@angular/core';
import { TemplateConditionsInputStructure } from 'src/app/utilities/interfaces/template-conditions';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let RESP_CLAU_CONSTANTS: TemplateConditionsInputStructure;

@Component({
  selector: 'app-responsability-clause',
  templateUrl: './responsability-clause.component.html',
  styleUrls: ['./responsability-clause.component.scss'],
})
export class ResponsabilityClauseComponent implements OnInit {
  constructor(private constService: ConstantsService) {
    RESP_CLAU_CONSTANTS = constService.selectorConstants('resp-clause');
  }

  ngOnInit(): void {}

  get respClauseData() {
    return RESP_CLAU_CONSTANTS;
  }
}
