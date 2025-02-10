import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    { title: 'New Message', message: 'You have a new message from John.', date: '2023-10-01' },
    { title: 'Task Reminder', message: 'Complete the dashboard UI update.', date: '2023-10-02' },
    { title: 'System Update', message: 'A new system update is available.', date: '2023-10-03' }
  ];
}
