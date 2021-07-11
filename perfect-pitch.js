const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var capabilities = {
 'browserName' : 'Chrome',
 'browser_version' : '91.0',
 'os' : 'Windows',
 'os_version' : '10',
 'resolution' : '1024x768',
 'browserstack.user' : 'zubair_jEDRAM',
 'browserstack.key' : 'jmxR92yGxCxwbXGBKrKK',
 'name' : 'www.justwunce.com'
}
let driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();
  var myWebsite = 'http://www.justwunce.com';
  var ProspectWebsite = 'http://example.com';
  var CustomProspectData = 'https://www.google.com';
  var CaseStudyFirst = 'https://lh6.googleusercontent.com/jqT1wPCYQ1xl4ekU2wquX30NFbDQslBfyjqrTmnLIDM_t-KDvBRbvLuCYnAj4hlStuYPinLrIdRLpCbEuMKWPapWf3R9u2VsOb_q8Wc9dkhTy8cneKCs_30EIKC8eaP-FmrYKDCU9WDl58o9';
  var CaseStudySecond = 'https://lh4.googleusercontent.com/EbUZqboeabzze3_nsReDbFEDE23nGVSrIJHcgm01cb_-mEEvUoJzwzY2vgO2eFQyjvDOO-nCZBnWXe1_Bf6gEoXC7uZwWlrbY0jh_5C0x8p8eIzXK2_oU_oOva8SgPVLdtolytS1GpZDUXU0';
  
  let sitesLinks = [
    {
      'link' : myWebsite,
      'time':30000
    },
    {
      'link' : ProspectWebsite,
      'time':20000
    },
    {
      'link' : CustomProspectData,
      'time':10000
    },
    {
      'link' : CaseStudyFirst,
      'time':20000
    },
    {
      'link' : CaseStudySecond,
      'time':10000
    },
    {
      'link' : myWebsite,
      'time':30000
    }
  ];
  const start = async () => {
    for(var i = 0; i < sitesLinks.length; i++) {
      await driver.get(sitesLinks[i].link).then(async function (data) {
        await driver.sleep(sitesLinks[i].time).then(function (data) {
        });
      });
    }
    await driver.quit();
  }
  start();
