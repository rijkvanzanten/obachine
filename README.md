<h1 align="center">
  <img width="300" src="media/logo.png" alt="Logo">
  <br>
  <br>
</h1>

<p align="center">
  <b>🔎 Build your own search engine @ <a href="https://obachine.rijks.website">obachine.rijks.website</a> 🔍</b>
</p>

# Obachine
[![Build Status](https://semaphoreci.com/api/v1/rijkvanzanten/obachine/branches/master/shields_badge.svg)](https://semaphoreci.com/rijkvanzanten/obachine)

## Overview
Obachine is a search engine made for the [Amsterdam Public Library (OBA)](https://oba.nl) and is mainly built for their younger age demographic. The purpose of this application is to educate them on the inner workings of a search engine where the outcome is based on the given inputs. However, it's also developed to enhance the quest of finding a book to read; making it easier and enjoyable.

It works by literally building the search query with using the machine blocks which are acting as search filters (i.e. author, genre).

## Tech Stack
- HTML, CSS & JS
- [Node.JS](http://nodejs.org) w/
  - [Express](https://expressjs.com) webserver
- [Webpack](https://webpack.js.org/) automation

## Installation
Clone this repo
```bash
$ https://github.com/rijkvanzanten/obachine.git
```

and run `npm install` to install all dependencies.

You will need a `.env` file in the root of your project which contains a public/secret keypair for the OBA API:
```
PUBLIC=1234567890
SECRET=1234567890
```

## Usage
- To use the app in development mode, use `npm start`
- To build the application use `npm run build`
- To test your JS use `npm run lint:js`
- To test your CSS use `npm run lint:style`

The last two commands are running within Webpack, but they are there if you want to use them besides Webpack.

## Wishlist
- [ ] Add gamification for a better user experience
- [ ] Add swiping mechanism for filters
- [ ] Add dyslexia filter
- [ ] Add animations for a richer experience
- [ ] Add better responsive handling for desktops

## Contributing
PRs are — as always — very welcome.

### Writing commit messages
_Based on [**Chris Beams**](https://chris.beams.io/posts/git-commit/) seven Rules of a great Git commit message._

1. Separate subject from body with a blank line.
1. Limit the subject line to 50 characters.
1. Do not end the subject line with a period.
1. Use the imperative mood in the subject line.
1. Wrap the body at 72 characters.
1. Use the body to explain what and why vs. how.

**Example commit title:**
```
💄 Add styling for navigation bar
```
[Gitmoji](https://gitmoji.carloscuesta.me/) is used for commit messages

## Core Team
![Rijk van Zanten](https://avatars0.githubusercontent.com/u/9141017?v=3&s=460) | ![Giulia Meerman](https://avatars0.githubusercontent.com/u/14131081?v=3&s=460) | ![Danny de Vries](https://avatars1.githubusercontent.com/u/22084444?v=3&s=460) | ![Mirza van Meerwijk](https://avatars2.githubusercontent.com/u/12242967?v=3&s=460) | ![Pierre Bleeker](https://avatars0.githubusercontent.com/u/12711649?v=3&s=460)
---|---|---|---|---
[Rijk van Zanten](https://github.com/rijkvanzanten) | [Giulia Meerman](https://github.com/GiuliaM) | [Danny de Vries](https://github.com/dandevri) | [Mirza van Meerwijk](https://github.com/Mimaaa) | [Pierre Bleeker](https://github.com/pierman1)

## License

MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
