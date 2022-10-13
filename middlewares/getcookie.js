exports.getCookie = (req, res, next) => {
    var axios = require('axios');


    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var teacher = 'x-amcs-auth=U2FsdGVkX18PLemMeIHifiOR%2Fg%2FWS1FAbE%2FYW%2FaaG8RYwF39Lq52guKuGvVV5BTcu%2FwuNoGWFBLn7IFw4m6ylijdMDlm%2BEkEy2wTNw8tXTb480P0RU%2FtKRcP6oBWs%2BtdttX2%2F39S14mVgSLSJO0NtItsfylV%2FM%2FzerGe2XWoheSlqD18%2BCV1SeVGiHyPYQHLnqYHX2zjnd1LDdGlwfEkWamRSAqK337wFMvYej9r%2B0gywF%2FY7jlVEpoiHAYTcQj%2FxrhIggOcwRBpq5%2Bc2K8PI%2Fx5PZx7JvogtQOIWRmZAaxOL77h2MdfQb%2BORs3KeqhOOJWvjFwSEJ6o1SnbEUQakeS17TXq1LCRa7pYNwisnxBYuuq7ibsjeMP%2F1sbQ2bJWs%2Bd7KrAlUvYis%2F3lkzPqIFpO0HLi%2BRAqT5jYoX5PeRPRj6PbeR9FAYCMD3UWuqJArQwu43wfmoyXh4ghRTMyyKBeIyKYRQ%2BIVpQWH8qLdmHNXf9pi8upUOCNOG4ezjjkWOMvrPtipW0%2FISz%2FagCvw4%2FaSNlv2PINYvvRbuOHLx5OcPfmlInsM0fcBa%2BFz3uekxE88LOF1BoSiITAgdqq%2BrFxblFShhwkQWbswMf6H2Nn8MyzoK6hyyLdnT57tlF8w%2B2XWUfQ3OiV3kmVVufFL4D%2B%2FO6SKJFIgsPqExLpNeBPZUVO%2BkTHBt775cUph3KRgyue0dzJtZtrPz76vQk%2FYq955PLKogbjGZ%2Fn4Y%2Bx%2FyWsy%2BNYi1F4Llx1v1%2BnakkXEYUnKOqzBwvegm9VduhNlET4QuRxeQm5VSJq9R1VGxC7%2FDvWXD5gFo5oD%2BT7Zq%2BOBXOrwUa%2BW%2BDkrUqyXxYcri%2Bnk6o6NFsPlcC1yygDDmgBvadc7YezNSyxt8Y3pSMPYbB0i8qJI%2BzkJCnBff%2FZ4%2Bm2b%2F88yYeNJY3Y4ft5hDBGQiGrI8aYRl6bUJ6xQ60d; x-amcs-refresh=U2FsdGVkX1%2FGTVQr6yCxqpnC1vFhQRd9nAgqHKIlTaVljyzruEKL5tF%2FlnNlTXljj579Qvh6rkNmJrMm%2FQrg2oCBNMlrIB%2F5ludKt3lrmilx34opfp8naqnZrHUyzbxS%2BpNiz%2BSKz0oTi%2F4xIFZW4wA6MCpFhGU56R04Di7nXyURor%2BehbJV3BgWUyMxl4uf8aRghDNyPeZ3zeqlcHLq7xc6%2BshgMAEnAkWn7AcfJCts8homX9dpaksg47TFaIB0';
    var admin =  'x-amcs-auth=U2FsdGVkX19bDEx0KrBok8Y31LfX2TlTe%2B3W4wJvzJQBm2vj%2FKaB8349VOGSbK0ESsPw9pPVRnXi0KVk%2Bo9FoHLCFGfX22%2FUOKFbh%2FMiWTSxAoQ0nAwEHDgYkVW8YkerAsRMn5tk484aVxHqLRknoDCd%2FpEFTP8EKQhLTRWVHUa1l%2FrX1JRhdpD6McWLuhWhBG%2Fwn16kRi86k8kaMQ%2FR98Pc8NYS6JKWAdp%2BcS65YVQeGEuCselP8xB4EmtixbNUJxAo0wSzNmh4ToQoF2q6tVZqUPQ1c%2BVNi%2Fh3cxzczC%2FluahYEWAxh09X2T9KyWRrg0nA6PtiedC%2F48tglBzo4cf1mNGdgXcD88ZTuPKnwjB6tXraI3DWSa51Xo3s1fQU6Q8VWVp6LgNqidEpEY29cBktr4tpK3clBep99FVVHeF8n55cH9cyij6VAF7j55Qbj801crYDlW0qv9h9vkKp%2BP4PdfAud0GPSitmEZFTYCYdAeYvTNWcCazFsP8jcBBAEr5dwI1opPtBzXH8Y6yTRa5FbwyKzH0BF8ivAYMOjd4CECj%2FdkBC%2BGYuW9OyCZj3NAzKjBW935L%2BWKGvATnEN3u72z4X0nRG%2BGY5np3AGXdnPK9xjijrgCGEKw1%2Frsxu9PdpoYoGGuIXL3GAg%2BZ5uA%3D%3D; x-amcs-refresh=U2FsdGVkX18EYDGPIFmgDIcArlUOFgOigMTmjPaPa4UTsaVP%2BpnVTO0ole8qLd1iXul6kF%2B1sOOznXOlOkBvzkh6AUFs4piygwG3M1c7DGe9ti%2BOVSMvqgnDtI0b0IRJZe4VT1qaZldP9RXVw4JrwGGh%2BVADePPPUX3tAJ1NmpWohtQfbUXmVBvqvOr1V1UIeev7hnWCaK8stWjGlshcxcKqxgp5ox%2BFPSaWRlyabqQw7qv8DxPyiBRaAJhU82iT';
    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX1%2BnU08SLfbo5NShbeUJN6LM9NnTJBr5W%2F2v8A%2B1%2Fa0GnlDyGvweprQBTfyURB%2F0thsObNyuZpo50l9yxaPLIEfiXv%2FuNv7yYkMX4sA41O1zo1VOUsZbffnsT7mmR13pb%2BH8aWkf%2Ff9vHOCz9HTuQ6XhBKp93%2BHPibj58uekEmFC19ko2qaX97lPXHJ8ZPuoUnrRkl7NWHDZsMAv9X5xhcbTWjyWpUrZz4rnsFoQ9pb6J2Z9tkP6%2FomqAOe5KV2bJ1E8C%2FbayJ3dvs61d4tNooyWiSHPEsCOX%2BdeZ3FK7hsypMj7xBPBuLmKJyaYldb1AL1zdqNGkKnumSl6D4PLNDm5kEGIBGDrJKbJqXMaVo5tDZkarmVbv3OnBgxDZILxtBk%2FRxQbi5YmuB%2BTsXcIt6aHmC6ajO7BuyLJ%2Fi%2FtiwJhfugBAu1tDncWRNgU2cNj9%2FKtaYojrGSfUF%2FBw9KgQwvfGHR6vPhYboG8ixONMGuyQEE95Yteglc4X1Or4vLg8PhlYcVg71seCTEB7x70%2FLgakBpUOPbhyCdlwtGjHBuFwDxmuLiwN2C0J19cLo6YYEUKH8eBcZTfDYYxiy8uloRUX2G0tqln%2BnErMc6Gk48TJeNYf0AEqWxM; x-amcs-refresh=U2FsdGVkX1%2FHjy0TSLuqiWZl0C%2FGIH3aY9TaPuUijldI2UUPKNAysWtbNovRro1SKluy%2BBiaLTHFCGm5LaUfAwRYA2MmYDGK%2BHJZDigvNlXhsYtAQzoapgJE09vwTNCDn8zaC%2F16yWnuTAOPDu5Mhgi2mPC%2BMwaT7fFlunLZ%2FFVXcneZrFDv9auyIXuezZjqJaIGEOaa2IpyYf3r4Ky05YvMN9ALWsbnoVJTndmyQTYe3taWv4hbrNoNRRs9LjXX';


    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': teacher
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


