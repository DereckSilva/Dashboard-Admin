import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'clientes', component: ClientsComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
