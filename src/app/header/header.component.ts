import {Component, OnInit, ViewChild} from '@angular/core';
import {Categorie, Plat, RestService} from '../rest.service';
import {NgForm} from '@angular/forms';
import {PlatComponent} from '../plat/plat.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(PlatComponent) platComponent;

  categories: Categorie[] = [];
  plats: Plat[] = [];

  constructor(public rest: RestService, private data: DataService) { }

  ngOnInit(): void {
    this.getCategories();
    this.data.currentPlats.subscribe(plats => this.plats = plats);
  }

  onSubmit(form: NgForm): void {
    this.rest.searchPlat(form.value.search).subscribe(
      (resp) => {
        this.data.searchPlats(resp);
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

}
