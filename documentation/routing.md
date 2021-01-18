# Routing
* This project uses reactnavigation v5 for routing.
* Two Navigator is being used.
1. Stack Navigator 
    - src/navigators/stacknavigator
2. Drawer Navigator
    - src/navigators/drawernavigator

## Routing screenflow
* All screens are imported inside screenlist.js file.
    - src/navigators/stacknavigator/screenlist.js
* All screens are nested under stack navigator.
* And this stack navigator is nested inside the drawer navigator.
    - src/navigators/drawernavigator/index.js
    
```javascript
<Stack.Navigator initialRouteName="Home">
    {Object.entries({
        ...screenlist,
    }).map(([name, component]) => (
        return 
        <Stack.Screen 
            key={name} 
            name={name} 
            component={component.screen} 
            options={component.options}/>
    ))}
</Stack.Navigator>
```
* Finally we wrap the drawer navigator inside our Navigation cotainer and render in App.js.
    - src/navigators/index.js
    - src/App.js

> Reason:

- In previous versions of react navigation all configuration was static, so React Navigation could statically find the list of all the navigators and their screens by recursing into nested configurations. 

- As little nesting of navigators as possible to keep your code simpler.

- Drawer navigator nested inside the initial screen of stack navigator with the initial screen's stack header hidden - The drawer can only be opened from the first screen of the stack.

- We dont need send extra parameters to goback to previous page in our navigation.

- If we press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside the nested stack even if there's another navigator as the parent. 
    - Which means suppose we have screens A and B listed in our drawer navigator. And screens C, D and E in our stack navigator. And if or App we move from screen C to Screen A and then go to our Screen D . From Screen D if we try to go back using goBack() method it will not go to ScreenA it will go to Screen C . 
    - We can achieve it through sending extra parameters.
    - For more information [https://reactnavigation.org/docs/nesting-navigators/]
- Drawer is rendered under custom drawer content. 
- Swipe enable has been disabled 

### Task List For Routing
- [X] Create basic routing.
- [ ] Remove header from stack navigation.
- [ ] Create customized Header. 
- [ ] Finish Sidebar design.



        
