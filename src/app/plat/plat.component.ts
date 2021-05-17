import {Component, Input, OnInit} from '@angular/core';
import {RestService, Plat, Categorie} from '../rest.service';
import { Router } from '@angular/router';
import {FormBuilder,
  FormGroup,
  FormArray,
  FormControl} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  plats: Plat[] = [];

  categories: Categorie[] = [];

  form: FormGroup;
  filtersData = [
    { id: 1, name: 'végétarien' },
    { id: 2, name: 'vegan' },
    { id: 3, name: 'pescetarien' },
    { id: 4, name: 'soja' },
    { id: 5, name: 'poisson' },
    { id: 6, name: 'fruits à coques' },
    { id: 7, name: 'gluten' },
    { id: 8, name: 'mollusques' },
    { id: 9, name: 'céléri' },
    { id: 10, name: 'crustacés' },
    { id: 11, name: 'oeuf' },
    { id: 12, name: 'arachide' },
    { id: 13, name: 'lupin' },
    { id: 14, name: 'moutarde' },
    { id: 15, name: 'produits laitiers' }
  ];

  get filtersFormArray(): FormArray {
    return this.form.controls.filters as FormArray;
  }

  constructor(public rest: RestService, private data: DataService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      filters: new FormArray([])
    });
    this.addCheckboxes();
  }

  ngOnInit(): void {
    this.data.currentPlats.subscribe(plats => this.plats = plats);
    this.getPlats();
    this.getCategories();
  }

  private addCheckboxes(): void {
    this.filtersData.forEach(() => this.filtersFormArray.push(new FormControl(false)));
  }

  submit(): void {
    const selectedFiltersIds = this.form.value.filters
      .map((checked, i) => !!checked )
      .filter(v => v !== null);
    let binary = '';
    for (const element of selectedFiltersIds) {
      if (element) {
        binary += '1';
      } else {
        binary += '0';
      }
    }

    this.rest.filterPlat(binary).subscribe(
      (resp) => {
        console.log(resp);
        this.plats = resp;
      }
    );
  }

  getPlats(): void {
    this.rest.getPlats().subscribe(
      (resp) => {
        console.log(resp);
        this.plats = resp;
      }
    );
  }

  getCategories(): void {
    this.rest.getCategories().subscribe(
      (resp) => {
        this.categories = resp;
      }
    );
  }

  addPlat(): void {
    this.router.navigate(['/plat-add']);
  }

  deletePlat(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce plat ?')) {
      this.rest.deletePlat(id).subscribe();
      this.ngOnInit();
    } else {
      return null;
    }
  }
}
