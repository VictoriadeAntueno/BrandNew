import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PoryComponent } from './components/pory/pory.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { NeweducacionComponent } from './components/edu/neweducacion.component';
import { EditeducacionComponent } from './components/edu/editeducacion.component';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './components/edu/educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpComponent,    
    SkillsComponent,
    PoryComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditExperienciaComponent,
    EditAcercaDeComponent,   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot({}),
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
