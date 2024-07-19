exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const cookie =
    "x-amcs-auth=U2FsdGVkX18a%2FhXHrRSIvtBZblGeq2fyBIk3bqgJDBwaIEtVpQAkGS1D1WrnN4t3xgz%2BfEwTLWnxYFqKCHvvkSTkeCkQUrvDwb5D7V3TnHODaiJ8pVj7yM1jkcRihPjGHkgJieflKuj6ftNy2oyVgDSmk3MfDD3Kj0fIcjIA%2FT2gkeymnCog0HQj0mycTzX%2FdEoUQ2dSimaJvmpz24SKr3VmqnbeOSM7b4clo3YLi5CZasVsFjrEpQityTPaD%2FQLW98lWZ%2FjzTLOka44fseoWw1smRuGvVlCYlRFQczElvGuFQP89rHYhbgXnfhs3BZUvHm6flIbzAA9YGbpqVqMdq4RHbHAIR48bnYc%2BCh5B7aOYmSD1SwGEC0r8Q2WGu6OXk%2FYQDMM2IH5t5JCNK2uKt8KcTjHZuxej2THwiVJtWq2HA4XbERXL2Iwl5HWLyXGCqhyRxiegDzTN3U56t8gcH3RP4NjXQHX%2FBWYhysFovWUFAt%2BFm%2BwP51v5KFU7ucpEfY%2FrnsdL%2FHVmuY6Vx04E%2BlWFvQuGt0XsQI6534rM7lGvZyKwtqgiUC6MKbFqeNmM91W8vFC5C0mIQe9xH1Z2XLgk%2BS1tvFHXygYt6lLWxjk%2Bue0qIvJViCuLUycLY2QPiJTLdCQGEnyRbO8OYleYwdgEewSriVK81H%2B%2FDwf3FA%3D; x-amcs-refresh=U2FsdGVkX197chbqmxLOSrgTqEOvep6W1QKlBJf1FO%2BdTAztc%2BOxHZSMTPuWeWgcrgJvcf%2B7Vd%2BWWT%2FhR3NDfalDCpYydXftX%2FhnOqQTeDFvnfKlOuar1PdliNYocH%2FUl5ZnD7cI4eT4bV%2FP2Tay6euBFGeWpcVnTYxqyBybrUtUysYzVQI88uyiOt2lmdZDbql0Q2JYHD%2F53q%2BlMKxpLauGhsCG4cFHt9s4X%2FJfhKV0593xuWrgFx%2BVOwoKABAW";

  var config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie,
    },
  };

  axios(config)
    .then(function (response) {
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
    })
    .catch(function (error) {
      console.log(error);
      next(error);
    });
};
