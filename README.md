# Indepth of react, redux and react-router


### Install project dependencies
```
npm install
```

### Run the server
```
npm run dev
```


## Why React Router v4
```
Dynamic Routing- earlier routes need to be configured before the start
of application but with react router v4, run time routing is feasible
```

## Router Three Basic Components
```
 1. Router - provides specialized history object
 2. Route/Switch
 3. Link/NavLink - Navlink is special kind of Link that can style itself as active
```

### Things covered
```
 1. Basic Routing - Route and Link
 2. {match} 
 3. Using Regex in query params to control the params
 4. Private Routes using Redirect
 5. Custom Link
 6. Route 
 	* render - takes props [along with history and location]
 	* children - takes match [along with history and location]
 	* component
 7. Prompt - preventing transitions - take location as prop
 8. No Match/ Ambiguous Routes
 	* Use <Route> with no Route
 	* <Redirect/> - will always match
 9. <ScrollToTop/> using withRouter

```
