import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAlternativeComponent } from './components/footer-alternative/footer-alternative.component';
import { PeopleComponent } from './components/people/people.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ResearchComponent } from './components/research/research.component';
import { FundsComponent } from './components/funds/funds.component';
import { NewsComponent } from './components/news/news.component';
import { OutreachComponent } from './components/outreach/outreach.component';
import { AlumniComponent } from './components/alumni/alumni.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterAlternativeComponent,
    PeopleComponent,
    PublicationsComponent,
    HomeComponent,
    ContactComponent,
    ResearchComponent,
    FundsComponent,
    NewsComponent,
    OutreachComponent,
    AlumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
