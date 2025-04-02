import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXLaunch } from '../models/spaceX.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<SpaceXLaunch[]> {
    return this.http.get<SpaceXLaunch[]>(`${this.baseUrl}?launch_year=${year}`);
  }
}
