import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
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

  // Método para alternar o menu hamburger
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para navegar
  navigateTo(option: string) {
    console.log('Navegar para: ', option);
    this.isMenuOpen = false; // Fecha o menu após clicar em uma opção
  }

}
