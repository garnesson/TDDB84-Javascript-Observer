"use strict"

class Observable {
    constructor() {
        this.observers = [];
    }

    register(observer) {
        this.observers.push(observer);
    }
    unregister(observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notifyObservers(event) {
        for (var i=0; i < this.observers.length; i++) {
            this.observers[i].notify(event);
        }
    }
}

class Observer {
    constructor(observable) {
        observable.register(this);
    }

    notify(event) {
        document.write(event);
    }
}


(function() {
    // Executes on load
    var subject = new Observable();
    var listner = new Observer(subject);
    subject.notifyObservers("Hello");
})();