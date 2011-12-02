# Vectiny

A tiny Javascript 2D Vector Class

All suggestions very welcome.

```javascript
// Create three new vectors and a scalar
var location, velocity, gravity, speed

location = V(100,100)
velocity = V(15,12)
gravity = V(0,-9.2)
    
// Add them
velocity.add(gravity)
location.add(velocity)
    
// Find the magnitude
speed = velocity.mag()
```
