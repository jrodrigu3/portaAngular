import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() skillName!: string;
  @Input() skillIcon!: string;

}
