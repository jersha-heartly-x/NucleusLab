exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const admin =
    "x-amcs-auth=U2FsdGVkX19FgZm%2BPniAY75J6JoSurD8HAs3IjhKBb0l6vg%2FxF1oVi1%2BUuBKrQ0nz4Pu7V2kBUE2f%2FRJyPqy7yzmWvGj26QzoR3PR%2FVAt0JNas7YuFGopsqzc%2BAj1ZhogQSttouvFA7fkxLxP0W7UCZqKT3LA3pUEIKXIFM%2BW0DbawVXjKVbFKP83NQ%2B1Orl2tKhE1kElpZOgXRp7BjFCoxmnimRbavNWAygz0JM3xwpyrA98WggS%2BBmGJItpwIJa%2Fzu3otVYndVq1Fu9xAYcJE8rEQHMXrFNkb1xNWYSrRK2PgvGb%2Bild1xlAVxqYt1%2BjtG0Xc7xXbyudUKaMHURiy1y8NHw4gMRQFkyGZVBOdidlIh9VEAA16o1%2BvIU2pUej%2F9ExAVDDVbSLn1bw8%2FEJslg9uGcWYFb01%2F3eLlfz%2BhUkeygkCWxLkWmDSvuTA6%2FCKSmz%2Fugq284EsXx31%2FRL9n7LQMKtHBxseDYVC05tg1QFB8oaZuR%2Fu4FdE144lt7%2BEG%2B9lxKe5pZ3hXBop9GxR2QFwVVZldsmjhvrdKoguw4LizrWDDUjtrWhypqPLwAB1s5Jyy8P6ZFQ7RiJddtxQ1YY57FYUc7tpHFa8DuHBPhBaiZBg4bk2bP0ebPGiOduyunIZbLwBa1ZOKnA66zEg80EBjdoGwQB3gZIrYfQs%3D; x-amcs-refresh=U2FsdGVkX18MfwzPaK3FrsOAgwwetsx4ocVdH7CJiPB%2BLTAoAPTLDzJI6CDhkVkZQMKy8LeHEOo0tw%2BDm2Gb7POaf5zfXC5EDJvvdKh6411ungDU%2Flmf8%2FLnGyALrI7DgAl89ReVxp0XpKBSX7XTFiA8m40D70Ujk87zpK74sojoP8XguVsFedpcQCcwE0z%2BtSWqRmIInZuGmBT5MDCRSHxCkrw7wSFprymxSYZqmtGZV8E5HVWjlwkWPrLevd7w";

  const config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie: admin,
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
