import { Component } from '@angular/core';
import { faRightFromBracket, faChevronUp,
faSackDollar, faLightbulb, faUser, faHouse, faEye, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ztunning';

  closeIcon = faRightFromBracket;
  plusIcon = faChevronUp;
  dangerIcon = faXmark;
  moneyIcon = faSackDollar;
  ideaIcon = faLightbulb;
  userIcon = faUser;
  houseIcon = faHouse;
  eyeIcon = faEye;



}
