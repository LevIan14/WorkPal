import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../freelancer.service";
import {Freelancers} from "../freelancers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-freelancers.component.html',
  styleUrls: ['./list-freelancers.component.scss']
})
export class ListFreelancersComponent implements OnInit {

  listFreelancers: Freelancers[] = [];

  constructor(
    private freelancerService: FreelancerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllFreelancers();
  }

  getAllFreelancers() {
    this.freelancerService.getAllFreelancers().subscribe((result: Freelancers[]) => {
      this.listFreelancers = result;
    });
  }

  searchFreelancer(event: any): void {
    const freelancerName = event.target.value;

    const filteredFreelancers = this.listFreelancers.filter(o =>
      Object.keys(o).some(k => {
        if (k !== 'id') return o[k].toLowerCase().includes(freelancerName.toLowerCase())
      }));

    if (filteredFreelancers.length > 0 && freelancerName.length > 0) {
      this.listFreelancers = filteredFreelancers;
    } else {
      this.getAllFreelancers();
    }
  }

  goToFreelancer(id: number): void {
    this.router.navigate([`freelancer/${id}`])
  }

  deleteFreelancer(id: number): void {
    this.freelancerService.deleteFreelancer(id).subscribe(_ => {
      this.getAllFreelancers();
    });
  }

}
