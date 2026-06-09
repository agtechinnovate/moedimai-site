const host = process.env.INDEXNOW_HOST || "www.moedim.ai";
const protocol = process.env.INDEXNOW_PROTOCOL || "https";
const key = "c3f1d6a7b98e4c62a5190fed247b3a85";
const origin = `${protocol}://${host}`;
const sitemapUrl = `${origin}/sitemap.xml`;
const keyLocation = `${origin}/${key}.txt`;

function parseSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]).filter(Boolean);
}

const sitemapResponse = await fetch(sitemapUrl);
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`);
}

const urls = parseSitemapUrls(await sitemapResponse.text()).filter((url) => url.startsWith(origin));
if (urls.length === 0) {
  throw new Error(`No ${origin} URLs found in ${sitemapUrl}`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList: urls,
  }),
});

const body = await response.text();
console.log(
  JSON.stringify(
    {
      host,
      submitted: urls.length,
      status: response.status,
      ok: response.ok,
      body,
    },
    null,
    2,
  ),
);

if (!response.ok && response.status !== 202) {
  process.exitCode = 1;
}
