import {Component, OnInit} from '@angular/core';
import {Biography} from "../../../biographies/model/biography.entity";
import {BiographyApiService} from "../../../biographies/services/biography-api.service";
import {ThisReceiver} from "@angular/compiler";
import {MatToolbar} from "@angular/material/toolbar";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {CardListComponent} from "../../../biographies/components/card-list/card-list.component";
import {FooterComponent} from "../footer/footer.component";
import {map} from "rxjs";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatToolbar,
    LanguageSwitcherComponent,
    CardListComponent,
    FooterComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
/**
 * @description
 * @author Janiel Franz Escalante
 */
export class IndexComponent implements OnInit {
  biographies: Array<Biography> = []

  constructor(private biographyApi: BiographyApiService){
  }

  searchAllBiographies(){
    this.biographyApi.getPeopleBiography()
      .pipe(map((data: any) => data['value'].map((item: any) => {
        const biography = new Biography();
        biography.id = item.Id;
        biography.lastModified = item.LastModified;
        biography.biography = item.Biography;
        biography.dateCreated = item.DateCreated;
        biography.provider = item.Provider;
        biography.title = item.Title;
        biography.publicationDate = item.PublicationDate;
        return biography;
      })))
      .subscribe((biographies: Biography[]) => {
        this.biographies = biographies;
        console.log('biographies', this.biographies[0].id);
        // console.log('first', this.biographies[0].biography);
      })
  }

  ngOnInit(): void {
    this.searchAllBiographies();
  }
}
