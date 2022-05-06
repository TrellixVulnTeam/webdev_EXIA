import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from '../models';
import {VacancyService} from '../vacancy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[];
  constructor(
    private apiService: VacancyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getVacanciesByCompanies(id).subscribe(vacancies => this.vacancies = vacancies);
  }
}
