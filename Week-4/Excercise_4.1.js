const STATE = {
    PENDING: 'Pending',
    FULFILLED: 'Fulfilled',
    REJECTED: 'Rejected'
}

class MyPromise {
    constructor(callback) {
        // Initial state of Promise is empty
        this.STATE = STATE.PENDING;
        this.value = undefined;
        this.handler = [];

        //Invoke callback by passing the _reslove and the _reject function of our class
        try {
            callback(this._resolve, this._reject);
        }catch (err){
            this._reject(err);
        }   
        }

        _resolve = (value) => {
            this.updateResult(value,STATE.FULFILLED);

        }

        _reject = (error) => {
            this.updateResult(error,STATE.REJECTED)

        }

        then(onSuccess, onFail){
            return new MyPromise ((res, rej)=> {
                this.addHandlers({
                    onSuccess: function(value) {
                        if(value % 2 ){
                            return res(value)
                        }
                    }
                })
            })
        }

        catch(onFail){

        }

        finally(callback){

        }

       

        updateResult(value,state){
            //This is to make process Asnyc
            setTimeout(() => {
                    if(this.STATE !== STATE.PENDING ){
                        return;
                    }

                    if(isThenable(value)) {
                        return value.then(this.resolve, this.reject);
                    }

                    this.value = value;
                    this.STATE = state;

                    this.executeHandlers();
            },0)
        }
}

function isThenable(value) {
     return value instanceof MyPromise;       
}

function randomNumber() {
    let randomNumber = Math.random();

    if (randomNumber / 5) {
        return reject;
    }
    else return resolve
}

console.log(randomNumber());

