import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stats = [
    { label: 'Total Subjects',        value: '248',    change: '+12',   trend: 'up' },
    { label: 'Processed Videos',      value: '1,340',  change: '+34',   trend: 'up' },
    { label: 'Recognition Accuracy',  value: '96.4%',  change: '+0.8%', trend: 'up' },
    { label: 'Active Sessions',        value: '7',      change: 'Live',  trend: 'live' },
  ];

  uploads = [
    { id: '#V-0041', file: 'cam_north_gate_2025.mp4',    date: '2 hrs ago',  status: 'Identified',  subject: 'Subject_042', conf: 98.2 },
    { id: '#V-0040', file: 'surveillance_b3_entry.avi',  date: '5 hrs ago',  status: 'Identified',  subject: 'Subject_017', conf: 94.7 },
    { id: '#V-0039', file: 'hallway_clip_29_03.mp4',     date: '8 hrs ago',  status: 'Processing',  subject: '—',           conf: null },
    { id: '#V-0038', file: 'outdoor_cam_night.mp4',      date: '1 day ago',  status: 'No Match',    subject: 'Unknown',     conf: 42.1 },
    { id: '#V-0037', file: 'entrance_rec_28.mkv',        date: '1 day ago',  status: 'Identified',  subject: 'Subject_093', conf: 91.5 },
  ];

  distribution = [
    { label: 'Normal Walking', pct: 68 },
    { label: 'Carrying Bag',   pct: 21 },
    { label: 'Wearing Coat',   pct: 11 },
  ];

  angles = ['0°','18°','36°','54°','72°','90°','108°','126°','144°','162°','180°'];

  chartBars = [
    { day: 'Mon', h: 55 }, { day: 'Tue', h: 70 }, { day: 'Wed', h: 48 },
    { day: 'Thu', h: 82 }, { day: 'Fri', h: 90 }, { day: 'Sat', h: 62 }, { day: 'Sun', h: 75 }
  ];

  statusClass(status: string): string {
    const m: Record<string,string> = {
      'Identified': 'badge-cyan',
      'Processing':  'badge-yellow',
      'No Match':    'badge-red',
    };
    return m[status] || 'badge-cyan';
  }
}
