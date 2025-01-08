import { Component } from '@angular/core';
import { Event } from '../../shared/models/event.model';
import { Book } from '../../shared/models/book.model';
import { Discussion } from '../../shared/models/discussion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  upcomingEvents: Event[] = [
    { id: 1, title: 'Book Discussion: The Secret Garden', date: 'October 26, 2023' },
    { id: 2, title: 'Author Meet and Greet', date: 'November 15, 2023' },
  ];

  currentBook: Book = {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'assets/images/the_secret_garden.jpg', // Replace with actual path
  };

  recentDiscussions: Discussion[] = [
    { id: 1, title: 'Thoughts on Chapter 5 of The Great Gatsby' },
    { id: 2, title: 'Predictions for the next book club pick' },
  ];
}