# Vectiny

A tiny Javascript 2D Vector Class

All suggestions very welcome.

```javascript
// Create three new vectors and a scalar
var loc, vel, grav, speed;

loc = V(100,100);
vel = V(15,12);
grav = V(0,-9.2);

// Add them
vel.add(grav);
loc.add(vel);

// Find the magnitude
speed = vel.magnitude();
```
