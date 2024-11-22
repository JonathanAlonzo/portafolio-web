import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from "./sections/presentation/presentation.component";
import { ProjectsComponent } from "./sections/projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imgPath: string = '../assets/img/';
  lan: boolean = true;
  title = 'portfolio';
  skillsCode: any[] = [{ name: 'css' }, { name: 'html' }, { name: 'js' }, { name: 'SQL' }];
  socialMedia: any[] = [{ name: 'github' }, { name: 'linkedIN' }];
  allProyects: any[] = [{ name: 'Block de tareas' }, { name: 'Cursos de Impresion 3D' }, { name: 'Nutriologo' }, { name: 'App UTP' }, { name: 'App Comunidad UTP' }, { name: 'App Tiendida en linea' }, { name: 'Tiendita en linea Web' }, { name: 'Huellitas' }];
  menuItems: any[] = [{ imgName: 'contact.png', href: 'presentation' }, { imgName: 'projects.png', href: 'projects' }, { imgName: 'courses.png', href: 'history' }, { imgName: 'email.png', href: 'contact' },]

  constructor() { }

  changeLanguage() {
    this.lan = (this.lan) ? false : true;
  }
}
