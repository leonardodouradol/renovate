const version = 2;
const globalKey = `navigation-menu-cache-v${version}`;
const cacheKey = (uuid: string) => `navigation-menu-cache-v${version}`;
const cacheExpireKey = `navigation-menu-cache-expire-v${version}`;
const cacheRevalidateKey = `navigation-menu-cache-revalidate-v${version}`;