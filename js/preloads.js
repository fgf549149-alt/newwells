
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.D9Z2q_HY.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.BWTcufUb.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.Bf4o8WFS.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.DnrWWv9p.js","/cdn/shopifycloud/checkout-web/assets/c1/unactionable-errors.DTBR3FGs.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.Cf_iP_es.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.CxsEbWqy.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.4TI7OOnY.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.BmRIh9yq.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D8Dj8EbF.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CgiNdxY-.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.Cen9wQYn.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers.DO84vOJL.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl.DVJHKyvo.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.CH638M1G.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.jc4lcH8u.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.Cw2C4S25.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.Db_l5AHD.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CrND64ZT.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.BdEywMEh.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.zcbnQQ3a.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.CtGHT8nW.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.qsGCmPcd.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.CrlILkk4.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary._97Qeseb.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.VsZvMmWQ.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.93SENIlv.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.9H7y9-kR.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.Br4EIPkU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.Cy78jPDn.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DqOQNXBs.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.BAuvD2n-.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.pyUmCrm1.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BPITQsau.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.C1A048Pq.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.au8IBghB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.CJuLavN3.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.Bl1hOZYn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.dxhraFW7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.1waIT_cE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeDescriptionText.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0758/1584/6168/files/NewWall_White_x320.png?v=1686614070","https://cdn.shopify.com/s/files/1/0758/1584/6168/files/CHECKOUT-BANNER-3_2000x.jpg?v=1712126461"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  