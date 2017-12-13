import { observable, computed, action, extendObservable } from 'mobx';

export default class {
  @observable values = {
    emulation: false,
    allow_cam: false
  };

  constructor(store, initialState) {
    this.store = store;
  }
  @action set(key, value) {
    this.values[key] = value;
    console.log(key + " to " + value)
  }
  @computed get contents() {
    return this.values;
  }
  @action push(key, value) {
    if(!this.values.hasOwnProperty(key))
      this.values[key] = [];
    this.values[key].push(value);
  }
}
