# xuexi

## Requirements

- The main requirement is to scrape the contents of all articles of a certain column (in fact, from its sub columns) and save them as human-readable documents.

- Possible future requirements are to scrape other similar/dissimilar columns, update the scraped contents (as new articles are posted every day), convert the scraped contents to other formats, etc.

## Design

1. Scrape from the column index the addresses of all sub column indexes
2. Scrape from the sub column indexes the addresses of all articles (article lists may span multiple pages)
3. Scrape article contents
4. Save article metadata (url, title, time, source)
5. Save article contents as documents

## Samples

- Column index
  - [HTML file](./samples/column-index.html)
    - [https://www.xuexi.cn/db30203b53baae523b23ca9583a33612/db93dd803f9534aa6609cc91fa3fba9b.html](https://www.xuexi.cn/db30203b53baae523b23ca9583a33612/db93dd803f9534aa6609cc91fa3fba9b.html)
- Sub column index
  - [HTML file](./samples/sub-column-index.html)
    - [https://www.xuexi.cn/fd4fb77375f9cd9d861d49fca07019b1/9a3668c13f6e303932b5e0e100fc248b.html](https://www.xuexi.cn/fd4fb77375f9cd9d861d49fca07019b1/9a3668c13f6e303932b5e0e100fc248b.html)
- Article
  - [HTML file](./samples/article.html)
    - [https://www.xuexi.cn/782cf9e9cab5fac62a573a4168ecda5f/e43e220633a65f9b6d8b53712cba9caa.html](https://www.xuexi.cn/782cf9e9cab5fac62a573a4168ecda5f/e43e220633a65f9b6d8b53712cba9caa.html)
  - [Data js file](./samples/article-data.js)
    - [https://www.xuexi.cn/782cf9e9cab5fac62a573a4168ecda5f/datae43e220633a65f9b6d8b53712cba9caa.js](https://www.xuexi.cn/782cf9e9cab5fac62a573a4168ecda5f/datae43e220633a65f9b6d8b53712cba9caa.js)

## Site architecture of xuexi

- All pages are of the same url form: ${base-url}/${page-id}/${template-id}.html
  - ${base-url} = [https://www.xuexi.cn/](https://www.xuexi.cn/)

## Implementation

- The column index
  - [https://www.xuexi.cn/db30203b53baae523b23ca9583a33612/db93dd803f9534aa6609cc91fa3fba9b.html](https://www.xuexi.cn/db30203b53baae523b23ca9583a33612/db93dd803f9534aa6609cc91fa3fba9b.html)

  - get all sub columns
    - [https://www.xuexi.cn/9b55c5be5c44c6011d7d3f29b26a27be/9a3668c13f6e303932b5e0e100fc248b.html](https://www.xuexi.cn/9b55c5be5c44c6011d7d3f29b26a27be/9a3668c13f6e303932b5e0e100fc248b.html)
    - [https://www.xuexi.cn/fd4fb77375f9cd9d861d49fca07019b1/9a3668c13f6e303932b5e0e100fc248b.html](https://www.xuexi.cn/fd4fb77375f9cd9d861d49fca07019b1/9a3668c13f6e303932b5e0e100fc248b.html)
    - ...
- Misc
  - [https://www.xuexi.cn/dataindex.js](https://www.xuexi.cn/dataindex.js)

## References
