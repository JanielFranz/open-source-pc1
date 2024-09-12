import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Biography} from "../../model/biography.entity";
import {CardItemComponent} from "../card-item/card-item.component";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CardItemComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnChanges{
  @Input() biographies!: Array<Biography>;

  /**
   * @description This method is called when the input properties of the component changes, and we use it to know if the biographies input property changes.
   * @param changes
   */
  ngOnChanges(changes:SimpleChanges){
    if(changes['biographies']){
      console.log('biographies input changes: ', changes['biographies'].currentValue);
    }
  }
}
