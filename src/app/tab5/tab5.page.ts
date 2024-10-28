import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {
  text: string = '';

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async saveText(event: Event) {
    event.preventDefault();
    try {
      await this.storage.set('savedText', this.text);
      alert('Texto guardado exitosamente!');
    } catch (error) {
      console.error('Error al guardar el texto:', error);
      alert('Error al guardar el texto.');
    }
  }
}