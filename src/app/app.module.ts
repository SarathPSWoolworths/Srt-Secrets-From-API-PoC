import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import * as env from '../environments/environment'
import { Environment } from '../environments/environment.interface';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [HttpClient],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
   
  return () => httpClient.get(env.initilaizeProxyServiceURL)
    .pipe(
      tap((user: any) => {
        let envDetails: Environment = user;
        env.setEnvValues(envDetails);
        console.log('the env values are ', env.getEnvValues());
      })
    );
}