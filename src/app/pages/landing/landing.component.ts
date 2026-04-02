import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  steps = [
    { icon: 'eye', label: 'Upload', desc: 'Submit low-resolution surveillance footage' },
    { icon: 'cpu', label: 'Process', desc: 'AI extracts silhouettes frame by frame' },
    { icon: 'activity', label: 'Extract GEI', desc: 'Gait Energy Image generated from silhouettes' },
    { icon: 'shield', label: 'Identify', desc: 'CNN ensemble matches against registered profiles' },
  ];

  features = [
    { title: 'Low-Resolution Support', desc: 'Works with degraded surveillance footage without needing high-quality video input.' },
    { title: 'Cross-View Handling', desc: 'Identifies subjects from multiple angles using multi-view gait analysis.' },
    { title: 'Ensemble CNN', desc: 'Combines multiple convolutional networks for robust and accurate feature extraction.' },
    { title: 'Part-Based Segmentation', desc: 'Analyzes body regions — head, chest, waist, thigh, leg — for fine-grained matching.' },
    { title: 'High Accuracy', desc: 'Rank-1 recognition accuracy exceeding 95% on standard gait datasets.' },
    { title: 'Privacy-Preserving', desc: 'Uses gait silhouettes, not facial features — ensuring privacy compliance.' },
  ];

  stats = [
    { val: '95%+', label: 'Rank-1 Accuracy' },
    { val: '180°', label: 'View Coverage' },
    { val: '3x', label: 'Conditions Tested' },
    { val: 'Real-time', label: 'Processing' },
  ];
}
