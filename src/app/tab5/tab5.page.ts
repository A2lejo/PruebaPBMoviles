import { Component } from '@angular/core';

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

    const options = {
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    };

    try {
      const handle = await (window as any).showSaveFilePicker(options);
      const writable = await handle.createWritable();
      await writable.write(this.text);
      await writable.close();
      alert('Texto guardado exitosamente!');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
      alert('Error al guardar el archivo.');
    }
  }
}