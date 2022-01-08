# Photos from Mars

## Description

An app that shares photos from Mars. 
* A user can like/unlike photos. 
* A user can switch between dark/light themes.

[See Demo Here](https://photos-from-mars.netlify.app/)

## Getting Started

Clone this repo and cd into the imagine-space folder

- Run `npm install` to install all dependencies
- Obtain the API key from [NASA](https://api.nasa.gov/)
- In the `Container Component` in `fetchPhotos()` insert your API key instead of `${process.env.REACT_APP_API_KEY}`
- Run `npm start` to start the server
- Navigate to `http://localhost:3000/`

## Technologies used:

- React.js
- NASA API
- Semantic UI
- Styled Components

## Main Features:

### Toggle between dark/light themes
![Dark Theme](https://res.cloudinary.com/diexi8g0j/image/upload/v1641681665/Screen_Shot_2022-01-08_at_2.35.12_PM_iudjoq.png)
![Light Theme](https://res.cloudinary.com/diexi8g0j/image/upload/v1641681666/Screen_Shot_2022-01-08_at_2.35.15_PM_kpwnfk.png)

### Like/unlike photos (the like icon is animated)
![Like Photo](https://res.cloudinary.com/diexi8g0j/image/upload/v1641681662/Screen_Shot_2022-01-08_at_2.35.35_PM_h59xid.png)

### A User sees a loading state while waiting for NASA’s API to return data
![Loading State](https://res.cloudinary.com/diexi8g0j/image/upload/v1641681658/Screen_Shot_2022-01-08_at_2.35.18_PM_eif62f.png)

### Responsive App
![iPhone Version](https://res.cloudinary.com/diexi8g0j/image/upload/v1641681660/Screen_Shot_2022-01-08_at_2.34.54_PM_ue6otw.png)


#### Created By _**Margarita Morozova**_
