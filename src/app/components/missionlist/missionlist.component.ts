import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SpaceXService } from '../../services/space-x.service';
import { SpaceXLaunch } from '../../models/spaceX.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: SpaceXLaunch[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getAllLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
