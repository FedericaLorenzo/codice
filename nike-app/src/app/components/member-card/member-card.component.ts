import { Component, Input } from '@angular/core';
import { Member } from '../../models/member.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
})
export class MemberCardComponent {
  @Input() member: Member;

  constructor(private router: Router) {}

  callToAction(callToAction: string) {
    if (callToAction == 'Acquista') {
      this.router.navigate(['products']);
    }
  }
}
