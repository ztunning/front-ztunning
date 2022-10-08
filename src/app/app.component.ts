import { Component } from '@angular/core';
import { faRightFromBracket, faChevronUp, faExclamation, faDollarSign, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ztunning';

  closeIcon = faRightFromBracket;
  plusIcon = faChevronUp;
  dangerIcon = faExclamation;
  moneyIcon = faDollarSign;
  ideaIcon = faLightbulb;

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];



}
