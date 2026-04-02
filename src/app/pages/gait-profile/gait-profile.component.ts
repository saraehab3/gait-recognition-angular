import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

interface Subject {
  id: string; name: string; age: number; gender: string;
  status: 'Enrolled' | 'Pending'; accuracy: number;
  videos: number; lastSeen: string;
}

@Component({
  selector: 'app-gait-profile',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './gait-profile.component.html',
  styleUrls: ['./gait-profile.component.css']
})
export class GaitProfileComponent {
  search = '';
  selected: Subject | null = null;

  subjects: Subject[] = [
    { id: 'Subject_001', name: 'Omar Saleh',    age: 34, gender: 'Male',   status: 'Enrolled', accuracy: 98.1, videos: 24, lastSeen: '1 day ago' },
    { id: 'Subject_017', name: 'Fatima Noor',   age: 29, gender: 'Female', status: 'Enrolled', accuracy: 94.7, videos: 18, lastSeen: '3 days ago' },
    { id: 'Subject_042', name: 'Ahmed Hassan',  age: 41, gender: 'Male',   status: 'Enrolled', accuracy: 96.2, videos: 31, lastSeen: '2 hrs ago' },
    { id: 'Subject_093', name: 'Nada Ibrahim',  age: 27, gender: 'Female', status: 'Enrolled', accuracy: 91.5, videos: 14, lastSeen: '5 days ago' },
    { id: 'Subject_104', name: 'Hassan Rami',   age: 52, gender: 'Male',   status: 'Pending',  accuracy: 0,    videos: 2,  lastSeen: 'Never' },
  ];

  parts = [
    { name: 'Head',  sub: 'Region 1', pct: 94 },
    { name: 'Torso', sub: 'Region 2', pct: 89 },
    { name: 'Waist', sub: 'Region 3', pct: 82 },
    { name: 'Thigh', sub: 'Region 4', pct: 91 },
    { name: 'Leg',   sub: 'Region 5', pct: 87 },
  ];

  get filtered(): Subject[] {
    const q = this.search.toLowerCase();
    return this.subjects.filter(s =>
      s.id.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
    );
  }

  select(s: Subject) { this.selected = s; }
}
