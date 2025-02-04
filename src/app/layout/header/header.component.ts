import { Component, HostListener } from '@angular/core';
import {  Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent   {
 
  isMobile: boolean = false;
  isMenuOpen: boolean = false; // Controle do estado do menu

  // Detectar tamanho da tela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 768;
    if (!this.isMobile) {
      this.isMenuOpen = false; // Fecha o menu ao voltar para tela grande
    }
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 
  
  navigateTo(option: string) {
    console.log('Navegar para: ', option);
    this.isMenuOpen = false; 
  }
  
  constructor(private router: Router){}

  voltarPara():void{
    this.router.navigate(['/login'])
  }

}
