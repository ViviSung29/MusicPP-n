import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MyMusicComponent} from './my-music/my-music.component';
import {CurMusicComponent} from './cur-music/cur-music.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {AccountComponent} from './account/account.component';
import {BottomNavComponent} from './bottom-nav/bottom-nav.component';
import {AppSearchComponent} from './app-search/app-search.component';
import {BannerComponent} from './banner/banner.component';
import {NavlistComponent} from './navlist/navlist.component';
import {AlbumRecommendComponent} from './album-recommend/album-recommend.component';
import {ArticleRecommendComponent} from './article-recommend/article-recommend.component';
import {MTitleComponent} from './m-title/m-title.component';
import {AlbumeListRecommendComponent} from './albume-list-recommend/albume-list-recommend.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/AuthService';
import { LoggedInGuard} from './guards/LoggedIn.guard';

declare var $: any;

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'my-music', component: MyMusicComponent},
  {path: 'cur-music', component: CurMusicComponent},
  {path: 'dynamic', component: DynamicComponent},
  {path: 'account', component: AccountComponent, canActivate: [LoggedInGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMusicComponent,
    CurMusicComponent,
    DynamicComponent,
    AccountComponent,
    BottomNavComponent,
    AppSearchComponent,
    BannerComponent,
    NavlistComponent,
    AlbumRecommendComponent,
    ArticleRecommendComponent,
    MTitleComponent,
    AlbumeListRecommendComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
