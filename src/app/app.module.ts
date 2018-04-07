import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FourYouSeeListComponent } from './pages/four-you-see-list/four-you-see-list.component';
import { FourYouSeeService } from './services/four-you-see.service';
import { FilterListPipe } from './pipes/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FourYouSeeListComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FourYouSeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
