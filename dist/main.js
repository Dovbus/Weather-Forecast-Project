// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aIdiY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _view = require("./view");
var _tab = require("./tab");
var _storage = require("./storage");
_tab.tab();
const SERVER_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
const SERVER_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const weatherData = {
};
function status(response) {
    if (response.status >= 200 && response.status < 300) return Promise.resolve(response);
    return Promise.reject(new Error(response.statusText));
}
function json(response) {
    return response.json();
}
function jsonCity(data) {
    weatherData.cityName = data.name;
    weatherData.cityTemperature = Math.round(data.main.temp);
    weatherData.icon = data.weather[0].icon;
    weatherData.feelsLike = Math.round(data.main.feels_like);
    weatherData.weather = data.weather[0].main;
    weatherData.sunrise = data.sys.sunrise;
    weatherData.sunset = data.sys.sunset;
    return new Promise((resolve)=>{
        resolve(weatherData);
    });
}
function addZerro(num) {
    if (num >= 0 && num <= 9) return `0${num}`;
    return num;
}
function changeDetailsDateFormat(time) {
    const date = new Date(time * 1000);
    const hour = addZerro(date.getHours());
    const min = addZerro(date.getMinutes());
    return `${hour}:${min}`;
}
function setWeatherData() {
    _view.UI_ELEM.NOWS_CITY.textContent = weatherData.cityName;
    _view.UI_ELEM.NOWS_DEGREES.textContent = `${weatherData.cityTemperature}°`;
    _view.UI_ELEM.NOWS_ICON.src = `http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
    _view.UI_ELEM.DETAILS_CITY.textContent = weatherData.cityName;
    _view.UI_ELEM.DETAILS_TEMP.textContent = `Temperature: ${weatherData.cityTemperature}°`;
    _view.UI_ELEM.DETAILS_FEEL.textContent = `Feels like: ${weatherData.feelsLike}°`;
    _view.UI_ELEM.DETAILS_WEATHER.textContent = `Weather: ${weatherData.weather}`;
    _view.UI_ELEM.DETAILS_SUNRISE.textContent = `Sunrise: ${changeDetailsDateFormat(weatherData.sunrise)}`;
    _view.UI_ELEM.DETAILS_SUNSET.textContent = `Sunset: ${changeDetailsDateFormat(weatherData.sunset)}`;
}
function fetchCityWeather(cityName) {
    const url = `${SERVER_URL_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url).then(status).then(json).then(jsonCity).then(setWeatherData).catch(()=>{
        _view.UI_ELEM.NOWS_CITY.textContent = 'Not Found';
        _view.UI_ELEM.INPUT_NAME.classList.add('error');
    });
}
_view.UI_ELEM.FORM.addEventListener('submit', (event)=>{
    event.preventDefault();
    _view.UI_ELEM.NOWS__LIKE.setAttribute('src', './images/shape.svg');
    _view.UI_ELEM.INPUT_NAME.classList.remove('error');
    fetchCityWeather(_view.UI_ELEM.INPUT_NAME.value);
    undefined.reset();
});
function saveCities(cities) {
    try {
        _storage.storage.saveFavoriteCities(cities);
    } catch (error) {
        alert('out of local storage space!');
    }
}
function changeLocalStorage(newCity) {
    try {
        const favoriteCities = _storage.storage.getFavoriteCities();
        favoriteCities.add(newCity);
        _storage.storage.saveFavoriteCities(favoriteCities);
    } catch (error) {
        alert('out of local storage space!');
    }
}
function removeCity(button) {
    button.parentElement.remove();
}
function filterCities(button) {
    const favoriteCities = _storage.storage.getFavoriteCities();
    const deletedCity = button.parentElement.textContent.trim();
    const FILTERED_CITIES = [
        ...favoriteCities
    ].filter((city)=>city !== deletedCity
    );
    return FILTERED_CITIES;
}
function deleteZerro(num) {
    if (num >= 0 && num <= 9) return num.slice(1);
    return num;
}
function changeFormatForecastDate(date) {
    const months = [
        '',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const fullDate = date.slice(0, 10);
    const arr = fullDate.split('-');
    const month = deleteZerro(arr[1]);
    const newFormatDate = `${arr[2]} ${months[month]}`;
    return newFormatDate;
}
function createTables(forecastList) {
    _view.UI_ELEM.FORECAST_TABLES.innerHTML = '';
    forecastList.forEach((element)=>{
        const table = document.createElement('table');
        table.classList.add('about__table');
        const tr1 = document.createElement('tr');
        tr1.classList.add('about__table-tr');
        const td1 = document.createElement('td');
        td1.classList.add('about__table-td', 'first');
        td1.textContent = changeFormatForecastDate(element.dt_txt);
        const td2 = document.createElement('td');
        td2.classList.add('about__table-td', 'first');
        td2.textContent = element.dt_txt.slice(11, 16);
        tr1.append(td1, td2);
        const tr2 = document.createElement('tr');
        tr1.classList.add('about__table-tr');
        const td3 = document.createElement('td');
        td3.classList.add('about__table-td');
        td3.textContent = `Temperature: ${Math.round(element.main.temp)}°`;
        const td4 = document.createElement('td');
        td4.textContent = element.weather[0].main;
        tr2.append(td3, td4);
        const tr3 = document.createElement('tr');
        tr3.classList.add('about__table-tr');
        const td5 = document.createElement('td');
        td5.classList.add('about__table-td');
        td5.textContent = `Feels like: ${Math.round(element.main.feels_like)}°`;
        const td6 = document.createElement('td');
        const img = document.createElement('img');
        img.classList.add('table-img');
        img.src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
        td6.append(img);
        tr3.append(td5, td6);
        table.append(tr1, tr2, tr3);
        _view.UI_ELEM.FORECAST_TABLES.append(table);
    });
}
async function fetchCityForecast(cityName) {
    const url = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const statusResult = await status(response);
        const data = await json(statusResult);
        const forecastList = data.list.slice(0, 20);
        createTables(forecastList);
    } catch (error) {
        _view.UI_ELEM.FORECAST_CITY.textContent = 'Not Found';
    }
}
function createNewElement(city) {
    const cityElement = document.createElement('li');
    cityElement.classList.add('item__location-link');
    cityElement.textContent = city;
    cityElement.addEventListener('click', ()=>{
        _view.UI_ELEM.NOWS__LIKE.setAttribute('src', './images/liked.svg');
        _view.UI_ELEM.INPUT_NAME.classList.remove('error');
        _view.UI_ELEM.FORECAST_CITY.textContent = cityElement.textContent;
        fetchCityWeather(cityElement.textContent);
        fetchCityForecast(cityElement.textContent);
    });
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', (event)=>{
        event.stopImmediatePropagation();
        const filteredCities = filterCities(event.target);
        saveCities(filteredCities);
        removeCity(event.target);
    });
    cityElement.append(deleteButton);
    return cityElement;
}
_view.UI_ELEM.FORECAST.addEventListener('click', ()=>{
    _view.UI_ELEM.FORECAST_CITY.textContent = _view.UI_ELEM.NOWS_CITY.textContent;
    fetchCityForecast(_view.UI_ELEM.NOWS_CITY.textContent);
});
function addNewCity() {
    if (weatherData.cityName) {
        const newCityElement = createNewElement(weatherData.cityName);
        _view.UI_ELEM.LOCATION_LIST.append(newCityElement);
    }
    return weatherData.cityName;
}
function loadStorage() {
    if (localStorage.getItem('cities')) {
        const favoriteCities = _storage.storage.getFavoriteCities();
        favoriteCities.forEach((city)=>{
            _view.UI_ELEM.LOCATION_LIST.append(createNewElement(city));
        });
    } else localStorage.setItem('cities', '[]');
}
loadStorage();
function setCookie(cityName) {
    const inOneHour = 1 / 24;
    _jsCookieDefault.default.set('city', cityName, {
        expires: inOneHour
    });
}
function createLikedList() {
    _view.UI_ELEM.NOWS__LIKE.addEventListener('click', ()=>{
        _view.UI_ELEM.NOWS__LIKE.setAttribute('src', './images/liked.svg');
        const favoriteCities = _storage.storage.getFavoriteCities();
        if (!favoriteCities.has(weatherData.cityName)) {
            const newCityElem = addNewCity();
            changeLocalStorage(newCityElem);
            setCookie(newCityElem);
        }
    });
}
createLikedList();

},{"js-cookie":"c8bBu","./view":"2GA9o","./tab":"h3Yr9","./storage":"j1l1C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, (function() {
        var current = global.Cookies;
        var exports = global.Cookies = factory();
        exports.noConflict = function() {
            global.Cookies = current;
            return exports;
        };
    })());
})(this, function() {
    'use strict';
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter1, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === 'undefined') return;
            attributes = assign({
            }, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 86400000);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = key + '=' + converter1.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === 'undefined' || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {
            };
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var value = parts.slice(1).join('=');
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter1.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {
                }
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, '', assign({
                }, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({
                }, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({
                }, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter1)
            }
        });
    }
    var api = init(defaultConverter, {
        path: '/'
    });
    /* eslint-enable no-var */ return api;
});

},{}],"2GA9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI_ELEM", ()=>UI_ELEM
);
const UI_ELEM = {
    FORM: document.getElementById('form'),
    INPUT_NAME: document.querySelector('.input-text'),
    SEARCH_BUTTON: document.querySelector('.search-button'),
    NOWS_CITY: document.querySelector('.item-row__text'),
    NOWS_DEGREES: document.querySelector('.degrees'),
    NOWS__LIKE: document.querySelector('.item-row__img'),
    NOWS_ICON: document.querySelector('.cloud'),
    DETAILS_CITY: document.getElementById('details-city'),
    DETAILS_TEMP: document.querySelector('.temp'),
    DETAILS_FEEL: document.querySelector('.feel'),
    DETAILS_WEATHER: document.querySelector('.weather'),
    DETAILS_SUNRISE: document.querySelector('.sunrise'),
    DETAILS_SUNSET: document.querySelector('.sunset'),
    FORECAST: document.getElementById('forecast'),
    FORECAST_CITY: document.querySelector('.city-forecast'),
    FORECAST_TABLES: document.getElementById('tables'),
    LOCATION_LIST: document.getElementById('location-list'),
    LOCATION_LINK: document.querySelector('.item__location-link'),
    DELETE_BUTTONS: document.querySelectorAll('.delete-button')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h3Yr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tab", ()=>tab
);
var _viewJs = require("./view.js");
const tab = function() {
    const TAB_NAV = document.querySelectorAll('.tabs-nav__item');
    const TAB_CONTENT = document.querySelectorAll('.tab');
    let tabName1;
    TAB_NAV.forEach((element)=>{
        element.addEventListener('click', selectTabNav);
    });
    function selectTabNav() {
        TAB_NAV.forEach((element)=>{
            element.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName1 = this.getAttribute('data-tab-name');
        selectTabContent(tabName1);
    }
    function selectTabContent(tabName) {
        TAB_CONTENT.forEach((element)=>{
            element.classList.contains(tabName) ? element.classList.add('is-active') : element.classList.remove('is-active');
        });
    }
};

},{"./view.js":"2GA9o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1l1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "storage", ()=>storage
);
const storage = {
    saveFavoriteCities: (favoriteCities)=>{
        localStorage.setItem('cities', JSON.stringify([
            ...favoriteCities
        ]));
    },
    getFavoriteCities: ()=>{
        const strFavoriteCities = localStorage.getItem('cities');
        const favoriteCities = new Set(JSON.parse(strFavoriteCities));
        return favoriteCities;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aIdiY","bDbGG"], "bDbGG", "parcelRequire756d")

//# sourceMappingURL=main.js.map
