import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { MembersComponent } from './features/members/members.component';
import { EventsComponent } from './features/events/events.component';
import { BooksComponent } from './features/books/books.component';
import { DiscussionsComponent } from './features/discussions/discussions.component';
import { ProfileComponent } from './features/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    MembersComponent,
    EventsComponent,
    BooksComponent,
    DiscussionsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }