import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { faHome,faHouse } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faHome = faHome
  faHouse = faHouse

}
