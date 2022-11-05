import { Component } from '@angular/core';
import { faHouse,faUsers,faShop,faCoins,faChartSimple,faCalendarDay,faUtensils,faUserTie,faRocket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor() { }

  faHouse = faHouse
  faUsers = faUsers
  faShop = faShop
  faCoins = faCoins
  faChartSimple = faChartSimple
  faCalendarDay = faCalendarDay
  faUtensils = faUtensils
  faUserTie = faUserTie
  faRocket = faRocket

}
