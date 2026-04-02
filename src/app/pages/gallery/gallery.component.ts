import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

interface Entry {
  id: string; subject: string; condition: string; angle: string;
  accuracy: number; status: 'Identified' | 'No Match' | 'Processing';
  date: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  search = '';
  filterStatus = 'All';
  filterCondition = 'All';
  viewMode: 'grid' | 'list' = 'grid';

  statuses = ['All', 'Identified', 'No Match', 'Processing'];
  conditions = ['All', 'Normal', 'Bag', 'Coat'];

  entries: Entry[] = [
    { id: 'GEI-001', subject: 'Subject_042', condition: 'Normal', angle: '90°',  accuracy: 98.2, status: 'Identified', date: '2 days ago' },
    { id: 'GEI-002', subject: 'Subject_017', condition: 'Bag',    angle: '54°',  accuracy: 94.7, status: 'Identified', date: '3 days ago' },
    { id: 'GEI-003', subject: 'Unknown',     condition: 'Coat',   angle: '0°',   accuracy: 41.2, status: 'No Match',   date: '4 days ago' },
    { id: 'GEI-004', subject: 'Subject_001', condition: 'Normal', angle: '90°',  accuracy: 97.1, status: 'Identified', date: '5 days ago' },
    { id: 'GEI-005', subject: 'Subject_093', condition: 'Normal', angle: '36°',  accuracy: 91.5, status: 'Identified', date: '6 days ago' },
    { id: 'GEI-006', subject: 'Pending',     condition: 'Bag',    angle: '162°', accuracy: 0,    status: 'Processing', date: '1 day ago' },
    { id: 'GEI-007', subject: 'Subject_104', condition: 'Normal', angle: '90°',  accuracy: 89.3, status: 'Identified', date: '1 week ago' },
    { id: 'GEI-008', subject: 'Unknown',     condition: 'Coat',   angle: '180°', accuracy: 38.9, status: 'No Match',   date: '1 week ago' },
  ];

  get filtered(): Entry[] {
    return this.entries.filter(e => {
      const q = this.search.toLowerCase();
      const matchQ = e.id.toLowerCase().includes(q) || e.subject.toLowerCase().includes(q);
      const matchS = this.filterStatus === 'All' || e.status === this.filterStatus;
      const matchC = this.filterCondition === 'All' || e.condition === this.filterCondition;
      return matchQ && matchS && matchC;
    });
  }

  badgeClass(status: string): string {
    const m: Record<string,string> = { 'Identified': 'badge-cyan', 'No Match': 'badge-red', 'Processing': 'badge-yellow' };
    return m[status] || 'badge-cyan';
  }
}
