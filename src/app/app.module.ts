// Suggested code may be subject to a license. Learn more: ~LicenseLog:2900705587.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2724659851.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/containers/home/home.component';
import { MembersComponent } from './features/members/containers/members/members.component';
import { EventsComponent } from './features/events/containers/events/events.component';
import { BooksComponent } from './features/books/containers/books/books.component';
import { DiscussionsComponent } from './features/discussions/containers/discussions/discussions.component';
import { ProfileComponent } from './features/profile/containers/profile/profile.component';

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