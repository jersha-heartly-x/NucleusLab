exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var teacher= 'x-amcs-auth=U2FsdGVkX1%2Fck8toKeeutClgjf%2BqJ79PdNywcqk%2F1tLGHhhSA5M85TRo0BVMjS54XhDjNgH6M%2FD90DTZmHztt7DcSoXK1H5HBGrZeuvqc7RWKs7r4pUArWRi8Xz1Yk0ZZSgBg0ehZLWPJHKICdn9K8J6jyHbHWk9IQM4QWwgwcqa3ln6w25LeE1%2Bh9tcUwraj%2B8SlaoI52uytnNLhhvnGfXXLG9MrlFCz3X9x49wHyqu5q%2FEGNyKlR1CG07Z1Sw1r1Wy1MT9%2BGLRj92Iz7JkyherQsnO6OQPB621YjRO9nHXGk8taws%2FLM4asCXNZTkyFm9%2Bc9KVxY2y77J9k%2BRK0ABawBAShD%2FkJlliXLLVVvO%2FJ%2B7Vcxa%2Fl%2Fb4H%2F5rGOCy%2BAUiJVMKqTKcAeGFggUbh8dZSjZc1UVCpWGAqrHk88cIMp%2FKbvAbOXqokKzH72583iG%2F93CEcR6iAUfXFx9gRuOr8h7OKCbKfOSEKitn492GhQJbIENbVIG14KSnoiflwM7qC%2Bm55tcUFfAsAuLej7o8z54iHFddNuCTzW%2FG0jgSA3Xktuc8CilkP1K7l%2BKU9oRQNWWbvFbH6yvCXlZ5x%2FcdMs143W0JKm%2F%2FdjcdV0tlXS%2B0RULIJY9rIdoONCE8cq1IbCEWFR0zTGiZYagELtiebD1EE9IxOdwWNXZjFx7UHEVG1r2y6nepmp6NfMl6tcsWohLeZF02qIriNAZw0nYdOzKeA%2F1%2B7h%2FTRDLaAgBnJU4UZLhVi1TYZPo6Sq9g8LZDJuuDEdeYNyG%2F3NmekYyIU98ciAgO1ebJZpz7tPKGm%2F8GomR6gscQefq4LqQPmNHo8fQ3bySZvn3av1NlmynoONKScN5ksiDeQnYzYlqAEW88ttKQCDqZvxkTsSzHCsjeBdm47XdMrtK2ekQc8U%2B6y46bELRF3BU4cDGO%2FmrO%2B74n9XUnZGZsSljf5L%2Fw; x-amcs-refresh=U2FsdGVkX1%2FXqhsKVsb8%2F%2Bu1j6HSHdePCC0v8yE1OfBa2mBBWfp7uJXqCiHrPaWnPjnGiufCrIgqzi2LJVXM890T1El94%2BXpGeONnWc6l6s2bzDf9Jzyr4HMlg909Kmu3LGyINcMm%2BFHPgZlGbyo%2BRsODD8M4F9tyfRn8jMJTcwvlKlBGa4L77l93kdQsIYWIZ%2FhZREvu5uSae%2BHIc3l240wdIuWH8VAufykSfTnS56fjSGltJ4uYABfK9oLqScJ';
    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var admin =  'x-amcs-auth=U2FsdGVkX19P9Y3yjKosL6gdnK3l1X7EOAuwqEXzVdoR4zV2LqrnfPizP4XWxLCYCTq5LyJZVy5wV7yJkEBfdHC9Dk5fBH%2B2MsYo%2FoFC94j9yMsqCDMeCgBM0Ts4MTUUHpCTrT1iakL89ycIAJBi57M31yr0gaFms0VwCiYosWS7ojU3tvFUCYbXzgsp1V90A5M0of8Lq7W8vw3EZwJW5soAZHKfc8YZJIefqe3xtxqslPcyo%2FTwm0dohV6F6Tn6Y8S1ka5jei%2B%2BZjkdgQ9Tfg5TRMBpvBg%2F9MApc4z9Ca6PoXf%2BYEQ3KZ8KvWaz%2BeosipIuPgvYHObQmLt743OFdDZfPbq55cPSIfIbUQPPB4rnQAbZxwgwu5cIUiM00C8M6Ddn2g29pYN2G4SHVEpIjSZuDDUP61QmkrrNm%2BOancsd6f8AZgxd272fTJ0vrvUs7%2BCOiHV%2FsaNcHc0retJJEvm4oLJaurGr%2FOjPvYRp4FP5PZ8cRc4pzP24eDXRhVQajEshczYHm8wPxGtIiVMraI5w6jqFpZBHOBa7wzdLNBoqoQihXnLn35V2%2BagEuZy3Tl6LADWcQ8yFnougv5H3x%2FAFFGCekP7aBSKBJOzNz4WETC7coT2HuEeqQUlwo%2F4%2BPWEREkEPY%2FlYNX8PWk1lEwJsOWG8Wlm3R7k8iCBRgPU%3D; x-amcs-refresh=U2FsdGVkX18J8Y3qeATvzspF1BXuS1rtErR9ysfaxvSCJ1dXwiKHlU4F4cLck2akD4Mf8YNq6iTqXmv8HfnL%2BmRblL2yWHe4PXQX7RICmrPPjqp8kQn9xrbGZlgtvVUDgq9mgT0RzdANb3F7JtV8QKisBBTIlm8kk%2FMRW8bHm0FTCn6qjS84Hg%2BMXkZ6qobVqBorrLqkTCIr3uNNBHk9DKYgFYqwlesFw18Z4Yjtjx7S9zd3nVa%2BDWHzRZYOKMDW';
    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX1%2Bz8WsmxvF3zr4hCkezN5CVxlZagy0HlTGIf08%2BmWKJY6PxEzG9r3A4TxzvGwfWPoJD9mnBZb6xsEm4daa8u1Eahk7IHJXnENkDdOAO3Unz0W26rvfCEKn0C%2BMLi%2ByEojBNmHcVFSQKzSN9cjVAO%2Fxf6LAWTuAvorkOCMbw2NiE5QWcjl7lhfm0xiOtXtj4m%2F2DAGmfwRPKSGTj2CDp8X6%2BccgBcCwyND8f%2FNwLHFgR%2FBPOZpzTZEN1GYmjjD8GtBEOqSBxGJ1WIdJ%2FLcplb4lOD8Httq9jJopBRWmrJtdHEleEm3eLeUkUz9RV1zAXm9GH8BbZkvJH1o1ruDFwZmfFwkdSyiYL8bPwM79jCeW6UR19UjsfDb5btdXPOoUoM9oI%2Flzv98UfHekKGLBrMqqpdUFw0sUPBc9ict2dmuD2c9vMx4ovERbyMgf4FdK0xsy1ZcC%2F5WMy7QgKLqSWP%2B5nzt19xsdJ7aVGIQA1ePzdokpmF1%2FapB5hP0PT14JhFOHf3W%2BGaTrPlxfaOAQG61Gk8zD8W3XFXYPRb5qpWg00sFWT5VCW%2FKJB37is2FaoVUJjLs9NRrOxT3oZ5B4e2VFUHxfiYlN1y57BcCzrrZTDCaTz5e7RSa6d; x-amcs-refresh=U2FsdGVkX1%2BM%2BU5wfQxutSOJHD2%2B2TLjEAJ9mpgaur83DRuEDSaEeEsVAVEPTwdWM3tmvL8pI6FIlmrc9aU9UODXuLmuxYjA3BVtJq89x3c3BXUHWURMEXLlRunAWFt68SwAkK%2Fj0Xe3wOGWPi8Tga9h6A%2BqETYAGIl7lmc7xBuui%2BwKsyveFZGo17sqbo1BJG4Afzel%2BLsi8Rkc1X9%2FWgfDSa4yx0zH4Umqdqe6RjYYkNldAbCj7zOqD%2B2g65GW';


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


