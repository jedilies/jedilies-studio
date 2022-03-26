# favicons insipration
https://github.com/joethei/obisidian-link-favicon 

## refs
- [link](https://favicongrabber.com/service-api-reference) 
- [importing data](https://www.sanity.io/guides/guide-importing-data-from-external-sources)
- [codepen example](https://codepen.io/djekl/pen/QWKNNjv)
- [unavatar](https://github.com/microlinkhq/unavatar)
- [icon horse DEV](https://dev.to/mtimofiiv/how-why-i-built-a-favicon-fetching-service-32nl)

---

```jsx
import {request} from "obsidian";
import {FaviconPluginSettings} from "./settings";

export interface IconProvider {
	name: string;
	url: (domain: string, settings: FaviconPluginSettings) => Promise<string>;
}

export const providers: Record<string, IconProvider> = {
	'google': {name: 'Google', url: domain => Promise.resolve("https://www.google.com/s2/favicons?domain=" + domain)},
    // https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sanity.io&size=64
	'duckduckgo': {name: 'DuckDuckGo', url: domain => Promise.resolve("https://icons.duckduckgo.com/ip3/" + domain + ".ico")},
	'iconhorse': {name: 'Icon Horse', url: domain => Promise.resolve("https://icon.horse/icon/" + domain)},
	'splitbee': {name: 'Splitbee', url: domain => Promise.resolve("https://favicon.splitbee.io/?url=" + domain)},
	'besticon': {name: 'The Favicon Finder', url: (domain, settings) => {
		const host = settings.provider === "besticon" ? settings.providerDomain : settings.fallbackProviderDomain
		return Promise.resolve(host + "/icon?url=" + domain + "&size=32..64..256");
	}},
	'favicongrabber': {name: 'Favicon Grabber', url: (async (domain) => {
			const icons = JSON.parse(await request({
				method: "GET",
				url: "https://favicongrabber.com/api/grab/" + domain
			}));
a
			if(icons.length === 0) return Promise.resolve("http://invalid.stuff");
			return Promise.resolve(icons.icons[0].src);
		})},
}
```

---

```html
<!-- Google API -->
<div class="icons">
    <span>Google API</span>
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://sanity.io&sz=32" />
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=xauth.dev&sz=32" />
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=alanwynn.dev&sz=32" />
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=molekula.com&sz=32" />
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=friendlydev.com&sz=32" />
    <img src="https://s2.googleusercontent.com/s2/favicons?domain=mygamerprofile.net&sz=32" />
</div>
<br />

<!-- DDG API -->
<div class="icons">
    <span>DDG API</span>
    <img src="https://icons.duckduckgo.com/ip3/xapi.us.ico" />
    <img src="https://icons.duckduckgo.com/ip3/domain=https://sanity.io.ico" />
    <img src="https://icons.duckduckgo.com/ip3/xauth.dev.ico" />
    <img src="https://icons.duckduckgo.com/ip3/alanwynn.dev.ico" />
    <img src="https://icons.duckduckgo.com/ip3/molekula.com.ico" />
    <img src="https://icons.duckduckgo.com/ip3/friendlydev.com.ico" />
    <img src="https://icons.duckduckgo.com/ip3/mygamerprofile.net.ico" />
</div>
<br />

<!-- unavatar API -->

<div class="icons">
    <span>Unavatar API</span>
    <img src="https://unavatar.now.sh/xapi.us" />
    <img src="https://unavatar.now.sh/xauth.dev" />
    <img src="https://unavatar.now.sh/alanwynn.dev" />
    <img src="https://unavatar.now.sh/molekula.com" />
    <img src="https://unavatar.now.sh/friendlydev.com" />
    <img src="https://unavatar.now.sh/mygamerprofile.net" />
</div>
```