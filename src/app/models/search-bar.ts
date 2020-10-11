export class SearchBar {

  prixMax: number;
  prixMin: number;
  kilometrageMax: number;
  kilometrageMin: number;
  anneeCirculationMax: number;
  anneeCirculationMin: number;

  constructor(prixMax: number = null,
              prixMin: number = null,
              kilometrageMax: number = null,
              kilometrageMin: number = null,
              anneeCirculationMax: number = null,
              anneeCirculationMin: number = null) {
    this.prixMax = prixMax;
    this.prixMin = prixMin;
    this.kilometrageMax = kilometrageMax;
    this.kilometrageMin = kilometrageMin;
    this.anneeCirculationMax = anneeCirculationMax;
    this.anneeCirculationMin = anneeCirculationMin;
  }
}
