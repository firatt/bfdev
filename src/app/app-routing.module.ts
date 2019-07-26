import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ResearchComponent } from '../app/components/research/research.component';
import { PeopleComponent } from '../app/components/people/people.component';
import { PublicationsComponent } from '../app/components/publications/publications.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { FundsComponent } from '../app/components/funds/funds.component';
import { NewsComponent } from '../app/components/news/news.component';
import { OutreachComponent } from '../app/components/outreach/outreach.component';
import { AlumniComponent } from '../app/components/alumni/alumni.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'funds', component: FundsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'outreach', component: OutreachComponent },
  { path: 'alumni', component: AlumniComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
