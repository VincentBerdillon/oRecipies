// eslint-disable-next-line import/prefer-default-export
export class LocalStorage {
  // La clé me permet de pouvoir récupérer / modifier / supprimer la valeur
  static getItem(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  }
  // La valeur DOIT être une chaine de caractère.
  // On transforme donc notre objet en chaines de caractères
  static setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
