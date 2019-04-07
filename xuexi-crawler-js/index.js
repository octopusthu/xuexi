const rp = require('request-promise');
//const officegen = require('officegen')
const htmlDocx = require('html-docx-js');
const fs = require('fs')
const moment = require('moment');

const filePathPrefix = '/mnt/c/Users/zy/Downloads/data';

const articlePageUrls = [
  'https://www.xuexi.cn/ea1e482bbd4f8cc648a8aa68d6bfbc79/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/966e078eddc11eef38461e44db03061b/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0f2ced629e42f17db4555de9ee7eb9aa/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/782cf9e9cab5fac62a573a4168ecda5f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/6c81be058c17809e3c86d3f4baafe5d5/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/75a1fb7e2f71469ae1ec63db5299b958/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0106faef2ef14324bbbaf8c4cd4e552f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/f761ed3d8cd28395bc1bf0959167c9aa/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/60515ddaf3fab1ec0f269d4f75aab53d/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5cc634a47e6568394e4401a15b740dad/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5888f036cbf838473ad7a9e0508ed074/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/883ccef0d7be52553d847faccf671e0a/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/179b8cc8b0f40eda14dfc1f199b715ba/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/4a44198187cfc109aafd9165b61696c0/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/10a1dec13db8a4762642e4bbe8b344b4/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0d9ad98c62184f411daebc222c85b1be/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/d44bdcd190538481f95829748ead29ff/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/607d9566f011351705bb282e2e2d50c1/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5d23d9050e16006f81f571f89b55a44f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/d21ba5b4aaac1c0b1a5dd661a2e7a362/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/2c978ea7ee12da457963960a82b520a8/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5b222dcca0d841c9de93720248f05414/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/4aa11468dda1f293a556de178fc3135c/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0b342166214ff4c7c68eca0b5cc13fc9/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/e697a5ce7bd90d951e826addb29b913d/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0200f8dbf485cb227757b312bb301263/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/2ae3de0cdab63ed2d453381831f07d97/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/039c24dc2b4dcc32f9c1d68f5518df4f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/b8cd2d95339167923a68521632dfdf9d/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/3f19da2c2ac446599bffc6d3aea103be/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0a5e05c595c4525441c9203e23b22574/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/22f9be39be079d9ed29de056f478fc23/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/c609c24fba1870edb7675fdbd19b882f/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/93ef8c5110537d253be90f629b6bba2f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/8f4e90769a28104f8f33eabe774320ea/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/f82cadbb1de341e907e5a00dc9e55f53/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/1a174227ba63e74c20163315db6e50d7/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/22f7539dec6d91f88a1c7006aa68a77e/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/4c8b7f75eb6978546ff90a2c45910a07/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/4e82e28cea4bf9797e63a4553d11282b/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/3fb4f098461b51e2c376f4b244651f58/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/6e353851ffd9514ef3e084568627ef01/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/c731f092916ca71d7a7384c1afc89912/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/a7960ee3f6d20402bcff8d4475a60ae0/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/208c8675e307710c707543ca2aa3fd28/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/45d46faf4e378e8fa4d9d2ee7f578642/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/78260def3a1700aa597ac8461fa81d6e/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/971568c1cad2ae8514145147a5f29c79/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/09f8df0f0d0f2d1023e232531f5f601f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/c662b543240919f148ea572dda3fbeb4/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/f4ca10c7460fdcf9bf047f1fd5880557/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/4c320b8c91d1c1689705773c9bc7297f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/f35e44416f2cf04cd3a47176b2bb6a05/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5677d09cbd3b3864f9bf8d6b8df40307/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/ea3f4a0dc2921c9db7d17b31e0083214/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/98b944c7bab6e91c389433077ce23d5c/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/7415da5bf086c79efb9249cdeb715763/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/becc7795c9c2a93ffefcd961cff302cf/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5bf0572b7d0e8a7bcdc88d886a4441f2/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/16aee43c2ffbc6c7f8cb3831caab26e2/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/6ac0b838c7532fdff8ebdc80a2e5e62f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/056eb0a890256daf350a8a5fc89bb3ff/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/7b2f6cbec00f8ac8be9f91938d3785a7/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/60a32884205c2076a9053eab27585981/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0dfbd9b55e75ef7f1f3389ed674bb7e9/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/667b16a2356fc7edcd68b436f6f83c5c/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/020b73e1f7c37ccab42681bf38773627/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/fe36d79fee48ea678b24f25a3ec4c715/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5ff44d121511d9f3d6d416a21fac519b/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/47620348b30d71a787403ce56047dff4/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/ec585759d6459ceaa1ea2970e71ce605/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/84f112a94f9b82a4d82107489f89023b/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/0b01167e738be69ecf1fc8299a0041ca/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/c3568ce9818f5c0106357cb4d70a31e2/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/a27fd9b502cef676f7df08d865848605/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/72246d825ed9829675291040ab3da541/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/90ebdbdb8bbfe9527eb38dd69c5fd230/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/ca64cf4b4ea30ffe62ea8a3de845eb75/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/ff2eaf0c4da1d7dad9430e6d4fc9edc5/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/f469692a5e5ad22d68772651b42e4684/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/a0cd0c0b0ded9b96650bb9e7dd2fae5d/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/142b6b7fd4d4448897b853631d36d51e/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/8f149a665c329e795bf2b546946c2006/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/7dcc3fcb1a7f9580eca97080e6ab42fe/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/2997fe566ffb8e455153f0b1fb981f62/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/e1c62ebb1f6a709b6e9d9182104fdd70/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/e0f5679e2e2aa64cc075c3817af07fcb/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/94ef721d83b5bd52772c091fc23141bc/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/8e92f7ee7d143597bae815ae15c79fbe/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/65f5824c2ea609dd2abfbbecbe0fedb0/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/e865cc39a42508b3f5812e3484ee67e5/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/2f9861c9e600a8239017bc396f8c49ba/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/1a90ef2154c4d4747d045a14be709aae/e43e220633a65f9b6d8b53712cba9caa.html',

  'https://www.xuexi.cn/0016e72d27a6de5d026e027839b14922/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/5f289426699d69cd289209b353366532/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/444ccf3f087e6a02bba1b4076adda8a5/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/ca0c32aecaef7bc7306887713fc6fa43/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/3a9a96bd5e7fbb03df71462c3b5b5306/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/d67a68d23b7a45219ce452b071a0ee5f/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/fceddd9ed7396b2f8e6d531a1d7cebae/e43e220633a65f9b6d8b53712cba9caa.html',
  'https://www.xuexi.cn/e12a88dc40f0cf32a5f921f916ba6545/e43e220633a65f9b6d8b53712cba9caa.html',
];

scrapeArticles(articlePageUrls);

function scrapeArticles(urls) {
  for (let url of urls) {
    scrapeArticle(convertArticlePageUrlToJsFileUrl(url));
  }
}

function convertArticlePageUrlToJsFileUrl(articlePageUrl) {
  let jsFileUrl = articlePageUrl;
  const lastIndexOfSlash = jsFileUrl.lastIndexOf('/');
  jsFileUrl = jsFileUrl.substr(0, lastIndexOfSlash + 1) + 'data' + jsFileUrl.substr(lastIndexOfSlash + 1);
  const lastIndexOfDot = jsFileUrl.lastIndexOf('.');
  jsFileUrl = jsFileUrl.substr(0, lastIndexOfDot + 1) + 'js';
  return jsFileUrl;
}

function scrapeArticle(url) {
  rp(url)
    .then(function (jsFileContent) {
      try {

        const detail = parseArticleDetail(jsFileContent);
        let id = detail._id;
        let program = parseFromStringArray(detail.programa_id); // '党章党规'
        let category = parseFromStringArray(detail.cate_id); // '党内法规'
        let type = parseFromStringArray(detail.type); // '条例'
        let releaseTime = detail.hex_release_time;
        let releaseDate = moment(releaseTime).format('YYYYMMDD');
        let source = detail.source;
        let title = detail.frst_name;

        let dir = filePathPrefix + ((category && type) ? '/' + category + '/' + type : '');
        let fileName = (releaseDate ? releaseDate : '') + (source ? '_' + source : '') + '_' + title + '.docx';
        saveAsWordFile(dir, fileName, detail.content);

        console.log('Scraped article ' + title + ' and saved to file ' + dir + '/' + fileName);

      } catch (err) {
        console.error('Exception scraping article at url: ' + url, err);
      }
    })
    .catch(function (err) {
      console.error('Failed to crawl article at url: ' + url, err);
    });
}

function parseArticleDetail(jsFileContent) {
  let globalCache = null;
  eval(jsFileContent);
  return globalCache[Object.keys(globalCache)[0]].detail;
}

function parseFromStringArray(str) {
  let arr = JSON.parse(str);
  if (arr && arr[0]) { return arr[0]; }
  return null;
}

function saveAsWordFile(dir, fileName, content) {

  // let docx = officegen('docx')
  // docx.on('finalize', function (written) { console.log('Finish to create a Microsoft Word document.') })
  // docx.on('error', function (err) { console.err(err) })
  // let pObj = docx.createP()
  // pObj.addText(content)

  fs.mkdir(dir, { recursive: true }, (err) => { if (err) throw err; });
  fs.writeFile(dir + '/' + fileName, htmlDocx.asBlob(content), (err) => { if (err) throw err; });
}