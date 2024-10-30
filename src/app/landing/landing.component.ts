import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgFor, NgIf, DashboardComponent,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  constructor(private router: Router){}
  // redirectToLogin(){
  //   this.router.navigate(['/login']);
  // }
  // redirectToSignup(){
  //   this.router.navigate(['/signup']);
  // }
   goToDashboard(){
    this.router.navigate(['/dashboard']);
  }


  showWelcomeScreen: boolean = true;

  ngOnInit() {
      setTimeout(() => {
      this.showWelcomeScreen = false;
    }, 3000); 
  }
  features = [
    { title: 'Immersive VR Workouts', description: 'Engage in immersive virtual workouts tailored to your goals.' },
    { title: 'Real-Time Progress Tracking', description: 'Track your progress with live data and achieve your goals.' },
    { title: 'Personalized Plans', description: 'Get customized fitness plans designed for you.' },
    { title: '24/7 Accessibility', description: 'Access workouts anytime, anywhere with VR convenience.' }
  ];

  steps = [
    { title: '1. Sign Up', description: 'Create your account and set your fitness goals.' },
    { title: '2. Choose Program', description: 'Select a program tailored to your needs.' },
    { title: '3. Start VR Training', description: 'Put on your VR headset and start working out.' },
    { title: '4. Track Progress', description: 'Monitor your progress and achieve milestones.' }
  ];

  testimonials = [
    { feedback: 'Best fitness experience ever! VR training has made workouts so much fun.', user: 'Abhishek Kuma' },
    { feedback: 'I feel more motivated than ever with real-time progress tracking.', user: 'Golu Kumar' }
    
  ];
  
}


