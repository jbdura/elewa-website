import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '@elewa-website/models/sections/projects/cards'

@Component({
  selector: 'elewa-website-elewa-project-item-card',
  templateUrl: './elewa-project-item-card.component.html',
  styleUrls: ['./elewa-project-item-card.component.scss'],
})
export class ElewaProjectItemCardComponent implements OnInit {
  
  // Import of the interface
  @Input() project!: ProjectItem;

}
