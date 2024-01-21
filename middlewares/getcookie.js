exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const cookie =
    "x-amcs-auth=U2FsdGVkX18Rq0w7TdRo2n43b2STdt5kdy%2B2eRUQY0PJPnKrYv%2FjzX%2B3r3OKARQAd4WxaVhrLwGIQcuYuSi7qIYsFtcfVcfjv9fOyAs%2FgwqRObIhdTBqgT%2Fxz45wck5B8wm3EDKnDiv7EfJLXxFEHwzkrwIYkazXxA2m6wKo8%2BY8YzW5J9uuGE32XGaQSrp%2BWOO5mNyorKo79hQ40LKu7noOMMpUUEbs17kWOasNRKQGrwMkLr7S%2BP9xly0P9Tj5Xp5pRtbLQcvOQqWsSE%2BZ4CSb6%2B%2B6bctwgL4QMAPrrGaAh1BPJ0sI%2FpuQk1rITSDVaxdUYq2wPb6aJiwLP1whhZnMryeC6YkeO4KE6cpfpXvnhLqvGEV6GDKyUzFxqNQNZLHN%2BcBvv21NO2Qaa4CWcWaqd9vlNHDFZ%2BfGezocd1s3ku3EpCty%2FWJTHyVLCjEsAI78LSBPn6LTURHRUJcXF3r8%2FWIG3vPAuM7IokyhZWQkNMPdSx3hgkDbs7Jnt3xEsgGskSutjdll%2FXr7VWsG5f0rwIar4bo%2FMvYgcpL%2BcD7a8SC7IevYXogVAuFXnxW8%2FeFlLvlaKB658VCKVABy6oG%2Fmu84yMjicEs2EPL291A7Ew9EuR2U7mKJ5GvGtB2s; x-amcs-refresh=U2FsdGVkX19DKhKjD%2BLPTN6%2FKdrbPEKTrCTrEA5YxObSlHkO5jQvMjDAwI0%2Bpd5TdPdI3hHWMQl4CCCQCfM2NHgvKSZX7gEhZ3sItl%2Fnwes%2F93FYIrt1BB%2F8RSbXXmzupiQNBFhR2CHsdiC01yEksh7VuId1OJJUf9iymVEZ3yCd2E8o0iupkQBdovY3NtJ85x8fuZXJ3QVCnYmCyPCmM0%2FAtzSVBKT9NHUkPcIsiBTOg1LfigsmUc%2BxUIgkBM3%2B";

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
