# Vectiny

A tiny Javascript 2D Vector Class

All suggestions very welcome.

```javascript
// Create three new vectors
location = V(100,100)
velocity = V(15,12)
gravity = V(0,-9.2)
    
// Add them
velocity = velocity.add(gravity)
location = location.add(velocity)
    
// Find the magnitude
speed = velocity.mag()
```
