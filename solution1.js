function Observable() {
    this.observers = [];
}

Observable.prototype = {
    register: function(observer) {
        this.observers.push(observer);
    },
    unregister: function(observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    },
    notifyObservers: function(event) {
        for (var i=0; i < this.observers.length; i++) {
            this.observers[i].notify(event);
        }
    }
};

function Observer(observable) {
    observable.register(this);
}

Observer.prototype = {
    notify: function(event) {
        document.write(event);
    }
};


(function() {
    // Executes on load
    var subject = new Observable();
    var listner = new Observer(subject);
    subject.notifyObservers("Hello");
})();