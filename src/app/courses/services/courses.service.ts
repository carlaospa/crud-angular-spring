import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http'

import {delay, first, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  constructor(private httpclient : HttpClient) { }

  list() {
    return this.httpclient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap (courses => console.log(courses))
    );
  }
}
