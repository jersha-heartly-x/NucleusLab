exports.getCookie = (req, res, next) => {
  var axios = require("axios");

  const xamcsAuthCookie = req.cookies && req.cookies["x-amcs-auth"];
  const xamcsRefreshCookie = req.cookies && req.cookies["x-amcs-refresh"];

  const formattedCookie =
    xamcsAuthCookie && xamcsRefreshCookie
      ? `x-amcs-auth=${encodeURIComponent(
          xamcsAuthCookie
        )}; x-amcs-refresh=${encodeURIComponent(xamcsRefreshCookie)}`
      : "";

  var config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie: formattedCookie,
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
          mobileNo: response.data.data.mobileNo,
          email: response.data.data.email,
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
