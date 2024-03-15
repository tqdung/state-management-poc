export class Store {
  state = {};
  reducers = {};
  subscribers = [];

  constructor(reducers, initialState) {
    this.state = initialState;
    this.reducers = reducers;
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.reduce = this.reduce.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    return () => this.unsubscribe(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== fn
    );
  }

  reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach((fn) => fn(this.state));
  }
}

export default Store;
