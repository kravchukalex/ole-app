const CLARIN_API = 'http://api-editoriales.clarin.com/api/mobile/v2/oletv/';

class Api {
  async getHome() {
    const query = await fetch(`${CLARIN_API}home`);
    const {items} = await query.json();
    return items;
  }
  async getList() {
    const query = await fetch(`${CLARIN_API}lists/`);
    const {items} = await query.json();
    return items;
  }
  async getCategory(id) {
    const query = await fetch(`${CLARIN_API}lists/${id}`);
    const {items} = await query.json();
    return items;
  }
}

export default new Api();
