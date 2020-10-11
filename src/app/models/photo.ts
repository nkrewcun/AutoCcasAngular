import {Annonce} from './annonce';

export class Photo {
  id: number;
  source: string;
  label: string;
  annonce: Annonce;

  constructor(id: number = null, source: string = null, label: string = null, annonce: Annonce = null) {
    this.id = id;
    this.source = source;
    this.label = label;
    this.annonce = annonce;
  }
}
