
# Frontend
State- React contexts
Auth- All token logic, protected route etc
Api- Axios interceptor, wrapper to store data in context
Components/Atoms- Smallest components that will be reused (button, slider, radio). Ideally no state
Components/Component name- Proper components that import atoms and will be imported by pages

# Backend
Api/routes- Define routes
api/controllers- Define http requests and responses- basic types
api/middlewares- Define stuff to add to requests and responses
data- interact with databases
services- business logic (authentication, data transformation etc)
appconfig- define connection strings etc. Could use env later
