import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  programs = [
    {
      title: 'Full-Body Workout',
      description: 'Experience an immersive full-body workout with virtual trainers.',
      img: 'images/fullbody.avif'
    },
    {
      title: 'Cardio Blast',
      description: 'Boost your endurance with a high-intensity cardio session in VR.',
      img: 'images/cardioBlast.avif'
    },
    {
      title: 'Mindfulness & Yoga',
      description: 'Relax and recharge in a peaceful VR setting with guided yoga.',
      img: 'images/yoga.jpg'
    }
  ];

  features = [
    'Real-time tracking and feedback',
    'Customizable workout programs',
    'Immersive virtual environments',
    'Personalized recommendations',
    'Monitor your progress in real-time for a more immersive experience.'
  ];
  

}
