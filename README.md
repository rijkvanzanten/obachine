<h1 align="center">
  <img width="300" src="media/logo.png" alt="Logo">
  <br>
  <br>
</h1>

<p align="center">
  <b>🔎 OBA Obachine @ <a href="https://obachine.rijks.website">obachine.rijks.website</a> 🔍</b>
</p>

# Obachine
[![Build Status](https://semaphoreci.com/api/v1/rijkvanzanten/obachine/branches/master/shields_badge.svg)](https://semaphoreci.com/rijkvanzanten/obachine)
![NPM](https://img.shields.io/npm/v/npm.svg)
![Obachine](https://img.shields.io/badge/⚙-obachine-8031D1.svg)

> With Obachine you can Build a custom search engine to search for books in the Amsterdam Public Library

## :book: Introduction
Obachine is a search engine made for the [Amsterdam Public Library (OBA)](https://oba.nl) and is mainly built for their younger age demographic. The purpose of this application is to educate them on the inner workings of a search engine where the outcome is based on the given inputs. However, it's also developed to enhance the quest of finding a book to read; making it easier and enjoyable.

It works by literally building the search query with using the machine blocks which are acting as search filters (i.e. author, genre).

## ⚙️ Installation & Development

### Tech Stack
- HTML, CSS & JS
- [Node.JS](http://nodejs.org) w/
  - [Express](https://expressjs.com) webserver
- [Webpack](https://webpack.js.org/) automation
- [Node OBA API](https://github.com/rijkvanzanten/node-oba-api)
- [Boekenliefde API](https://boekenliefde.nl/api.html)

### Prerequisites
* Make sure you have [`node`](https://nodejs.org/en/) installed on your machine.


## Installation
1. Clone this repo
```bash
$ https://github.com/rijkvanzanten/obachine.git
```

2. Run `npm install` to install all dependencies.

*You will need a `.env` file in the root of your project which contains a public/secret keypair for the OBA API and BoekenLiefde API:*
```
PUBLIC=1234567890
SECRET=1234567890
BL_URL=https://apiurl
BL_KEY=1234567890
```

### Usage
- To use the app in development mode, use `npm start`
- To build the application use `npm run build`
- To test your JS use `npm run lint:js`
- To test your CSS use `npm run lint:style`

The last two commands are running within Webpack, but they are there if you want to use them besides Webpack.

## :white_check_mark: Todo's /  :sparkles: Wishlist
To see all upcoming todo's and features please navigate to the [issues](https://github.com/rijkvanzanten/obachine/issues) page of this repo.

- [x] Add animations for a richer experience
- [ ] Add gamification for a better user experience
- [ ] Add swiping mechanism for filters
- [ ] Add dyslexia filter
- [ ] Add better responsive handling for desktops

## :page_facing_up: Contributing
Please read [Contributing](CONTRIBUTING.md) for details on how to contribute to this project.
To see a list of everybody who participated go to the [Contributors](https://github.com/rijkvanzanten/obachine/graphs/contributors) page.

When you do, please also view the [Code of Conduct](CODE_OF_CONDUCT.md) for this project.


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
