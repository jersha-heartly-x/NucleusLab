exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var student = 'x-amcs-auth=U2FsdGVkX19DER7BJ43QUOgWtS7ulT%2FIwQqPTcBgaLx52LhS%2BHY1C20u2Ex1JWQJiVocNS5vYOBDKoLkY%2F4XUIm1ZE4slbRiLacAUt%2FcMAVrfRv8o%2B2%2BoihENT4IYijXG2uwaPtKGtapgL7j5QFrlT4uRLReenSsyN1cZ3cuUq%2BiHnuC6bwZ%2FPMGS1IxZp%2F%2FVF5DNr4lYdnhKGNigz3P4DfXk%2FW%2Bu2LTRCECFXwdVfOr9o%2Feebf6%2FF1ikU0mDazf%2BkJa8J661Oj9VXPnYE5Lx8gTfEg5VAxVDFziQdzeoUZo5u3lmBjcHzhmpUqIl8ovLtsBcOsq%2BukrNzL0OAEpfduy1%2BKshraVAdOlv%2BPJ10efJiC97D9wWL%2F1dMmEfVKHq1RzCvy%2B5%2B2%2FHWAdPFQrQWPx838pFxEX6FRQsLx105ki%2FVCJVfJK0wXfC7paRdluWxW4AMkjVprIbynnbC7qHDvbJGQ5oODCCkrxlg5pNSLgTSGj%2FdBAQYUK06gujtd3b1xdeFt1qu%2BtImJ08eoEAmCTjl4RZmgP2%2FR%2FCtwONu2ulR2Ri8BZoq0ufk0sL9JgfWgf59pLMkinEohzhZ5LSRE%2BJGLF%2F8ak5TXoYSWAfqgBBonAxcTYFzW7G3YyCAV0qRx2QuVtLLV71WgvBZDC%2FTKfR4Zwf9SEBkvPKlNVK9C5670cf5oS%2B8BmYGMAlpFx%2BcPUBaRqesalntTxHsKuBqlyAKR5a61AUuhlVlHisgea5ro2krulBCIF%2FuswdZ323eHRONJh6N08k%2F5AEttlxZoEkFH7CPiTLaOh2DkzNWLPW9v3H5MyawsHSh%2BWwjfmFxrESMMAky40M%2Blxdk%2FoarnY8egQSsRgnBjKJVAhXrFctj1EZa%2BSayYdMmJpmHple83a%2BjbwXUIflbFYFTKycpI5No%2B1MOhvlGHE5KSkBhI%3D; x-amcs-refresh=U2FsdGVkX18FhzGmPEJDpVBUUJHfUHjJIwpxPTQX5K08wpmcwtMfFTugUp%2BWT3o7JajjOL3U%2F3ywGciVRcFOATLMIzoWiYrkA2quh%2FQ0eLYXcnvwQe6Ryq%2B5vGPOT1evPkYpZrk5TRAozLYFmZk1nJe039AvbIcl%2BzcmvxBH99%2BHqzTRC72OLbvuQgA7Vs2NEO1%2BLd%2BiO%2FbKsKgMa4LEjD4vrSnjjJ%2FYSFWZJE7KEx8ty1djfeDGJJDwEeCY5xzL';
    var teacher = 'x-amcs-auth=U2FsdGVkX18iy9IyKlJ1PgVvsiFYC9M3hVVojvkDFldcrb0Oz8fukC82q7qfGz6uaOv6koLKTmIVjNE1b9pD5DAJo%2FO8Fg6eNazk%2BwpfXL02nqAVA8hF9xvYGksJga2nwzHtP0W8gZkoa7442MQ4F%2FEu6aK1lPh80duCRYVZ1jFvjI3wf3BJD4Ev0oAQxDRzo%2FgaZDjbwVVXGcA%2BCKD%2FiZ4yKM8inK1hD9tJyZD2UjwnRg2BTKE5zgwoyVSvTt%2FIwDWTem%2FO4NBHGqGhRmUAk6L9S7FeIiijLiWVZssvjrd8806%2F7H2i%2FglnqmjhFEy2So8Pv%2BA2FJbpAhbDP69oez6giHxUBOUWV5yz5tzJ%2B9%2BogCaWK1W47lLP2XodLv5cbdW%2FNT06WfRoyplrjycKDq3bu5Et69i4eCkvAveGj7Wn3zT%2BWIg6RwLBDsDoudWXJOvzprRJYFVmsssaThlcQRymQx6zEBEFVZgVZyzgrqtzwseAqRcEWsvJUs9fqfNYmYVl5mzDSFZE0hXdAOTnvWGIew6idVb7HLNJCM0%2FenP%2B8h%2FiJdL%2FS94bzsTsyA3Y3axgQWMT3UXvbvjT2RyEWAGQ%2FuJJIublwVKWfFW7INC1wd2KaJ%2BFN8bU3kjVQS8Cu0u3%2B6GuPHOyG3Wk0Oh2CV0om5uiJmc1%2BpW1AhJmQgLLB9QFvaR03b5bC8C4hyy2r1zwVbhIrJgu3vfbO%2BuCiit9F%2BXZsgBbwNMt5R8exsoxF9ZaIJFbVJI4Wb3%2FZpZb8%2BdaB5AsvX2yyWAljI3qybF7Rad0ZvAta3m9p%2FW0kRsS2pa4QGBlXwKkHavRh8YJrrnyRgy%2BuHxLasDAgV49ZCZmHpjJk7EFjsUrsEVZp2mUO%2F8%2FV1rEGE3PjxJwRPl0I3V4wviypyHh0i9gCDoADVFKlf903h4uVwdkKTFWGaJ2jnn5NMEWzrwUoqbC6z44; x-amcs-refresh=U2FsdGVkX1%2BBFMx0K1BskvniKMko6g9dZL%2FRrMHdlu65byjfEOFXCCXivYpgEbezO7ES8q3WM5O3Drw8lF0UVMIpNciEccK3Nl9pSgvDBZi9cpJB4KD4yRo2XWHfoFPunO9lRxfHvpgOHgCQbKnEbXXXPq3OjEDk%2Bcp8qx%2Bx2IWw2t1SM8%2BKPuRZ83J%2FALz2KkIwL41pPCYyGxpTd702qaJEusq%2Fpif4FfxfRqgf19JrvhWgz2zOf%2FKbbnlwTpsw';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2FHUeMU4sdxP18xY2P0wiZ6sW8K6DrA7MvISGS%2B3eLRnJ1goLebZojxXAuR0Skw7qg7nOdQ9BqlJRSKCpreQQl5e7iiMNosQTceVXDpvKH7fkxzzP7yU0TBCBamayf4AYOB7Or7ZOydyB2dda3slv%2BOELIcTSM9OGWPzee7IEPlEnqcTbwbA87vKh8ZGko5uQRIwzj0wNIr56Akh47%2BNun1QL%2B1zN%2BGA%2B%2BLqwUqP3DeyI%2FuJLhpMzm4EiGu%2F407Hh5Y7TWMoSwaAZ2grCTzg6hB3XjsDJTZUxdKtLESjdjlSQSiDXy7Vv%2F1Js7XK6BPfXn9j7KNCW2uOTelu%2BG1eQUJjKUm0elx48IIdLf3p498O8%2Ffr6hE%2BFP09zRjHstmCQSoLmS5sTDhV%2FbwEAJDfeYOdWQPdY%2BSVrVrAOUQeR%2FvWgUpvBDtEex1GAY4WpG23tNIFJP9MuL9wfVl9532nA18JrBKFLeD8cYwiayL15daizBjjt6bL3xf%2BJKNKbGWhp3idPpO7MTOxCzl45yOThrWz2SV%2BKQ82DIJsOR%2FoAG%2F%2FckBbsoi8vfSWoZ4UB3fAi%2B%2FiXtWdl0spJOHAITFb8TavRA7NBfo6tdeq215dsfeagZokLhttJj2BiP8vu3h38gpUyB3JUQiuQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2B5anS%2B7MhJmrVE%2BddnP3syTD4D2Q%2BCReFsjNO8mRW1Po4VAKzZI2Co4zzvi%2BFl6GGJHQNL66K4DaGjUHZN9FMXGnrInMpR3mKJge64Yb%2FSVWQkY%2BibnpqRY36jjttL%2Fuk%2B0QzcPCNFTj%2FWbQCjJ4h%2FRueHl%2FZL%2Bco8zqpDIU%2Fa9uaZvzccrOCb2f75YQ0Vd9uMIyaQeg9ECK%2BFw68k8RfXG%2Fv3As1K40t663hmK2Igj7gGpcF4vE%2Fh';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX1%2BnU08SLfbo5NShbeUJN6LM9NnTJBr5W%2F2v8A%2B1%2Fa0GnlDyGvweprQBTfyURB%2F0thsObNyuZpo50l9yxaPLIEfiXv%2FuNv7yYkMX4sA41O1zo1VOUsZbffnsT7mmR13pb%2BH8aWkf%2Ff9vHOCz9HTuQ6XhBKp93%2BHPibj58uekEmFC19ko2qaX97lPXHJ8ZPuoUnrRkl7NWHDZsMAv9X5xhcbTWjyWpUrZz4rnsFoQ9pb6J2Z9tkP6%2FomqAOe5KV2bJ1E8C%2FbayJ3dvs61d4tNooyWiSHPEsCOX%2BdeZ3FK7hsypMj7xBPBuLmKJyaYldb1AL1zdqNGkKnumSl6D4PLNDm5kEGIBGDrJKbJqXMaVo5tDZkarmVbv3OnBgxDZILxtBk%2FRxQbi5YmuB%2BTsXcIt6aHmC6ajO7BuyLJ%2Fi%2FtiwJhfugBAu1tDncWRNgU2cNj9%2FKtaYojrGSfUF%2FBw9KgQwvfGHR6vPhYboG8ixONMGuyQEE95Yteglc4X1Or4vLg8PhlYcVg71seCTEB7x70%2FLgakBpUOPbhyCdlwtGjHBuFwDxmuLiwN2C0J19cLo6YYEUKH8eBcZTfDYYxiy8uloRUX2G0tqln%2BnErMc6Gk48TJeNYf0AEqWxM; x-amcs-refresh=U2FsdGVkX1%2FHjy0TSLuqiWZl0C%2FGIH3aY9TaPuUijldI2UUPKNAysWtbNovRro1SKluy%2BBiaLTHFCGm5LaUfAwRYA2MmYDGK%2BHJZDigvNlXhsYtAQzoapgJE09vwTNCDn8zaC%2F16yWnuTAOPDu5Mhgi2mPC%2BMwaT7fFlunLZ%2FFVXcneZrFDv9auyIXuezZjqJaIGEOaa2IpyYf3r4Ky05YvMN9ALWsbnoVJTndmyQTYe3taWv4hbrNoNRRs9LjXX';


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


