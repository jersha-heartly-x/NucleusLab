exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var pr = 'x-amcs-auth=U2FsdGVkX19W9NQVYCgI9Q4vyeShokGthohREcNbvr8s8dPHmODgQYjLbiIF%2BRPfdbwBMqO9qH7aHnfb7IkgeiiF4gvhnIAOZU%2BmcVmitmBZo2b0qqUOsQoE3sDyyPZCP%2FO2%2FgH3xbRj3laF2ykDeciQVTbJJ9i0G9wsRuh4en3Oe3T89Qq2ZaJ%2FeQqmUbG4Zfk9ZFISUKwJT%2Fudn6KNhIYwfIfz06aJ3xAV96aL3FBI7uJHx8S7TRUMryTw2q0MtAQRHWuYCjAEB%2FG6j6ZXZptWmx8iOvg86FZkp1au%2BmSjnVQCJXGALVyi8sHR8rWHg4bGfrppFqBRO0%2Fs5O24IBPmUY139UJUMSFCT2y2qCJCaCVsyLGhUnqwVYhHtmziZ3pvEtoPCOC3KStg96V0D2HPeFATwqDDFlOmczIiVJw5vwtH0DfTRf6S5vZpMjEqlc1k5WI%2Bsfex5LQNcp2NEuOb6e8s9SsIVup3JSKxcw4nPnpyxIhb9iYIPDBr7l7%2BVuwFZUVxmbgWXJTdlVkhV8YmTvImw6s5wf86%2FT9hC7UeCzFyDJ8ChqX39Kwss4TOciL4ZqoUB83bv%2BvF1tqKKfvrt9Ud90zLWAsLoltQWioXOOi4BoHiGl06VK4smnTZODsbxWIoiYoOSDm0zW04c%2FGKEquQKeT%2BHIxqa%2Bita9NCyh5dOBnEgf34p%2FHsv7lal9XCWPOPcw%2FcD36MLAy2euOIjq4bhCRbmpbQvw7crVOEt2D6NCTDVWjVkJLeURyYQDMoJpK5JYEm5wPngQVQQwO5%2Fx3HHQe9VYKDQ7pRVDcJZ37spD4o%2BxHwuT7YsWNrI%2FXa%2FaZGKlNyAK%2FG3KXwccHufP6w6xNAaK3j7L31V%2F5%2FupYRABKsIiips7UdwJu3Tb17c4TWY9EkuDOcMWI%2F%2BQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FUhWPlH0xt1s5uKGNrQzaqqZkaVVasyCDk0QWEKPViL7GkLyIv4PtuyMraSdl8OtiyVR%2FAJJh2Ah9R3j0gxWMGyd98IsoopYHMVeciMiuXBa9f%2BvcbOhM%2BRV5w9meyEyCgHAQ36o9qyxco77MUKU4karocXg0gDp93SUFdR87TCm6GIBtKHWweqenjHhWdyATHop1hPIM7fRt7fiGkYWBW2eAFvjaYZyoymulenQ1aPom%2FMJILkqKj';
    var student = 'x-amcs-auth=U2FsdGVkX19Kg%2BuPKCm%2F7UtUhWLPJ%2F4Snd9z8Bojyq0Xo%2BSdl4D8kEHNFgWpEbCx1LhDQW1PN2%2FogjFB2N%2BcW4zgv2%2F7j66Kag0B5SuzHUr99b7OwPSsl5dT%2B85MaUaqXn4M7AJdTuOI5J7L8Lm7SFfSrBfZnfa%2BGFdDhknSQEZg8j3WpjQh3aZfB7Ojo9IuznUlRdqE5xDBXZBOlVRLycYrxZH9xJIH7qI7I1wVgGi91N%2F9Jry2q4nFv0fFGVzu685E2c094nVfHe0MYRR6v8WqdjOoa47ugvYRbMXRVqzg7RtxhALUUdUAkgWSlRtC6B4T1CnaHhpn1aCv%2Fl5BWISH8A5pfeDwnXpo%2F77ZSOGKvmcZaOHtQYC33YGnz39HpgfvuZj14osHc4EUvB8AtJL05LYJvXPS4ktUT%2B9D91OE7Zi4HqloBB%2FDsoexfo1%2FDgECBYZFL%2BiLPQfhdbEwKUlzkGj2GND37ZZhDti64SuqPpjkWAcbY6Uwu66LwVEf6OG4hkrkQ%2B%2Bw5u0oCfYvuRrNbrZgb3kiKgmH7Of0lrZBsCJpwNwIcPtZq%2F0fQ%2FlT4ToqE%2FDI6rRECEO9Nc7zWWgkW0c6CuwEgCtF9m6NWM%2FE4mMza0D7vkhsfaZBhc4rGoKN%2B3B3pEdD6E%2B13Ivbu1wYmpRfV3HMq%2BbUvmG65168ZaacXzAE3RkavNk04BGoq9FohUiidjiO3K%2Fgq49XxBWC66HG2y6%2FbZqvbPhX5Icn8SIrGwNDQ4hMdSPDZEH2wi7dl8rVo6bgBn4EcNbq3y%2BAgSeiL1XWS03KQCkYRqM5cZxy%2BqBli5KxsBy40QUyPJgY6a%2BXPNA01LJDIYAoL1S16yS8sNT4CvnakK780RvM4gQt1QjeJVbvAnlxtXZF; x-amcs-refresh=U2FsdGVkX1%2FouoU4zaGlK7KVoK%2BtFYiN0vSOiMMHb1cKY3DMyAzvXP%2FP7BSPyJqx2d5uOGZLRKSSFSMHRMkJ00V0dZodAbY82fvP9soo1StCkOA1hlAWjsw56yiO64ck9czuU3pQ6hlZj1Ydw83EybOzmkRzdh%2FDGc8BR3mx5zagsFq0EL2K4bcBcCpOfm3U2MJHXL8Var9ZOUB4VKHf83jfQtc4Gr70w0B%2Bs%2B6PGy9eWXizRoah3vTnZv67Ib11';
    var teacher = 'x-amcs-auth=U2FsdGVkX183Z%2Bxaw34t3JYiglZKEQiyo8qbXNW5duWntI%2FkZa35WQ5EV7QmxD1nOxFP%2BO0N0xpFxbySktJQOLW3eybN3FR%2BWE8QlZLeBnl7%2BAc00bFCCVsA3XjSSTOhmeEk8SPq87BjeqFWspAr5bQPwGYMWaJ%2F1%2BOu1TMo0EPgM85t4%2FsZOOIaU6Pi886YlMiQVvI6ADOmIu3i1AW6n9Tosg7IjJMl5FcIv3q4sLp%2B0lIC4%2FyQsvzMHjoY%2FT8NGjUWu1BNsdzkotRM3eStd11LQMn%2Bpylww3vlDGSW7zMAyX5AycBF76Cc9GLJoYvjpxSSI8A7Y9ofd3jIWOVfxxiN%2B0SqRHJst%2Bz53vNPh%2Bl6jfcBs0kKqkAp8btuo%2Fh6XtsadNqpu006bBx6eU61ZJ18oOUjFTObW3IH94wKpmNIzKT%2BUvhw86LadqkLJDCzKJKkHrbB%2BCKSoOL0VOQWQw3%2FlcxZHwXwEjHQWb0%2BU2sIDB09p5DkVXIehQ13yY9mKBZOfhPUIQQfnqCk4MMGs6Vjylh3BRfbu%2BZysAxd6ZGsVLLgSuLOcD9AlFgl0PQLVxuiHlMU0ZaVYrbTETofTyoe%2F1WGV2RmiTLVBnpmyGZzkmGDSRFG2yBtoYW7yXn0XUIuAZcriYSgP0DbLcml1%2BnWkDFxS%2F1vDgotoFuMCcpxsyztLGt5KhdJn%2BX7wQIzGJW3Q%2BkFkX6WAprWM9HazBL5qfn49Eg9QlwQrwLXkjzQYovQlvZVXjwneGru2vrhPklJI06aKjzYPmK21B%2FoA%2FIss047HWaYjWCPrZqPgcvLnffQbVd2TuxOgt8KfGlzx3cc2h3GsnkkAX0t%2FyKzOvXVq7Q8diV1qKWWdZ6PdcRQ97uoWcI%2FgthljSOyNhV2XqaOOs8%2B%2FOIRNEacwcLKrNOLXHKz9ETcpyJsmIzH7pVZUd9FVAth87XSIRXydJaj; x-amcs-refresh=U2FsdGVkX18YjDiyotAMECsQqaZnsRZHiGV8Bf%2Fh1CvVTMzxl3UgOftpMqPKzoxen1HWtoYazzlP7BLI0Rtca14VlsbRfylQ9QKOMY9iDUe8nlBLvYG9i%2FsguYLU%2BQWKHBIlX6fFlPIkDBDpTu8vohQ7NT8xGzATYbYMxUAQ%2BjdbO0blcbmuX6qR%2FjSQ8XbkzBtrterHm4uHb3bvUrNQkxS6RFfOhJGBb2%2B50fDNKk%2BCAZHMxwWdQXYeYyI4T3EY';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2Bk1pmBvILhSKeYPR3lVsEh6pvn4OTPNHpicTlBhYylbfoYkYzVGpfjbJ%2FMuyy8yDCMM7MFQsRQlyaTOWhbRkpkpx0p%2BmSoyPqXNWShR9%2FFJX7sYB69gm0P9ylauPMDabeTl4hSQ91RXowbHRH3T%2FR4Op%2BwpZzFiZSV8wnectsmqmnrxBOskcvS4mNA8Ti2Uj9npJzK1h1Q%2FDHrzMaG3qD7J2PTUhCIBI1A%2FPSbrijVYfifJ9RIac%2F6tICfi5VX2eAdVjawRCCT9YxUhfdpBUiS8mZmpjP1eu0YOf3xcudGq%2BT6OpFm36tR%2FiVzHpShdweD5q7syq4gTe9NDgkNb8vC4fNERSrEmxxNi%2BzV1J3SaL4f1d2bExUUcj507RmNw1Hciqs6EPHnl4Whf4J05iE3Mn1bpbqwDfoHfQbUr%2FSHpD6BqppxzJSVmokJsSxh37Bko9zuWU7s4fAeDXritPfg%2BcaojJdRcToN%2BIJR4zqXF1DpA0H7iWLS%2F1YSYf7X4S6OB0hvIwaNK2VnFE4Ym1cs2D0k9IymmzCbNg80SdTe938dhLqEWlClRTepglwJdj8aigl5yl4YXY8MVBxo2ZZ%2FBAqDx1iG4VExl7hp%2BvONbhmDiZw898nclICpkXCa0mXflaCVLPn5mw%3D%3D; x-amcs-refresh=U2FsdGVkX1%2BAL%2FOTJu6i85Ud4R73Hx0w7hstjMNSGxdFRimde00KK%2FU9U0hQlGN3WCLw1jJTJEmP%2BmRK9hwpCa%2FzrsuIt9YSbMlGIpc%2B%2BrPhDlr7nNHdbxdkKsxyRfay0fXcsOaGtiMhbXAUrXzj8MvmpB2AMPqq4nyynWz%2BojqbgxX%2BtcBZNni4jn82tGUud6m1dsmV2w6Bjy%2BozK6G5wfjPzFcC1W40EJpKBAjKBkM0MdrNqx5NBz2%2F%2FP7h%2Bvl';

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
                console.log(response.data.data);
                res.locals.userDetails = {
                    id : response.data.data.id,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
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
                console.log(res.locals.isPR);
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


