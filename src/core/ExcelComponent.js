import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  prepare() {
  }

  init() {
    this.initDomListeners();
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, callback) {
    const unsub = this.emitter.subscribe(event, callback)
    this.unsubscribers.push(unsub);
  }

  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }

  toHTML() {
    return ''
  }
}