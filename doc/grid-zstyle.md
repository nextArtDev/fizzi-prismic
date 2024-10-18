# Creating Z-Style grid 

```typescript
 {slice.map((item, index) => (
            <div
              key={item.id}
              className="grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading} 
                </h2>
                <div className="mt-4 text-xl">
                  {item.body} 
                </div>
              </div>
            </div>
          ))}
```