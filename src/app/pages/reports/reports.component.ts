import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  summaryStats = [
    { label: 'Total Experiments',    value: '247' },
    { label: 'Recognition Rate',     value: '96.4%' },
    { label: 'Avg. Confidence',      value: '91.8%' },
    { label: 'False Positives',      value: '1.3%' },
  ];

  conditionRows = [
    { cond: 'Normal Walking', nm:  95, pct: 96.4, map: 94.8 },
    { cond: 'Carrying Bag',   nm:  82, pct: 91.2, map: 89.7 },
    { cond: 'Wearing Coat',   nm:  61, pct: 88.5, map: 86.1 },
    { cond: 'Night / Dim',    nm:  44, pct: 83.9, map: 81.2 },
    { cond: 'Cross-View',     nm: 102, pct: 94.7, map: 93.2 },
  ];

  angleRows = [
    { angle: '0°',  r1: 91.2, r5: 96.4 },
    { angle: '36°', r1: 93.8, r5: 98.1 },
    { angle: '54°', r1: 94.2, r5: 98.4 },
    { angle: '90°', r1: 96.4, r5: 99.1 },
    { angle: '126°',r1: 93.1, r5: 97.8 },
    { angle: '180°',r1: 89.7, r5: 95.6 },
  ];

  barData = [
    { month:'Jan', v: 78 }, { month:'Feb', v: 82 }, { month:'Mar', v: 87 },
    { month:'Apr', v: 91 }, { month:'May', v: 89 }, { month:'Jun', v: 94 },
    { month:'Jul', v: 96 }, { month:'Aug', v: 95 }, { month:'Sep', v: 97 },
    { month:'Oct', v: 96 }, { month:'Nov', v: 98 }, { month:'Dec', v: 99 },
  ];
}
