import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [HomeComponent, BodyComponent]
})
export class HeaderComponent {

}
