class Circle {
	constructor (radius,diameter,area,perimeter){
		this.radius=radius;
		this.diameter=diameter;
		this.area=area;
		this.perimeter=perimeter
	}
	calcArea(){
		return 3.142 * (this.radius*this.radius);
	} 

	calcPerimeter(){
		return 3.142 * (this.diameter);
	}
	calcRadius(){
		return 24.861/1.772;
	}
	calcDiameter(){
		return (this.perimeter) / 3.142;
	}

}
const diameter = new Circle(14,21,615.834,65.982)
console.log(diameter.calcDiameter());

const radius = new Circle (14,21,615.834,65.982)
console.log(radius.calcRadius());

const perimeter = new Circle (14,21);
console.log(perimeter.calcPerimeter());

const circle = new Circle(14);
console.log(circle.calcArea());