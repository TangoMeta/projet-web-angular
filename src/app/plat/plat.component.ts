import { Component, OnInit } from '@angular/core';
import { RestService, Plat } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  plats: Plat[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getPlats();
  }

  getPlats(): void {
    this.rest.getPlats().subscribe(
      (resp) => {
        console.log(resp);
        this.plats = resp;
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
