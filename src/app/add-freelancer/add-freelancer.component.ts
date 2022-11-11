import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FreelancerService} from "../freelancer.service";
import {Freelancers} from "../freelancers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.scss']
})
export class AddFreelancerComponent implements OnInit {
  freelancerFormGroup!: FormGroup;
  freelancersLength: number;

  constructor(
    private formBuilder: FormBuilder,
    private freelancerService: FreelancerService,
    private router: Router
  ) {
    this.freelancerFormGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      skill: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getLengthFreelancers();
  }

  getLengthFreelancers() {
    this.freelancerService.getAllFreelancers().subscribe((result: Freelancers[]) => {
      this.freelancersLength = result.length;
    });
  }

  goToListFreelancers() {
    this.router.navigate(['/list-freelancers']);
  }

  onSubmit() {
    const freelancer = {
      id: this.freelancersLength + 1,
      ...this.freelancerFormGroup.value
    }
    this.freelancerService.addNewFreelancer(freelancer).subscribe(_ => {
      this.goToListFreelancers();
    });
  }

}
