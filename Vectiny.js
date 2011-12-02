// Very tiny Javscript 2D Vector class
var V = function (x, y) {
	return {
		x: x
	,	y: y
	, add: function (a, mod) {
			if(mod === undefined) mod = 1
			this.x = (this.x + a.x) * mod
			this.y = (this.y + a.y) * mod
			return this
		}
	, sub: function (s, mod) {
			if(mod === undefined) mod = 1
			this.x = (this.x - s.x) * mod
			this.y = (this.y - s.y) * mod
			return this
		}
	, mult: function (m) {
			this.x = this.x * m
			this.y = this.y * m
			return this
		}
	, unit: function () {
	    var mag = this.magnitude()
		  this.x = this.x / mag
		  this.y = this.y / mag
		  return this
		}
	, limit: function (max) {
			if(this.magnitude() > max) this.unit().mult(max)
			else this
		}
  , magnitude: function () {
			return Math.sqrt((this.x * this.x) + (this.y * this.y))
		}
	, to: function (b) {
	    return Math.sqrt(Math.pow(b.x-this.x,2)+Math.pow(b.y-this.y,2))
	  }
	, toString: function () {
			return "x: " + this.x + ", y: " + this.y
		}
	}
}