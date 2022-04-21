import { Component, OnInit } from '@angular/core';
import { Bounties } from '../bounties';

import { BOUNTIES } from '../mock-bounties';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  bounties = BOUNTIES;

  selectedBounty?: Bounties;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(bounty: Bounties): void {
    this.selectedBounty = bounty;
  }
}