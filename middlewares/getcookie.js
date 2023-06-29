exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const cookie =
    "x-amcs-auth=U2FsdGVkX1%2BJJtBnyTTlfxc6t6%2BnyJFrV71aSQNblvUer%2FS%2F2zqDL2Rmz6Y6qIRZWGd1K9ZPQVHnLcZyvPdpupDyIgHZgSTC%2FHh2al04xKHxXs37MH8%2FukBRwAEO345U3uB37CqOsieakKBhmPMqG3W2RURooYu9EpEdYInBHZzYAtDjwIvuaw1InWsNNA0CjKE53iWoJbS4LzKmkdE3fP0PUE9GRC4gekVQgSUEJK0ya8kJsrerXmnY%2BCl4Nt1kovTkkeMyDttE3iX1lLaczviAVERBHSTohFLMFC6tq%2BLY7IdYE0QMLP%2FZSGwej1Z80vGYDBtHBz4ZrCzmQ752XaFr%2F%2BDsrF6G6%2FrllANqyaEgJDVjmjIB4BsZFZ03K%2BPPAbXJ4n9Hkra%2BydKbrDp3vdE%2BXBZSUuOO2rTch6yUF7M9o9lK6KKeLuVBcsVEk5ijmQOLSmliKd56cO4LonVdcKxRu1PDjmSLnO43eFV%2FFpjAEElfyVYW65DswHF%2BD3yOsRREVjtApUpl5U%2B6d0HTPglbLlkFuOwyBlb%2BZPIRph%2Fqpe4XdX3VyGwpU88KdLH8UGAh4jvojcjx%2BpBctZ50FNKik9yHho1tD8A4HQg8eJe2CRhn%2FDOSDrtPw5xM%2FgQXAYgw0Y2C%2FwmDhWTLZMwuBzo%2FIODg9QulLEp46K8M53NhHWm03rqdOFRGuie8LDq99mw1Yoy4RaxDGmTySCDl4pd4mGV7w9zq6g%2FPjiaoCgrHnpjYTsn3O3xkcvTZBhTfNkuoH%2F0FWy%2FAD2QPRR7KQOaClGixwv8Zk1rlnlCzltY%3D; x-amcs-refresh=U2FsdGVkX19LEoMXCA%2B2prktVMtGK1KazifHjof3VL%2FM0wj6knb4s0AnSRLEf%2F0MrwbPdfHVK96EohYrpfCngIQ4WSWiD2IdV1haBx04evvVA6T%2Bjq6GH39xwEtd7a2pBa1lVXW%2BkH2vjspfFJKfXz7zD09cAJDk5%2B4kIIUjezL3ePZRdJbpdlgLY%2FtVnoTbW2N1MEO9dgQ3pTTacDbNuvjkz8E5NAM%2BKVIFSZO%2Bixf%2FsObTeBYDk2%2BpYhPp3Yxc";

  const config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie: cookie,
    },
  };

  axios(config)
    .then(function (response) {
      if (response.request._redirectable._isRedirect) {
        res.redirect(response.request._redirectable._currentUrl);
      } else {
        res.locals.userDetails = {
          id: response.data.data.id,
          firstName: response.data.data.firstName,
          lastName: response.data.data.lastName,
          email: response.data.data.email,
          mobileNo: response.data.data.mobileNo,
        };
        if (response.data.data.id === "admin") {
          res.locals.role = "admin";
        } else {
          res.locals.role = response.data.data.roles[0];
          if (
            response.data.data.roles[1] &&
            response.data.data.roles[1] == "pr"
          )
            res.locals.isPR = true;
          else res.locals.isPR = false;
        }
        next();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
