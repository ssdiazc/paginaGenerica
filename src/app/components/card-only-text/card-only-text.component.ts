import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-only-text',
  templateUrl: './card-only-text.component.html',
  styleUrls: ['./card-only-text.component.scss'],
})
export class CardOnlyTextComponent implements OnInit {
  @Input() imageBackgroundLocation: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto(url?: string, navOption?: string, openOption?: string) {
    if (!!navOption && navOption === 'router') {
      this.router.navigate(['/', url]);
    } else {
      window.open(url, !!openOption ? openOption : '');
    }
  }
}
