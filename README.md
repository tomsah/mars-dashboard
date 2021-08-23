# Mars Dashboard

### Project Description

This is a Mars rover dashboard that consumes the NASA API. it allows the user to
select which rover's information they want to view. Once they have selected a
rover, they will be able to see the most recent images taken by that rover, as
well as important information about the rover and its mission. The app makes use
of JavaScript functional concepts and practices.

### Features

1. the Homepage display the NASA picture of the day with its information
2. You can switch views between opportunity, curiosity, and spirit rovers.
3. use of immutableJS library
4. responsive UI (mobile-first)

### Deployment

1. Clone the project
2. install your decencies run:

`yarn install`

\*\*If you don’t have yarn installed globally, follow their installation
documentation here according to your operating system:
https://yarnpkg.com/lang/en/docs/install

3. You'll need a NASA developer API key in order to access the API endpoints. To
   do that, go here: https://api.nasa.gov/. If you want to simply look around at
   what api endpoints NASA offers, you can use their provided `DEMO_KEY` to do
   this.
4. In your cloned repo, create a `.env` files and add you API_KEY =>
   `API_KEY=XXXX`
5. Run `yarn start` in your terminal and go to `http:localhost:8080` to check
   that your app is working. If you don't see an image on the page, check that
   your api key is set up correctly.
