import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../freelancer.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Freelancers} from "../freelancers";

@Component({
  selector: 'app-detail-freelancer',
  templateUrl: './detail-freelancer.component.html',
  styleUrls: ['./detail-freelancer.component.scss']
})
export class DetailFreelancerComponent implements OnInit {
  freelancerId: number;
  freelancerFormGroup!: FormGroup

  constructor(
    private freelancerService: FreelancerService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.freelancerId = Number(this.activatedRoute.snapshot.params['id']);
    this.freelancerFormGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      skill: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.freelancerService.getFreelancers(this.freelancerId).subscribe((result: Freelancers) => {
      this.freelancerFormGroup.get('name').setValue(result.name);
      this.freelancerFormGroup.get('skill').setValue(result.skill);
      this.freelancerFormGroup.get('phone').setValue(result.phone);
      this.freelancerFormGroup.get('notes').setValue(result.notes);
    });
  }

  goToListFreelancers() {
    this.router.navigate(['/list-freelancers']);
  }

  onSubmit() {
    const freelancer = {
      id: this.freelancerId,
      ...this.freelancerFormGroup.value
    }
    this.freelancerService.updateFreelancer(this.freelancerId, freelancer).subscribe(_ => {
      this.goToListFreelancers();
    });
  }

}
