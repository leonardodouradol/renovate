const version = 5;
const globalKey = `navigation-menu-cache-v${version}`;
const cacheKey = (uuid: string) => `navigation-menu-cache-v${version}`;
const cacheExpireKey = `navigation-menu-cache-expire-v${version}`;
const cacheRevalidateKey = `navigation-menu-cache-revalidate-v${version}`;
const cacheRevalidateTime = 1000 * 60 * 5; // 5 minutes
const cacheExpireTime = 1000 * 60 * 60 * 24; // 1 day


const test = 'aaaa';