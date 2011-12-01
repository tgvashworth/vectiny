// Very tiny Javscript 2D Vector class
var V = function (x, y) {
	return {
		x: x
	,	y: y
	, magnitude: function () {
			return Math.sqrt((x * x) + (y * y))
		}
	, add: function (a, mod) {
			if(mod === undefined) mod = 1
			return V((x + a.x) * mod, (y + a.y) * mod)
		}
	, sub: function (s, mod) {
			if(mod === undefined) mod = 1
			return V((x - s.x) * mod, (y - s.y) * mod)
		}
	, mult: function (m) {
			return V(x * m, y * m)
		}
	, unit: function () {
			return V(x / this.magnitude(), y / this.magnitude())
		}
	, limit: function (max) {
			if(this.magnitude() > max) return this.unit().mult(max)
			else return V(x, y)
		}
	, toString: function () {
			return "x: " + x + ", y: " + y
		}
	}
}