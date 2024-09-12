import {Component, Input} from '@angular/core';
import {Biography} from "../../model/biography.entity";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardFooter,
    MatCardTitleGroup,
    MatCardTitle,
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() biography!: Biography;

}
