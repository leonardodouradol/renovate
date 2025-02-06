const version = 1;
const globalKey = `navigation-menu-cache-v1${version}`;
const cacheKey = (uuid: string) => `navigation-menu-cache-v1${version}`;
const cacheExpireKey = `navigation-menu-cache-expire-v${version}`;
const cacheRevalidateKey = `navigation-menu-cache-revalidate-v${version}`;