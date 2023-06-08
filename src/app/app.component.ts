import { Component } from '@angular/core';
import Product from "./products.model"


@Component( {
  selector: 'app-root'
  , templateUrl: './app.component.html'
  , styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'angular-shop';
  name = "name1"
  img = "https://source.unsplash.com/random"
  btnDisabled = true
  value = 10
  text = ""
  emogis: string[] = ['😂' , '🐦', '🐳','🌮', '💚']
  newEmogi: string = ""
  widthImage: number = 10
  box = {
    width: 10,
    height: 10,
    background: "whidt"
  }
  register = {
    "name": "",
    "email": "",
    "password": "",
  }
  products: Product[] = [
    {
      "name": "product1",
      "price": 10,
      "img": "https://source.unsplash.com/random"
    },
    {
      "name": "product2",
      "price": 20,
      "img": "https://source.unsplash.com/random"
    },
    {
      "name": "product3",
      "price": 30,
      "img": "https://source.unsplash.com/random"
    },
    {
      "name": "product4",
      "price": 40,
      "img": "https://source.unsplash.com/random"
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  upValue() {
    this.value += 1
  }

  downValue() {
    this.value -= 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changeText(event: Event) {
    const element = event.target as HTMLInputElement
    this.text = element.value
  }

  addEmogi() {
    this.emogis.push(this.newEmogi)
    this.newEmogi = ""
  }

  deleteEmogi(position: number) {
    this.emogis.splice(position)
  }

  onRegister() {
    console.log(this.register)
  }

}
