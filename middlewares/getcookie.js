exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var student = 'x-amcs-auth=U2FsdGVkX1%2BoMpjISSpoxuk1vZ9LrlExP2WEcf4oiOSAqV7UTWNBlzRU2gWyjj7UFdLtuZ7i7%2FQKKH%2FSX8vhdWeQmBWsi0n2ODbWD5TB9Uq6qyNL1wdT33P%2FI%2BJsm1a3efLGdyFNFk6ZaDSjv4Gn205XkGiyTvu0TVhdQM4EMB32TO3bnfDHFps3ps8a%2BXA8oHuu9JdE%2FvCbz5bZenW1amPSM6jiDPvDT4QX4zOkNGnDVGl%2FHj7gNv4Kq6YlDz%2BxcORbQKhia8%2B2fK4LAub2mgXE5n0mAwOFnMpj1d4cKm2AXStKFG7nfIOGouD%2Bxhkbw%2FYcPG3GR4Ewv7Yt3Oupz8xEGvGYT59SqH%2FVzO33EoCL3J7y81F%2BifVexwJE7Hf8YT8QXdRl8w4suhl0cMSLJlSmHDChEkqe3HGGstBU9wTzJRXKprn0cFupZrIYu3ssMG2Q33F%2BLS09dv5UODYtGqSi6mRaEoW%2Bi85IXkyR07UOig2QAvGNGTtUUW1yckhttnTcxNtuZw80yioPARfSgWpU1hl71yKM%2BBUxSjuyAwEizkjsCE9T2LwEW4oTXQQLbCDAuvMTyo%2Ba2yQUFZDosaGo%2FWZWsSNTuk8oBbIdJMlTLBx5ooOX%2FCsOw61x%2FSv0KgWuIKVMPpkbURhkMW5Qzl3AsvLmJItY4EgNJ4vvqKaD%2FbhQvvSv2tkZ1J0%2Bq%2BbPiQ5v2Ug67du79z57BwOk%2FS7yZhqs0ZJ%2BqUcp7l4BNUaOxFAaNLaSjQMEr44Lat%2BZMAOw8kwCsaq4alJ3Wf9nLiOpQSJWHwmz1htrfMx46SqIJg%2FfAUnPrqbs5%2Fmllp2p825uIZS4CJl%2FXww3n0gymSXSBTutxVZQ89vfDtnwa1e8FV4xlR2Vc2S4bYjk27nI; x-amcs-refresh=U2FsdGVkX18hTQYxoxnvOuXvCF6MDLgIhTBvUbheiq9j6rE%2FQzwNKJEnuHINgMMIu1IE4QJU4IY%2F2Y5GmAdULzN8tEq9Pp%2BtRERc4TgDbRfNgirsnamjQ%2BeLf58OB%2B57t8dqdlBfp4YKRnL%2BOkBpW1Pw7bzV%2BX8qYFyj1NXU7bum0Vzk06KVNe%2FghAt%2BL8Jej%2FAUkbJKWD59I47ZL6IoXhy8lS0FWoT8%2FVdnEf34FI4VoXWaz7V3UK3HHp27llIP';
    var teacher = 'x-amcs-auth=U2FsdGVkX1%2BvwTSwNZ%2F0T%2Fuu9%2Fp8skfKBXh9oFzxn7ckgY6OWZLf3xOkO%2FY%2FhnELEnaVKyqlMCySbBvIKKezz67KmHm6zxHsTcoK5%2FpOk9J3s4x1m83fC5n4E8WrISNxgqJiuxGR%2Bi2qn214oQVd6FayzuojmHKdPt0F4XWtZLFoaq2X6MvtvQ0s7wij7a8xeIll7ygM05qn919iaf5yYUXQ1%2BIGOnsLHOP0xOMa%2FKMsteZhHOXQqUif2eipRdvg6dT6%2BMwRfHj92SgE2O%2FpeddkJaaAVACwNHNzEu5fvzpIfkj4w2PyNHw7iIZoeLlhqy790duxdKTe7tjRbyNJGgyQB%2FNlzrdvcM%2F6tXER7rVXSvAmNUbCimhyUseeTBTXsb4ks8PLzFmwkCeUrM6%2B64Q26tKiEAu2gTQ3kzuHpGgvzZj55uKsKsmf6zaKkhA6L0ynp4Dx2KYXfM1QjrUCA4s%2BshldApBrhVFUWZFtzvsSnBx9K7078%2FTHD7lZkKmBm8byem1%2BRRZsvaPinO%2BnKJoF86FqIJxWwIlFokuin1oDa8euJjnlym00tY25CG%2FeIrmcclDK0%2BYMat8MeNAo127Va9BP1ZWgBykG%2F7toMRSISrIl4sCjeXR4lg%2Fz8H3kaqS2uANrNVEQe9J9pAUfU4xTY8T1u7P074SK%2BI8HGdh7vt0bu3%2Fp5yf%2FdH7JeI8fmSg8B3PayHmjgw6X1RJ%2FmYfzFlA3Ait0iKbVC7n6cqV4eLgxXtvcZni9iUT4jdSqwABq0mHXrC74HvpFbXTvBfCB2vYD0wbd0Dvja0zgTt3Md4Pdp9v0TLtaYpBh9YUvWqfeN3%2FJ2tLcOGP6gQLwBrQO1rmpknczyIGKx06eUsBrDbtWDT7CtWqZguzUdGEpLFK8wVaVYhD30OBY8OSONfupKhUsd30cNPrH5VL9iBYOlWYMtAfS0dMZIpdKZzec; x-amcs-refresh=U2FsdGVkX1%2FGSz3ZLlh76DZocEo%2Bd%2FwzS1xlMerfhxnM93wia88chAQhcFr0gvCkNSHsFEzNzf2OJRDvvqLUIwZrU63ZzTgSlOfzxzKaaW7zBZ%2Fp8QHEe1OWrTYRVpgWFuy%2BC0JXz6yzGZ%2BWGoxODVMchZITZS6piSxfcKLaX7ZqdHxPaiTxMFoprSDCcZnH7LxHfW1t0OUNPnWyV%2FC84dvuY1aP2kZwK8Mz63QOYymFx4jI4jvbh18w1wrsBFQo';
    var admin =  'x-amcs-auth=U2FsdGVkX18OuM6lraxtew8l%2BQ2I3NPGSRxEfpB%2BDGzXFM9ByKDMtQ%2B3Q3L6xR8yscVGAFmfye8Le%2BfgUFdWZrssOlhkaYz4fXOF5Uqjnffs4pZAhhTA%2FJcVISpq3PP8kUm%2FTfyinnxxoQnsxTHvvU5BJoKKHAojvABVc53ozOKRkk1rKcVRom423ojNQQZ8sdgkmph4KCpQmjOPDqiCnMCzIa1G0TvQ5dSBKwjhd1FIrxvNeLW%2FNukdu%2BEfwdc2QGlXA%2BqC5iJV%2BIaGi5Cle9RDSF%2BCT8xwa741f41tunoPayN7jFq5UD6GW4FzZMB4kTr3X2ZNnouTYXU8q9nc%2FRA9N%2BI1USTJ0lhfUG3uHvxa4yYfnQf4YtuGlQgL858jCVkWJHSV5foHWBH2g9hC607KojJIw0ie%2BtaYFvtIPeLnIFcnvyRuvJrebAQmrS11uqyi2xeOl%2BnOlktXpm5D1isTZSeC14gHWffxvGC3KAtWK4CnYalrO2cUZ7YO%2BXdZ4XyugILeLkV8WBuq2rZZ1PsIdtiDeMvIA1fqO2Hyoj4OxPx23n758%2FNDx9GInVO1kOyIh4bhCbR%2BKqzJDveVf4Fhaw10M9It1vrhKkNNU53FsB0Yd8a88YrylLTaj%2Fkjzenvk%2FODUNJfFKrzN4sHpg%3D%3D; x-amcs-refresh=U2FsdGVkX19oGszS1XoeHbQvOmRa23vGOPWAQgmqR6wM4XLFkPykoD4P099yL7HwfYt7SRYwfnCFl3%2B9A3rlNwO6LtmN2aBWLlfU0d%2BdZBU%2B3iXqAcdMVPjNdBkbVr5JLMJC74yxzJ2TFBkXVKO2MhVgq5aX5VgG4svXiJx5%2BWOt70c26vAZkNunHNSMUzj5UG8JqOqacrTyff7oFUWesPgR8939CSDMnws3WSQPsJ19%2FJ2RbYLwKICwXkLRxpvH';
    var jhx = 'x-amcs-auth=U2FsdGVkX1%2FwLO7Nz8UGL245gCIl%2FMrO699%2F6hrNW%2BTk%2B41AMw4FfN1H8iesxLGdMTDqFys6CFOIhRS60%2FRkpeyp%2BZmcsSyYWsr1nuJGejOaoAu4Emhkk59%2BrQTLxXKDIAG4VYysbG7Qd%2FrJ9iMaJZj2lDMYkCBGItz2XuKNbFE%2BA8%2F5h0Oxl%2FP%2FdHcAhjxy7itM8uVtqEcoyYXW0R56yEcUzZdcyUxO06kgoX1D%2FXM4OSDgeTKZriG3D3AWfAdvvJFCmwlCrjuWTLFUgcmxjkuGeQJgMG7ZoX2%2B6vtD%2BU92i7lTQu7%2BBr50Q5L73y1ENR%2BA11FSCl983LA08R3Qq5N3TrM1roI2WGZ1r76I1NT1ZvHBrb3xEzULiIsHSE4%2B%2F0eqGxiNMRJ2f6E3HY8fx%2BszMbYHCEj2D0xBc%2FxN5GUSPdzHE%2BxkpoxM4oFCeMG9uxxiEZriDi5%2FNyp%2BiLD0GWWcchvkVk4nTgaklh9bQ0vufle7i94As9vCaStKBkVUONRekhljEdldw3LNeO7xrxQNIvNtxqTN6kO%2BIwsZgmDZApZXYXoLr%2F1Fqa2y9Izz7%2BD7oH%2Btak8MlX85jBziIkOExQTge3Rf6IaMcuX88cJ%2BGqFkslLSDf3D5TYjeWTqS52%2BIWcb00Gh%2FU9%2BjNrW1ZXYC1zNc0nww27Xod6XVq4ljN73uxhCycMedRYoWPgZsxVsAHRzsdYAs4gfC4Qg4IPDwTPNqfEX9IdMI6v64wFuToyT94vH%2BKkG8dHeVgmmdd8iX2ZwNbBbTpEAuxpjyrQoHr4eKYMXUbfVvUghQbrg63addU2vjfoXmiMimP56lfKtTPy20TnGvRSsy%2ByXBP%2FQMAU73It1u%2B2%2BhONVAD8YAJWj%2FMZCuN2e1enSYd4XAKtnjS6McnQJI7V16x%2B7p8g%2Fo3Td%2BhqkLEJJNGO24q0%3D; x-amcs-refresh=U2FsdGVkX1%2F%2B8Dl%2BAxrAHRMvspnKHAQ4d7yChAOe8obx5AzZZGvkW7O3xJqO3Bk9o88FpI1Dh9whuVmbqo9VqDN1SYtKvi3BUN2%2B77sqUoBpZWtyScs4fqcP7ZImUF8ApRgAEsBX6KKRO7yY9FD4Qz7jfA0tMHK6dA2yRwCL%2F2jjh4NPU6mZ%2BYrn7ovUPtjE7JPJ311SysO652mzkcOp7kwtf4pkbP5xyTZxwer9BC4fgW9rU5OyjcwsDQBwyw7d'
    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': admin
        }
    };

    axios(config)
        .then(function (response) {
            if (response.request._redirectable._isRedirect) {
                res.redirect(response.request._redirectable._currentUrl);
            }
            else {
                // console.log(response.data.data);
                res.locals.userDetails = {
                    id : response.data.data.id,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    mobileNo: response.data.data.mobileNo
                };
                if(response.data.data.id==="admin"){
                    res.locals.role = "admin"
                }
                else{
                    res.locals.role = response.data.data.roles[0];
                }
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


