class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerms: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;

   
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookupAuthor= (authorId) =>this.data.authors[authorId];
  getState() {
    return this.data;
  }
  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  }

  setSearchTerms = (searchTerms) => {
    this.mergeWithState({searchTerms});    
  }

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  }
}

export default StateApi;