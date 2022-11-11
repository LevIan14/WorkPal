import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Freelancers} from "./freelancers";

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllFreelancers(): Observable<Freelancers[]> {
    return this.httpClient.get<Freelancers[]>(`${environment.server}/freelancers`);
  }

  getFreelancers(id: number): Observable<Freelancers> {
    return this.httpClient.get<Freelancers>(`${environment.server}/freelancers/${id}`);
  }

  addNewFreelancer(freelancer: Freelancers): Observable<Freelancers> {
    return this.httpClient.post<Freelancers>(`${environment.server}/freelancers`, freelancer);
  }

  updateFreelancer(id: number, freelancer: Freelancers): Observable<Freelancers> {
    return this.httpClient.put<Freelancers>(`${environment.server}/freelancers/${id}`, freelancer);
  }

  deleteFreelancer(id: number): Observable<Freelancers> {
    return this.httpClient.delete<Freelancers>(`${environment.server}/freelancers/${id}`);
  }
}
