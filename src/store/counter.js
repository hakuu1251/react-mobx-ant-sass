import { makeAutoObservable } from "mobx"

class Counter {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    inc() {
        this.count++
    }

	dec() {
		this.count--
	}
}

export default new Counter()