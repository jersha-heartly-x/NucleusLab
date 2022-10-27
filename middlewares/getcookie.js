exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var teacher= 'x-amcs-auth=U2FsdGVkX1893uMoxDRnjnhhldOPKV8JmrcyebiMVwyo%2BpDPfBsgSxF7T%2FGaI7iPNUse%2F5liXeKkHNqyC2YhKLUAgToRWhaI6KZqPsIJhDL2kKcnPVJl4V7VxR7lSeYog04F%2FjsgPtl1j5pw1gSDgXpLPZpVqcUelblztarMmFWssQs43FldDim04yLKmsHxLRtdM%2BkNpNZsaR6%2FqvMpJJ2W1dKg%2B8ikLJWjn7mIB1jMu%2BVsGnL32adbM0m0w3cG22%2FFgj2jLc%2FE1CbjMUa8oYROW2aPIwzqJxZGhWGt7LRT2eAVMhCo8Dt3vYyBXhUN3kCY7U8KClY1eoU8w4C37ddt7meFOTAfGVrMSG9dOdM7eQBSNTXaTRGLREwE5Tdwh3CPkLb2AHPg2zSjAM6GlzjfjgV69AEbeKkzd7WQimWd%2FliF5T%2F6a3eMQaWd0lKJ6EgTf6PYZrkPBEB1cE3UpcrAV84tfHz4CYVUsX9PPh70qr3ywdsdv4HqP0EdclZU%2FrS%2BgoO3Qbk4UYDIvYZK4VUWNvn3VdaJRI04Qub6CZC%2FXivcU1%2FQ8TrbEtX2zoRQTNyHDyHEY9BiyX6gsZWb%2Bxa3C%2FS536A4%2BzPN%2F9DZ34%2FcFTE8QLX7%2Bhh%2FJBhMxdSyTX6rd5cqqwQjzStX53ayyP1shZOgt%2Ff7kf6aXy3pr9Q2c%2BunWgPQ5xzMOsohHwEB84bV0FiKNpmPltpsVsPiqLBsnbRj2NuyoUR4Rex7p4W2d49mS5lu0yAbuA4%2Fd5zBbhQ7JM7Iuvwfv%2FUcn0nIMUuMiE3nRYX6p6jJwmzJIsKpqWsu6Rr5tRSOVJW2fQ8MdwyPSbj4gaoEKqiV1EMhvxMmLq3DmvvT98taWdpASC7xfmSyDIqdtcVdS4Abv9g4Uq5ZAdYuSE5qVzpN0s75IGfK6hCcYLLwf1r72946vZnm0xJSkkS%2B8hsa6MgI63ca; x-amcs-refresh=U2FsdGVkX1%2BmRvaK%2FcwHitg4pQUvxekcGA%2FCdmmjof6yiF2Aocpc71c26NlJsQJaTzvl7A5nJnlBFAJHp45YBhURghBUPx0y9C5Ml4FRZ6OTPkJ6Zh43Qs8zYk1QmWX758mjZfPUXFc%2BFD2FKrIRymV3IcqtRKtEpwZyUvN3ARxGqVHfw9gSJnE7ytp4QxN4LJEAoat%2FYYIcPbDMF9abTfSOY7rLLfuTBVUAmY%2F2g7ZtwAqEm6L05eJqRXI8hRZJ';
    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var admin =  'x-amcs-auth=U2FsdGVkX195HInLe5RVc%2BKt%2FCWiDaTojZyU5HSrN8akySc8rhlw7YXxDra9fdUGOxBOZT56IADhzsxdel3J6iS1PC1FWWVVxKwTuvplE%2BZfVolLZmgvMR57kLGyBo89zzHoInb1gxI9qWnb7himkl7itWlUybP4dTEpSWJ6f3r2DM1GJxJDF3yOEz4KXQnUfcHO723x9u9mBpQsqqbIDIud7dGtk3eHLhn0JqA%2BHoXkykGBThuic0F1uYj4o3RZzW4fKgPud5SvSI0WfYMJ3bq4K17juQbyAE4qyXbZGC2xAsdnTjfh6eT%2FYHela5VxGqSPOEFVIGmqILkTnkkgY67A38d3zLz27gX3ybzKGZs%2BKlYyQPqkR2fQSQDwVZRAXKEu9EjDwkLEtiUsC7PPh8jGlaj%2FNkc0HiEhKqoDbIFvHBQaQaS6KFa71A7nyMRetAmzrJT0u1E80GuwJ7VFa3xGnorRHy%2Fh15moHvDse7NSEQjrWbPaFK2ckyFu%2Fb6ZJV0DycV9lxTRei6LRmKb3wvhsXeCHt7V4F52Z4MMJYmAaQtRSV1I1i%2FZxDzjQ%2FYTcCsYiC3R7hIjpmR%2B9tjLGl0OJP6K4sJBgfA3hvRnuk7jHYBhRYgEeTrP8LdfhJ17v%2FveO3ACRtgXFgr6dPODxg%3D%3D; x-amcs-refresh=U2FsdGVkX1%2Bazv243%2F493bzaJykPij75VBggOr%2FOUOlNao0RNYDNc6oMq9nd2%2FGE3uQEik5lY5rSJBOnGVRwzd%2FqT5zC4%2FrPgzno8mhXnGztEO%2F9LEX0gG3oLHD9iHNytcrLyRUW37UweumOaczl2aovVTMkP%2B18FEe5CciV%2FgwnM8OZQRu84dGI%2FuMYcclI%2BEleh2i9hbSTDmrRFzmux8DAGXq1mZs%2FoKGoflTNUoZRmdzuvYE2uqQPJX1lDyPs'
    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX1%2Bz8WsmxvF3zr4hCkezN5CVxlZagy0HlTGIf08%2BmWKJY6PxEzG9r3A4TxzvGwfWPoJD9mnBZb6xsEm4daa8u1Eahk7IHJXnENkDdOAO3Unz0W26rvfCEKn0C%2BMLi%2ByEojBNmHcVFSQKzSN9cjVAO%2Fxf6LAWTuAvorkOCMbw2NiE5QWcjl7lhfm0xiOtXtj4m%2F2DAGmfwRPKSGTj2CDp8X6%2BccgBcCwyND8f%2FNwLHFgR%2FBPOZpzTZEN1GYmjjD8GtBEOqSBxGJ1WIdJ%2FLcplb4lOD8Httq9jJopBRWmrJtdHEleEm3eLeUkUz9RV1zAXm9GH8BbZkvJH1o1ruDFwZmfFwkdSyiYL8bPwM79jCeW6UR19UjsfDb5btdXPOoUoM9oI%2Flzv98UfHekKGLBrMqqpdUFw0sUPBc9ict2dmuD2c9vMx4ovERbyMgf4FdK0xsy1ZcC%2F5WMy7QgKLqSWP%2B5nzt19xsdJ7aVGIQA1ePzdokpmF1%2FapB5hP0PT14JhFOHf3W%2BGaTrPlxfaOAQG61Gk8zD8W3XFXYPRb5qpWg00sFWT5VCW%2FKJB37is2FaoVUJjLs9NRrOxT3oZ5B4e2VFUHxfiYlN1y57BcCzrrZTDCaTz5e7RSa6d; x-amcs-refresh=U2FsdGVkX1%2BM%2BU5wfQxutSOJHD2%2B2TLjEAJ9mpgaur83DRuEDSaEeEsVAVEPTwdWM3tmvL8pI6FIlmrc9aU9UODXuLmuxYjA3BVtJq89x3c3BXUHWURMEXLlRunAWFt68SwAkK%2Fj0Xe3wOGWPi8Tga9h6A%2BqETYAGIl7lmc7xBuui%2BwKsyveFZGo17sqbo1BJG4Afzel%2BLsi8Rkc1X9%2FWgfDSa4yx0zH4Umqdqe6RjYYkNldAbCj7zOqD%2B2g65GW';


    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': labAssistant
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
                    email: response.data.data.email,
                    mobileNo: response.data.data.mobileNo
                };
                // console.log(res.locals.userDetails)
                if(response.data.data.id==="admin"){
                    res.locals.role = "admin"
                }
                else{
                    res.locals.role = response.data.data.roles[0];
                    if(response.data.data.roles[1] && response.data.data.roles[1]=='pr')
                        res.locals.isPR = true;
                    else
                        res.locals.isPR = false;
                }
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


