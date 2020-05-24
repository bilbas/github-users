export default class Store {
  constructor() {
    this.STORAGE_KEY = 'users-github';
  }

  fetch() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  save(users) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }
}