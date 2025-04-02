import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { SpaceXService } from './services/space-x.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MissionlistComponent, MissionfilterComponent],
  providers: [SpaceXService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MissionlistComponent) missionList!: MissionlistComponent;

  constructor(private spaceXService: SpaceXService) {}

  filterByYear(year: string) {
    this.spaceXService.getLaunchesByYear(year).subscribe(data => {
      this.missionList.launches = data;
    });
  }
}
