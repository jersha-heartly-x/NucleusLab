exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const lab_assistant = 
    "x-amcs-auth=U2FsdGVkX1%2FtSBgV0YgkHsU0A0ZwxU69d22JNKxVgEI9CG%2FYLeLsuUqmER1jXwpybbsIIH8D9HKXKaONLlk0EI4fo46UAPgxIpsOiJQbR80m6%2FXyUGTUKxcZm%2BHrJ04HnsEQVE1fvFglbkFdUAdVQRa20qbUE77pO8JE2A14m%2F9c%2BI5QHgKuX7XeetwimNcixP2%2BISglSM6BQCYMEPZ%2Bk6QppC8HWcECY4JY7rBK6MBvq4emIFcbcQ71VrMms501v%2FQAnoFk4VWnDx71xAoUy%2FLPEGw09XMI0siLYBnH5RCwyYqZ2ZkvVKHnIirHXMEKqO2lRX3aebQsU8IXUqqWe8umVD7gD7O8dPJRQ4RtMLxaMrHDA5O%2BNA8Lg3VjfVcTwXS4e8YShjxCkYeVflIPtFFTDnsB8uEMB84FkTSkh1b7YPKKtxhvjUKRDYEGq4HnHIxu1K6cDBZuevgQ0Igd2ks14jturolAt%2FA674tGwjguACEzxQwn4vd8dV9c4sk4LjcJZBf49pta85DrsAvtXD7Zwzg8cvMb8O1ykaGAhMnOH7c2gpXy%2BPGy4VDwxA7Xo941tYw2gZ3%2FjSQ3Gytv%2BlDGdK8u4OwHCsVsNK1hKUyp2m31h7TCWrml8iIoGj3G; x-amcs-refresh=U2FsdGVkX1%2BqVYKdZM4ZaOj7xh5cjCSWcmHAReYloq5QjVytVV5S4%2Bj9nNsM65lme2aVpaUk9Cx8ql2HbOzkEIdxLLsQzh6%2BFCKEzFwphTEKYUc6SLTFXTngJrOGYxQsRIKfpBQTA%2BezgFBeIzTAVno%2FRkhL0yClF7JLuR9ZIcs4wmx993ObY%2FTJfmH2j2V1jiWXrjAjagPQ7zE7L%2F5dQmTT2c8baOoLnFe4dDpv8VKrg9dFHJC1%2BFkX22Yka8np"

  const config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie: lab_assistant,
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
