import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,HomeComponent,FooterComponent,AboutComponent,PortfolioComponent,ContactComponent,NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startFramework';
  @ViewChild('navbar') element!:ElementRef; 
  onWindowScroll() {
    let pos:number = (document.documentElement.scrollTop || document.body.scrollTop);
    if(pos>74 ){
      document.querySelector('.navbar')?.classList.remove('py-4') 
    }else{
      document.querySelector('.navbar')?.classList.add('py-4') 
    }
  }
}