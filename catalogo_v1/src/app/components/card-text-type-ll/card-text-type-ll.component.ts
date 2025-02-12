import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-text-type-ll',
  templateUrl: './card-text-type-ll.component.html',
  styleUrls: ['./card-text-type-ll.component.scss'],
})
export class CardTextTypeLlComponent implements OnInit {
  @Input() imageLocation: string | undefined;
  @Input() cardTitle: string | undefined;
  @Input() text: any | undefined;
  @Input() button: any | undefined;

  constructor() {}

  ngOnInit(): void {}
}
