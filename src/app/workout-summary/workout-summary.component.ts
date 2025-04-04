import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Workout {
  name: string;
  duration: number;
  category: string;
  goal: string;
  level: string;
  caloriesBurned?: number;
  date?: string;
}

interface Exercise {
  name: string;
  description: string;
  duration: number;
  difficulty: string;
  category: string;
  vrAnimationUrl?: string;
  model3DUrl: string;
  vrGuideUrl: string;
}

@Component({
  selector: 'app-workout-summary',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './workout-summary.component.html',
  styleUrl: './workout-summary.component.css'
})
export class WorkoutSummaryComponent implements OnInit{
  workouts: Workout[] = [];
  exercises: Exercise[] = [];
  filteredExercises: Exercise[] = [];

  newWorkout: Workout = { name: '', duration: 0, category: '', goal: '', level: ''};
  goals = ['Weight Loss', 'Muscle Gain', 'Endurance'];
  categories = ['Strength Training', 'Cardio', 'Flexibility', 'Yoga', 'HIIT'];
  levels = ['Beginner', 'Intermediate', 'Advanced'];
  difficulties = ['Easy', 'Medium', 'Hard'];
  leaderboard: { name: string; points: number }[] = [];
  achievements: string[] = [];

  // filteredExercises: Exercise[] = [];

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadWorkouts();
    this.loadExercises();
    this.loadLeaderboard();
  }

  loadWorkouts() {
    this.http.get<Workout[]>('/api/workouts').subscribe(data => {
      this.workouts = data.map(workout => ({
        ...workout,
        goal: workout.goal || 'Not Specified',
        level: workout.level || 'Beginner'
      }));
    });
  }

  loadExercises() {
    this.http.get<Exercise[]>('/api/exercises').subscribe(data => {
      // console.log("Exercises Data:", data);
      this.exercises = data;
      this.filteredExercises = data;
    });
  }

  addWorkout() {
    this.newWorkout.date = new Date().toISOString().split('T')[0];
    this.newWorkout.caloriesBurned = this.calculateCalories(this.newWorkout);
    
    this.http.post('/api/workouts', this.newWorkout).subscribe(() => {
      this.loadWorkouts();
      this.newWorkout = { name: '', duration: 0, category: '', goal: '', level: '' };
      this.updateAchievements();
    });
  }

  calculateCalories(workout: Workout): number {
    return workout.duration * 5;
  }

  updateAchievements() {
    if (this.workouts.length >= 10) {
      this.achievements.push('Completed 10 Workouts!');
    }
  }

  loadLeaderboard() {
    this.http.get<{ name: string; points: number }[]>('/api/leaderboard').subscribe(data => {
      this.leaderboard = data;
    });
  }
  
  filterExercises(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredExercises = this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(query) ||
      exercise.category.toLowerCase().includes(query) ||
      exercise.difficulty.toLowerCase().includes(query)
    );
  }

}
