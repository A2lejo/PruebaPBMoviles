import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  text: string = '';

  constructor() {}

  async saveText(event: Event) {
    event.preventDefault();
    try {
      const fileName = 'savedText.txt';
      await Filesystem.writeFile({
        path: fileName,
        data: this.text,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      alert('Texto guardado exitosamente en ' + fileName + '!');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
      alert('Error al guardar el archivo.');
    }
  }
}