# @Pavlov Auth
  * [Setup](#setup)
  * [Login page](#login-page)
     * [Configuration](#configuration)
  * [Auth Service](#auth-service)
     * [Configuration](#configuration-1)
     * [Interaction](#interaction)
        * [Swagger Options](#swagger-options)
        * [After Login Route](#after-login-route)
        * [Route To Login](#route-to-login)
        * [Backend Name](#backend-name)
  * [Auth Guard Service](#auth-guard-service)
     * [Configuration](#configuration-2)
     * [Interaction](#interaction-1)
  * [Auth Crud Service](#auth-crud-service)
     * [Configuration](#configuration-3)
     * [Interaction](#interaction-2)
  * [Auth Store Service](#auth-store-service)
     * [Configuration](#configuration-4)
     * [Token](#token)
        * [Interaction](#interaction-3)
     * [AuthTime](#authtime)
        * [Interaction](#interaction-4)
     * [AuthDuration](#authduration)
        * [Interaction](#interaction-5)
  * [User Principal Service](#user-principal-service)
     * [Configuration](#configuration-5)
        * [Interaction](#interaction-6)
  * [Interfaces](#interfaces)
     * [Configuration](#configuration-6)
---
## Setup
1. `npm install @pavlov/auth --save` to install to `./package.json`.
2. Initialize in `./src/app/app.module.ts`.
    - `import {AuthModule} from '@pavlov/auth';`
    - `imports: [AuthModule],`
---
## Login page 
### Configuration
*See section [Setup](#Setup) to initialize*
1. Configure `./src/app/routes.ts` for login component
    - `import {LoginComponent} from '@pavlov/auth';`
    -       {path: '{url}', component: LoginComponent},
2. Words are configured in ngx-translate file `./src/assets/i18n/{lang}.json`.
    -         "login": {
                "title": "Pavlov Simple Sample",
                "header": "Login",
                "username": "Username",
                "password": "Password",
                "error": "Issue with login name or password"
              },
---
## Auth Service
Entry service to configure the library with custom information.
### Configuration
1. Component. 
    - `import {AuthService} from '@pavlov/auth';`
    - `constructor(public authService: AuthService)`
    - `this.authService.{function}`
### Interaction
#### Swagger Options
Configuration settings for backend.
```
this.authService.swaggerOptions().get().subscribe(o => console.log(o));
this.authService.swaggerOptions().set({swaggerOption});
```
- **get**: Returns an Observable for currently configured swagger options.
- **set**: Sets a new swagger options to be used by [AuthCrudService](#auth-crud-service).
Value must be a swagger option.
#### After Login Route
This is the route used to navigate to after a successful login.
```
this.authService.afterLoginRoute().get().subscribe(o => console.log(o));
this.authService.afterLoginRoute().set({route});
```
- **get**: Returns an Observable for currently configured route.
- **set**: Sets a string to be used for `this.router.navigate({route})` in [Login Page](#login-page).  Value must be a string.
#### Route To Login
```
this.authService.routeToLogin();
```
- **routeToLogin**: Function that routes to the login component configured in `./src/app/routes.ts`..
#### Backend Name
*Default value is set to first entry in the window.env property set in the spa-env.js file.*
```
this.authService.backendName().get().subscribe(o => console.log(o));
this.authService.backendName().set({name});
```
- **get**: Returns an Observable for currently configured backend.
- **set**: Sets a string to be used by [AuthCrudService](#auth-crud-service) base url.  Value must be a string.
***
## Auth Guard Service
### Configuration
*See section [Setup](#Setup) to initialize*
1. Import service into `./src/app/routes.ts`.
    - `import {AuthGuard} from '@pavlov/auth'`;
2. Configure route in `./src/app/routes.ts`.
    - `{path: 'example', component: ExampleComponent, canActivate: [AuthGuard]},`
### Interaction
```
this.principalService.isAuthenticated({optional route to login boolean})
```
- **isAuthenticated**: 
    - Input an optional boolean to route to login page.  
    - Returns an Observable boolean to see if authenticated.
---
## Auth Crud Service
### Configuration
*See section [Setup](#Setup) to initialize*
1. Component. 
    - `import {AuthCrudService} from '@pavlov/auth';`
    - `constructor(public authCrud: AuthCrudService)`
    - `this.authCrud.{function}`
---
### Interaction
```
this.authCrud.jsonLogin(body)   .subscribe(o => console.log(o));
this.authCrud.webGetPrincipal() .subscribe(o => console.log(o));
this.authCrud.postLogout()      .subscribe(o => console.log(o));
this.authCrud.refreshToken()    .subscribe(o => console.log(o));
```
- **jsonLogin** Input is of type LoginRequestJson.  Returns an Observable of type TokenResponse.
- **webGetPrincipal**: Returns an Observable of type Principal
- **postLogout**: Returns an Observable of type Principal
- **refreshToken**: Returns an Observable of type TokenResponse
--- 
## Auth Store Service
The authorization store service is used to get, set, and delete local storage items related to
authorization.
### Configuration
*See section [Setup](#Setup) to initialize*
1. Component. 
    - `import {AuthStoreService} from '@pavlov/auth';`
    - `constructor(public authStore: AuthStoreService)`
    - `this.authStore.{function}`
---
### Token
- Local storage name `__dhc_auth_token`
#### Interaction
```
this.authStore.token.get()
this.authStore.token.set({value})
this.authStore.token.delete()
```
- **get**: Returns a string representation of the authorization token stored.
- **set**: Sets local storage with a value.  Value must be a string.
- **delete**: Removes local storage item.
---
### AuthTime
- Local storage name `__dhc_auth_time`
#### Interaction
```
this.authStore.authTime.get()
this.authStore.authTime.set({value})
this.authStore.authTime.delete()
```
- **get**: Returns a string representation of a number.
- **set**: Sets local storage with a value.  Value can be a string or number.
- **delete**: Removes local storage item. 
---
### AuthDuration
- Local storage name `__dhc_auth_duration`
#### Interaction
```
this.authStore.authDuration.get()
this.authStore.authDuration.set({value})
this.authStore.authDuration.delete()
```
- **get**: Returns a string representation of a date object.
- **set**: Sets local storage with a date.  Value must be a Date object.
- **delete**: Removes local storage item.

---
## User Principal Service
### Configuration
*See section [Setup](#Setup) to initialize*
1. Component. 
    - `import {AuthService} from '@pavlov/auth';`
    - `constructor(public principalService: PrincipalService)`
    - `this.principalService.{function}`
#### Interaction
```
this.principalService.principal.get()
this.principalService.principal.set()
this.principalService.principal.delete()
```
- **get**: Returns a replay subject on data stored from webGetPrincipal.
- **set**: Sets a the replay subject next data from a crud webGetPrincipal call.
- **delete**: Closes all subscriptions to the get call.
---
## Interfaces
### Configuration
```
import {
    LoginRequestJson,
    Principal,
    TokenRefreshRequest,
    TokenResponse
} from '@pavlov/auth';
```
---

