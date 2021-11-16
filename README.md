# The Movie DB API with React by [@udenizdemirbilek](https://github.com/udenizdemirbilek)

## Home Page
Popular movies are fetched from API with useEffect and are passed down to two MovieRows as props. Seven MovieCards are displayed on MovieRow component. Movie posters, title, released date and average vote are displayed on MovieCard component.
* If invalid custom URL is passed, redirects to not found page.

## Details Page
MovieId is passed as parameter (useParams) to Details component. Details component fetches movie details [title, overview, vote_average, release_date, video_url, poster_path, backdrop_path] from API with useEffect and stores them as state with useState, then displays them on the page. 
* While fetching movie details, loading message is displayed.
* If API returns no movie details with the given id, Details component displays "Resource not found" message.
* If API returns no poster or backdrop image, Details component displays placeholder image.
* If API returns no trailer link, Details component doesn't render trailer Div.
* Backdrop image is displayed as background to details page.

## About Page
No content is displayed on About page.

## Features:

* Application is deployed on Netlify. https://denizreacttmdb.netlify.app/
Github repo is linked to Netlify and the page is hosted on Netlify. Additionally, redirects are set up so that routes also work on Netlify.

* Application is built using ReactJS.
* Application is built using React-Router.
* Application is built using React-Bootstrap.

