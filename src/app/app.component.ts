import { Component, OnInit } from '@angular/core';

//Crear una interfaz
interface Tarjeta{
  titulo: string;
  subtitulo:string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi primer app en Angular';
  public ArregloTarjeta: Tarjeta []=[];

ngOnInit():void {//inicializar cuando se ejecuta la pagina}
 this.ArregloTarjeta= [
{titulo:'Video 1', subtitulo: 'Subtitulo de Video',image:"./assets/images/img7.jpg"},
{titulo:'Video 2', subtitulo: 'Subtitulo de Video',image:"./assets/images/img2.jpg"},
{titulo:'Video 3', subtitulo: 'Subtitulo de Video',image:"./assets/images/img3.jpg"},
{titulo:'Video 4', subtitulo: 'Subtitulo de Video',image:"./assets/images/img5.jpg"},
{titulo:'Video 5', subtitulo: 'Subtitulo de Video',image:"./assets/images/img6.jpeg"},



 ]
}

}