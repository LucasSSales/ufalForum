import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { ActivityScreenComponent } from './activity-screen/activity-screen.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForumComponent } from './forum/forum.component';
import { SubjectScreenComponent } from './subject-screen/subject-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateClassDialogComponent } from './user-screen/create-class-dialog/create-class-dialog.component';
import { RegistrateClassDialogComponent } from './user-screen/registrate-class-dialog/registrate-class-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { PostsScreenComponent } from './posts-screen/posts-screen.component';
import { ActivityDetailsComponent } from './activity-screen/activity-details/activity-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule,   } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    UserScreenComponent,
    ActivityScreenComponent,
    ForumComponent,
    SubjectScreenComponent,
    RegisterScreenComponent,
    CreateClassDialogComponent,
    RegistrateClassDialogComponent,
    PostsScreenComponent,
    ActivityDetailsComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
  entryComponents:[
    CreateClassDialogComponent,
    RegistrateClassDialogComponent
  ]
})
export class AppModule { }
