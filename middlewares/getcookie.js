exports.getCookie = (req, res, next) => {
  const axios = require("axios");

  const student =
    "x-amcs-auth=U2FsdGVkX18Qf%2B8DAZd%2BOlGRy1GvqtURl1ATRqB5qHT7dd5NeHV%2BmRUCWP1ELGluHaRjHkC6%2BUwYZIVpUldSMY1TDYkMQgBBE13zFEF3ElkCDnUvpNt8yhdtFDTEOg%2BRG%2BeU0qGp0shPP6jYrlk3zw7JeR8%2FDmHEonhj60zRXn%2F4fHJ26nhFbMayps818fb34BFlYSQ%2Fc1ZKxncEDZdIQtyc%2FDQEYMYZgx1c0cJXeu6CoDd4nbYnI79mwybktfm2eWUg4zfAsLlCCvC4rGOIrxjZsC3Kx7RjxjexGftwMWKflYARCA43K8vvrctD1%2BCRfnr3yrxX9RAIRaS5RkUXYZuFI7Auf9MoewSGqeQuWiW%2FdsHRrUhcd1KjipSXx8zkGvEesyJPzB5%2Bh1INCtdVNsgJG6ppZkocMUGRl3osUpJ047jm7TrqtqSrCYSM7sEkkT8wASIsgqgr7lo%2F8YAaBtDhIZyrCgfjyky%2FKY7oRI1qJwwtxpa5XBtVagr2kyxpbrpYesMbGq%2FPqITcujGMHEknc3mum%2BDZZ3rz3ZGpgEIclxddu5s7imOdg6dB9WEflUE0HqoZDkpMUycZiIKRE4mYHCU1CAlPn5zBSMVNbZHVRpfo4Q9qPZTlSGPs%2F9NH7JgYa3vC%2BWKdkD%2B64fdaYOuQ3gk6Go4uBbKjTATNe0sWU529kiarbDiCTarw836pg9xAU%2FlGdau%2Byjp%2BU1H6xzt4pC6p8Ef9Y%2BYOgUyeJc7CWUwfp5HeWyBlcc5RMtUmkMqOMnFeMaVsNEkA1b6%2B3lLeENLz208ULhmdtCL48RBaxIvzABI3bZJERPF5VIgmsdxlmXKw0i1PkzxccDAOdj85nk%2BSRCV8MbWdeAB9v%2ByXSPB8gTaIcCoZFCofFmNiWfeY2cWTeYK3KBxg33lq46GEyztoZAYCERF3YgqjRio%3D; x-amcs-refresh=U2FsdGVkX1%2B6qtq2OmfnuUks2aggv4rCbqlS96hpyKnICDiC3j8xDVBjGNzun2raZOiw9oyIH18FTV4ucAD3npSvhg6BIGFH6Xr1R5nlNcP6MBJoq2vQRaGg8W02m8%2FkYOrzdM8OFIvalnNdiMGlUyYcDtPPi%2BtsQMXr51iCCpPxIyzSq9LXhb5uJgBFtUyh1yFe97z%2BMSS%2FO%2FGonHx0407W15iFWf54fKjuBQ9BNumEhv7KMFfDHXuuRZ0oFlQd";

  const config = {
    method: "get",
    url: "https://nucleus.amcspsgtech.in/server",
    headers: {
      path: "/profile",
      cookie: student,
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
