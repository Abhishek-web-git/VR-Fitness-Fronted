import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-summary',
  standalone: true,
  imports: [],
  templateUrl: './workout-summary.component.html',
  styleUrl: './workout-summary.component.css'
})
export class WorkoutSummaryComponent {
  @Input() summary: any;

}
