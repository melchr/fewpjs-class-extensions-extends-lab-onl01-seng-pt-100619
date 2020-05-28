class Polygon {
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((memo, i) => memo + i)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.countSides === 3) {
            let [a, b, c] = this.array
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
              return true
            } else { 
                return false 
            }
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.countSides === 4) {
            let [a, b, c, d] = this.array
            if ((a === b) && (b === c) && (c === d)) {
                return true
            } else { 
                return false 
            }
        }
    }

    get area(){
        return this.array[0] * this.array[0]
    }
} 