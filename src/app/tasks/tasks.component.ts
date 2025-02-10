import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks = [
    { title: 'Fix Dashboard UI', description: 'Update the dashboard layout.', status: 'In Progress' },
    { title: 'Add Notifications', description: 'Implement notifications feature.', status: 'Pending' },
    { title: 'Optimize Performance', description: 'Improve app loading speed.', status: 'Completed' }
  ];
}