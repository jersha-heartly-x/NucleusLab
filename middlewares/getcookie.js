exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var teacher= 'x-amcs-auth=U2FsdGVkX1893uMoxDRnjnhhldOPKV8JmrcyebiMVwyo%2BpDPfBsgSxF7T%2FGaI7iPNUse%2F5liXeKkHNqyC2YhKLUAgToRWhaI6KZqPsIJhDL2kKcnPVJl4V7VxR7lSeYog04F%2FjsgPtl1j5pw1gSDgXpLPZpVqcUelblztarMmFWssQs43FldDim04yLKmsHxLRtdM%2BkNpNZsaR6%2FqvMpJJ2W1dKg%2B8ikLJWjn7mIB1jMu%2BVsGnL32adbM0m0w3cG22%2FFgj2jLc%2FE1CbjMUa8oYROW2aPIwzqJxZGhWGt7LRT2eAVMhCo8Dt3vYyBXhUN3kCY7U8KClY1eoU8w4C37ddt7meFOTAfGVrMSG9dOdM7eQBSNTXaTRGLREwE5Tdwh3CPkLb2AHPg2zSjAM6GlzjfjgV69AEbeKkzd7WQimWd%2FliF5T%2F6a3eMQaWd0lKJ6EgTf6PYZrkPBEB1cE3UpcrAV84tfHz4CYVUsX9PPh70qr3ywdsdv4HqP0EdclZU%2FrS%2BgoO3Qbk4UYDIvYZK4VUWNvn3VdaJRI04Qub6CZC%2FXivcU1%2FQ8TrbEtX2zoRQTNyHDyHEY9BiyX6gsZWb%2Bxa3C%2FS536A4%2BzPN%2F9DZ34%2FcFTE8QLX7%2Bhh%2FJBhMxdSyTX6rd5cqqwQjzStX53ayyP1shZOgt%2Ff7kf6aXy3pr9Q2c%2BunWgPQ5xzMOsohHwEB84bV0FiKNpmPltpsVsPiqLBsnbRj2NuyoUR4Rex7p4W2d49mS5lu0yAbuA4%2Fd5zBbhQ7JM7Iuvwfv%2FUcn0nIMUuMiE3nRYX6p6jJwmzJIsKpqWsu6Rr5tRSOVJW2fQ8MdwyPSbj4gaoEKqiV1EMhvxMmLq3DmvvT98taWdpASC7xfmSyDIqdtcVdS4Abv9g4Uq5ZAdYuSE5qVzpN0s75IGfK6hCcYLLwf1r72946vZnm0xJSkkS%2B8hsa6MgI63ca; x-amcs-refresh=U2FsdGVkX1%2BmRvaK%2FcwHitg4pQUvxekcGA%2FCdmmjof6yiF2Aocpc71c26NlJsQJaTzvl7A5nJnlBFAJHp45YBhURghBUPx0y9C5Ml4FRZ6OTPkJ6Zh43Qs8zYk1QmWX758mjZfPUXFc%2BFD2FKrIRymV3IcqtRKtEpwZyUvN3ARxGqVHfw9gSJnE7ytp4QxN4LJEAoat%2FYYIcPbDMF9abTfSOY7rLLfuTBVUAmY%2F2g7ZtwAqEm6L05eJqRXI8hRZJ';
    var student = 'x-amcs-auth=U2FsdGVkX1%2BTK4T3ReZiK%2Bqd%2FY0HRMecRZcPnNhs38Xpt7hNUiWbIx50bqLcBW%2FxcV1Ag2WsYs6T1bcAQztLSv91OUavtNn2ZrAyrhuEhmBnN1aJqNeUe%2BqpCVxWLwm291IkiFg3mE8DgUJHLlzOHrvB0JM8t1qVjKbP3YnJrFBDvXzXofAEjWjoi3TS%2BTUgEN42IfkZdVrH69ZKQrQWkiXpE3xFapq%2B32NKW%2FVwiDELXSoC8KhxinwaNhCDghlNtD2PhBDIEaSU2e2%2BMtxnyqt58%2FIE54svUfpJj6ILwtFRW4Z7DqM%2BQjcYKGC1ajWV4siNRhqPpxfysbW5YwX8i%2F8xYhdFMFT%2F5yf%2F2Y1%2FgUJVpJ40xj9%2FKmrXRrgnt%2B0RS6E%2FrPBsVabYRhrbdP%2B7Z%2F9X7KC0N5qkgKAEVJp58CRmt2ED7RiHG8YCEYvhHZQ2tt%2B%2BSx%2FneZsPBZLUGCsQd9Bp37FdLmRRe9tejSxohxWTBTSfnqba1r3j%2BcTuO0w2mXbhpVz0AG4JuSdJlfV%2FO%2BY%2Bw6rJ2Mw7ovvnZgVu9NYgMYvsOHMnCrn4cJBmYhlFuOH8dLDMY9rdtp%2BVgrILE1WYz5Or74tLAUU0WlOpylnqqvqUcvXG3c%2FC4HNpBCXW%2BD9t7yvviUJlFssrsSNQR0HtYH859w9HOtLHgmxIbDYGymi%2Fkyx6DJ1suXgZZ0KMM9%2Bxy%2FT93DA%2FqLhb1tvhlTHixBKZG3OA2oOIy1rr%2B1GJtFU%2BLhyZZizMBnw%2FJH7cojVJhHETe%2F%2Bk4DYmZ640JCm2DdmGUpWvrzg05SS5sfslrFHiA%2FKfF%2BF3Ss0VmohkBG5rnnjvEQ75aJ7VOfhXkntHo%2BnidmY7ZjhKRLib9GgC4wPyjQaTEo14w53plsH0s4vixLDqpfD1MfhtGBDVDQLQdQAM8whzAU2scEwPyfI%3D; x-amcs-refresh=U2FsdGVkX18jxNDiaiPjwQqkF5qV5YqwBwuBnMXOK8fMS67kOLAUgN8o%2BpR9HNR5EG7hb0pZArnQi8%2BG5XS3v4PlKU%2FkzCCy7%2Bl387UdzZ1E7b%2B5ai4eTyyFhu9BfIXhBQpM8hTpWc3E7ExoOnwYVaq1zz%2FEyc5nelSr8iDIj0uAgOmTFLuVZu2GXgmxs4MCXFxPgJBZ1S4nygy5O0wP6rWyTotH8JqNL35KzatCq4N0t240hcR3yfY8YakZAE7B';
    var admin =  'x-amcs-auth=U2FsdGVkX195HInLe5RVc%2BKt%2FCWiDaTojZyU5HSrN8akySc8rhlw7YXxDra9fdUGOxBOZT56IADhzsxdel3J6iS1PC1FWWVVxKwTuvplE%2BZfVolLZmgvMR57kLGyBo89zzHoInb1gxI9qWnb7himkl7itWlUybP4dTEpSWJ6f3r2DM1GJxJDF3yOEz4KXQnUfcHO723x9u9mBpQsqqbIDIud7dGtk3eHLhn0JqA%2BHoXkykGBThuic0F1uYj4o3RZzW4fKgPud5SvSI0WfYMJ3bq4K17juQbyAE4qyXbZGC2xAsdnTjfh6eT%2FYHela5VxGqSPOEFVIGmqILkTnkkgY67A38d3zLz27gX3ybzKGZs%2BKlYyQPqkR2fQSQDwVZRAXKEu9EjDwkLEtiUsC7PPh8jGlaj%2FNkc0HiEhKqoDbIFvHBQaQaS6KFa71A7nyMRetAmzrJT0u1E80GuwJ7VFa3xGnorRHy%2Fh15moHvDse7NSEQjrWbPaFK2ckyFu%2Fb6ZJV0DycV9lxTRei6LRmKb3wvhsXeCHt7V4F52Z4MMJYmAaQtRSV1I1i%2FZxDzjQ%2FYTcCsYiC3R7hIjpmR%2B9tjLGl0OJP6K4sJBgfA3hvRnuk7jHYBhRYgEeTrP8LdfhJ17v%2FveO3ACRtgXFgr6dPODxg%3D%3D; x-amcs-refresh=U2FsdGVkX1%2Bazv243%2F493bzaJykPij75VBggOr%2FOUOlNao0RNYDNc6oMq9nd2%2FGE3uQEik5lY5rSJBOnGVRwzd%2FqT5zC4%2FrPgzno8mhXnGztEO%2F9LEX0gG3oLHD9iHNytcrLyRUW37UweumOaczl2aovVTMkP%2B18FEe5CciV%2FgwnM8OZQRu84dGI%2FuMYcclI%2BEleh2i9hbSTDmrRFzmux8DAGXq1mZs%2FoKGoflTNUoZRmdzuvYE2uqQPJX1lDyPs'
    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Yip1FB2ZC9n5AgszHFKQc7XOuf2xuhOGIlOO99hHxpxQ2gr%2BU6yWl3Iid0tRXijE71Ank63UlyVe1owPE%2FxWL%2FyFxya7Qv7905HbfgKTp84s%2B6lyPkKotRiwQug0pkzANBEs6PNZJ8i%2BhoRPmtgZA2Mm9mNid%2Fahe9DRBetvIUpmsj6gSu8NA5U7RLN073pfOBUMz%2FVqv87gWDqX3uNVbgTgqQv5NQ88T1cKnTqdy1uaD4%2FoUGdsSdwNRzXDK8CcXcJhGYl9Q4sbA1hsg9k6isIoe8qKW7tLUD0IPr0nl%2FmU3huPa9X1LvglYeJJihl9ZgGKj3QqjXPjxhIJ1gZiTnnjdRTfKsr7%2BnthAYQaMytLzVF9%2FM9CaH3Kk3w6kw6nFD8UbK%2BPraybspzJ%2FHtjvXn9zkQwXEizOxQ4NTjiVhv4wB%2F1AeuNy1Kei6f9RO8KMgjUp4nBu6WKY4tSzV%2FRbUqi26BmpqANHUh4wUCWMf%2BNCKfwI94%2BelDKjQBMi%2FCDNifUV6h8zZNgeV5SSthHMU%2BQV8KNZYlEf%2FY%2BRR898mNE4x7%2FykslnDpSWoitpXoMHFreRSqejp2ALXtZL42FSXctbZJyy9p4bd1KJiEUCEYUowx2ML1st; x-amcs-refresh=U2FsdGVkX1%2BU6GAZ%2Fs2beaPhWafNAITjkWEYALT3dLLh%2FXfSxInLUBvGfZ%2BJdImtiBCqaG1QbGIWxRw%2BZ95MnW%2BxiTVtWocpFNY2WwfekVCBBMQJGiQ40czhv0iXdnzwK8YoTprtd3x%2BB6nalcLMaDnaVZr%2BBwWN6Ua61mH27AUD5dNKKK%2B%2B615dq3mjb9AsmF7tny%2FVC2BYfhMQPiI5xlMuHj70im569ULP3HJNOLSBC4RRv5iU382r03HssJHo';


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


