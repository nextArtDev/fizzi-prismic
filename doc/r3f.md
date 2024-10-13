# React Three fiber points

Styling a Canvas to be at the center of screen:

```typescript
 <Canvas
  style={{
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 30,
  }}
  ....
  />
```

## 3D soda can

- Export gltf 2.0
- Making sure we're _compressing_ and _apply modifiers_ to it when we export.
- from _.bin_ and _.gltf_ upload it to __gltf.pmnd.rs__ .

## View

Views use gl.scissor to cut the viewport into segments. You tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to have multiple views with a single, performant canvas. These views will follow their tracking elements, scroll along, resize, etc.

It is advisable to re-connect the event system to a parent that contains both the canvas and the html content. This ensures that both are accessible/selectable and even allows you to mount controls or other deeper integrations into your view.

You can define as many views as you like, directly mix them into your dom graph, right where you want them to appear. View is an unstyled HTML DOM element (by default a div, and it takes the same properties as one). Use View.Port inside the canvas to output them. __The canvas should ideally fill the entire screen with absolute positioning, underneath HTML or on top of it, as you prefer.__

```typescript
return (
  <main ref={container}>
    <h1>Html content here</h1>
    <View style={{ width: 200, height: 200 }}>
      <mesh geometry={foo} />
      <OrbitControls />
    </View>
    <View className="canvas-view">
      <mesh geometry={bar} />
      <CameraControls />
    </View>
    <Canvas eventSource={container}>
      <View.Port />
    </Canvas>
  </main>
)
```

You can define as many views as you like, directly mix them into your dom graph, right where you want them to appear. View is an unstyled HTML DOM element (by default a div, and it takes the same properties as one). Use View.Port inside the canvas to output them. The canvas should ideally fill the entire screen with absolute positioning, underneath HTML or on top of it, as you prefer