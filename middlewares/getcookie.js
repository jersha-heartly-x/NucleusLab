exports.getCookie = (req, res, next) => {
    var axios = require('axios');


    var pr = 'x-amcs-auth=U2FsdGVkX19W9NQVYCgI9Q4vyeShokGthohREcNbvr8s8dPHmODgQYjLbiIF%2BRPfdbwBMqO9qH7aHnfb7IkgeiiF4gvhnIAOZU%2BmcVmitmBZo2b0qqUOsQoE3sDyyPZCP%2FO2%2FgH3xbRj3laF2ykDeciQVTbJJ9i0G9wsRuh4en3Oe3T89Qq2ZaJ%2FeQqmUbG4Zfk9ZFISUKwJT%2Fudn6KNhIYwfIfz06aJ3xAV96aL3FBI7uJHx8S7TRUMryTw2q0MtAQRHWuYCjAEB%2FG6j6ZXZptWmx8iOvg86FZkp1au%2BmSjnVQCJXGALVyi8sHR8rWHg4bGfrppFqBRO0%2Fs5O24IBPmUY139UJUMSFCT2y2qCJCaCVsyLGhUnqwVYhHtmziZ3pvEtoPCOC3KStg96V0D2HPeFATwqDDFlOmczIiVJw5vwtH0DfTRf6S5vZpMjEqlc1k5WI%2Bsfex5LQNcp2NEuOb6e8s9SsIVup3JSKxcw4nPnpyxIhb9iYIPDBr7l7%2BVuwFZUVxmbgWXJTdlVkhV8YmTvImw6s5wf86%2FT9hC7UeCzFyDJ8ChqX39Kwss4TOciL4ZqoUB83bv%2BvF1tqKKfvrt9Ud90zLWAsLoltQWioXOOi4BoHiGl06VK4smnTZODsbxWIoiYoOSDm0zW04c%2FGKEquQKeT%2BHIxqa%2Bita9NCyh5dOBnEgf34p%2FHsv7lal9XCWPOPcw%2FcD36MLAy2euOIjq4bhCRbmpbQvw7crVOEt2D6NCTDVWjVkJLeURyYQDMoJpK5JYEm5wPngQVQQwO5%2Fx3HHQe9VYKDQ7pRVDcJZ37spD4o%2BxHwuT7YsWNrI%2FXa%2FaZGKlNyAK%2FG3KXwccHufP6w6xNAaK3j7L31V%2F5%2FupYRABKsIiips7UdwJu3Tb17c4TWY9EkuDOcMWI%2F%2BQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FUhWPlH0xt1s5uKGNrQzaqqZkaVVasyCDk0QWEKPViL7GkLyIv4PtuyMraSdl8OtiyVR%2FAJJh2Ah9R3j0gxWMGyd98IsoopYHMVeciMiuXBa9f%2BvcbOhM%2BRV5w9meyEyCgHAQ36o9qyxco77MUKU4karocXg0gDp93SUFdR87TCm6GIBtKHWweqenjHhWdyATHop1hPIM7fRt7fiGkYWBW2eAFvjaYZyoymulenQ1aPom%2FMJILkqKj';
    var student = 'x-amcs-auth=U2FsdGVkX19Kg%2BuPKCm%2F7UtUhWLPJ%2F4Snd9z8Bojyq0Xo%2BSdl4D8kEHNFgWpEbCx1LhDQW1PN2%2FogjFB2N%2BcW4zgv2%2F7j66Kag0B5SuzHUr99b7OwPSsl5dT%2B85MaUaqXn4M7AJdTuOI5J7L8Lm7SFfSrBfZnfa%2BGFdDhknSQEZg8j3WpjQh3aZfB7Ojo9IuznUlRdqE5xDBXZBOlVRLycYrxZH9xJIH7qI7I1wVgGi91N%2F9Jry2q4nFv0fFGVzu685E2c094nVfHe0MYRR6v8WqdjOoa47ugvYRbMXRVqzg7RtxhALUUdUAkgWSlRtC6B4T1CnaHhpn1aCv%2Fl5BWISH8A5pfeDwnXpo%2F77ZSOGKvmcZaOHtQYC33YGnz39HpgfvuZj14osHc4EUvB8AtJL05LYJvXPS4ktUT%2B9D91OE7Zi4HqloBB%2FDsoexfo1%2FDgECBYZFL%2BiLPQfhdbEwKUlzkGj2GND37ZZhDti64SuqPpjkWAcbY6Uwu66LwVEf6OG4hkrkQ%2B%2Bw5u0oCfYvuRrNbrZgb3kiKgmH7Of0lrZBsCJpwNwIcPtZq%2F0fQ%2FlT4ToqE%2FDI6rRECEO9Nc7zWWgkW0c6CuwEgCtF9m6NWM%2FE4mMza0D7vkhsfaZBhc4rGoKN%2B3B3pEdD6E%2B13Ivbu1wYmpRfV3HMq%2BbUvmG65168ZaacXzAE3RkavNk04BGoq9FohUiidjiO3K%2Fgq49XxBWC66HG2y6%2FbZqvbPhX5Icn8SIrGwNDQ4hMdSPDZEH2wi7dl8rVo6bgBn4EcNbq3y%2BAgSeiL1XWS03KQCkYRqM5cZxy%2BqBli5KxsBy40QUyPJgY6a%2BXPNA01LJDIYAoL1S16yS8sNT4CvnakK780RvM4gQt1QjeJVbvAnlxtXZF; x-amcs-refresh=U2FsdGVkX1%2FouoU4zaGlK7KVoK%2BtFYiN0vSOiMMHb1cKY3DMyAzvXP%2FP7BSPyJqx2d5uOGZLRKSSFSMHRMkJ00V0dZodAbY82fvP9soo1StCkOA1hlAWjsw56yiO64ck9czuU3pQ6hlZj1Ydw83EybOzmkRzdh%2FDGc8BR3mx5zagsFq0EL2K4bcBcCpOfm3U2MJHXL8Var9ZOUB4VKHf83jfQtc4Gr70w0B%2Bs%2B6PGy9eWXizRoah3vTnZv67Ib11';
    var teacher = 'x-amcs-auth=U2FsdGVkX1%2B0aRxdYdF1TJquNPuokDnIw8FiR76S7oA%2Fijsqvpg4Geqa%2FkUoZU4ToRGbI8Oc30NcVZ%2BZ3qmDaBfOC9G1iNnoOfdUL8EMevxwBr0ILRxzr0rMwcGniV1ZGEw%2F0CceUCI9v01Ok9mMnH9U0BDdfpuh28u9%2Ba5F07AvFCdYBk2Qe7qRcEmy2G0SxJLbr2wX0XHqX9pMhL29G0fU%2BOneQPkDeMuoc73xbr0YAs1lYlWd%2FQ3AjOUzoZaSsbVgJ%2BNzMmEURWYYOkdelj3TOiuDghqTJKTk6HbvsmiN%2B8l39fHqcN9ucaon15VuuErnI21aNZ%2BWQd1B%2BCnQ4YdpkUvYi3Jeou7bk8OenXTzz4zIDQdEhT6wjd2X%2FJ53ubKuO1yOK4DvJ1vlbYL7unMdVHnkc5GyC7B2TjbFG2%2FoWJNxK04G0hb4vsIXkI2Mo0en8fwpC17kIlN6HGBvt6p0eOq%2Fv9vGOaL48g%2BDtaKYqbveKIOCJ0k4DfVMO6khhjUPyAJPk7k2XwygtTzzKeExU9pw1PDyjdsnk0d9xXLOMvlqZL3eUSq9areFnFEHP6AyLtFeMmW6Rien6jrkWCpSTUN3vpN7dLlsIYukE8hTMz6zSRxJa1EdMiCQ1bqKc0shbcUN2A6M%2FatwfuS6GOw7rh8Y3DzxbSZ2AlmoFM%2F7GEBXKSkSWGMLacxqDdAtW0vAKk5i5vyp7LHGARTp2jNuFX7aBd7xQkN4VYIuQUJz%2BfRiTBPmgwLfQsnzD51LNIKFvuq4cQNaISXUyRoAo4bCiTyjN2PsF%2FBWkCizgBaU6l6BBWj7cDjJsXM5Lk%2FeOtVl46RfOHT1yn72brkxAszo5DTSTBuvmFosTjI4nA2lbUcMLipT93zLOOP9TjSVdFW%2F%2BY2wEql%2B7yR3HvZpMA5mWAhdFYVdZtmEltCCNWej582MH4sB4ZJHkCFBBXbS; x-amcs-refresh=U2FsdGVkX1%2BzZ8fDQBI6QHKLUaBZOpo3mAQeZ65v%2Bq%2FlI3y3OOyVfYfCnjOVQ%2BESJusYiR%2FV7X6%2B9miQ26IwYtiaXHoQUZFW6NSIwnLzaCqUzDZsx7BXlMeJbRi7ZjdL2VOW4fJVIdml4L52YJ6EC%2FkJF6eAqdqbn1xhcN3o2xeVn1LgOrVq74AesEb%2BqNIGqt3wIgB%2FoPxdSukOADKtwbAV4Bnh6Fmzu8S%2FM5CXJCLBsk9vQ0WipjbTqeIPC650';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2Bk1pmBvILhSKeYPR3lVsEh6pvn4OTPNHpicTlBhYylbfoYkYzVGpfjbJ%2FMuyy8yDCMM7MFQsRQlyaTOWhbRkpkpx0p%2BmSoyPqXNWShR9%2FFJX7sYB69gm0P9ylauPMDabeTl4hSQ91RXowbHRH3T%2FR4Op%2BwpZzFiZSV8wnectsmqmnrxBOskcvS4mNA8Ti2Uj9npJzK1h1Q%2FDHrzMaG3qD7J2PTUhCIBI1A%2FPSbrijVYfifJ9RIac%2F6tICfi5VX2eAdVjawRCCT9YxUhfdpBUiS8mZmpjP1eu0YOf3xcudGq%2BT6OpFm36tR%2FiVzHpShdweD5q7syq4gTe9NDgkNb8vC4fNERSrEmxxNi%2BzV1J3SaL4f1d2bExUUcj507RmNw1Hciqs6EPHnl4Whf4J05iE3Mn1bpbqwDfoHfQbUr%2FSHpD6BqppxzJSVmokJsSxh37Bko9zuWU7s4fAeDXritPfg%2BcaojJdRcToN%2BIJR4zqXF1DpA0H7iWLS%2F1YSYf7X4S6OB0hvIwaNK2VnFE4Ym1cs2D0k9IymmzCbNg80SdTe938dhLqEWlClRTepglwJdj8aigl5yl4YXY8MVBxo2ZZ%2FBAqDx1iG4VExl7hp%2BvONbhmDiZw898nclICpkXCa0mXflaCVLPn5mw%3D%3D; x-amcs-refresh=U2FsdGVkX1%2BAL%2FOTJu6i85Ud4R73Hx0w7hstjMNSGxdFRimde00KK%2FU9U0hQlGN3WCLw1jJTJEmP%2BmRK9hwpCa%2FzrsuIt9YSbMlGIpc%2B%2BrPhDlr7nNHdbxdkKsxyRfay0fXcsOaGtiMhbXAUrXzj8MvmpB2AMPqq4nyynWz%2BojqbgxX%2BtcBZNni4jn82tGUud6m1dsmV2w6Bjy%2BozK6G5wfjPzFcC1W40EJpKBAjKBkM0MdrNqx5NBz2%2F%2FP7h%2Bvl';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Op0BWFIWXw6ccF1vv9ZpNXqGzefT5a6b32VMfFNAGGWAOM4BY0LYNMVDPDsi0ij6oNV0Mz%2B4pU5h6ff2MAoxljSryxVVIL0Q8fZMy0%2BQJ8h6ArTo0zM2Z2fVUidy9VEm%2F7lb8sw3uKLxiK7KScMIhyI%2BGkX2vSpjX1yawA39uW2lKTK2d9BeS3SHHfduQzUIF3POI5cDVKX8IcSq4Oou3cwDJeeXugKhywzxj%2FGR1bLPDrfkgL1K2X6Fc08sNghv8M5EQsU6PdJOk2WDYQjJmhKJeig71%2B8dDz6MQU%2BlsHJDIES8%2FK2ACN6x%2BlDDANA8XIQA%2BiU4Lead7AHqUBziJ0RnmhQjx9UkzQ5eOoqoMymCgEybJWZkaWVkBi%2B2PMIy7t%2BWEFmLeZqSDccFBQqP02iqTP5F2BiR6ggX%2Fc3oRhRSqyVugKz29TS9oK3HdZck8jHRGA%2BZH0WCLixUScOT1Bo2gUwbvDmxg1YEn4z2Zqj2aAuYDa8fqGTD%2BYLqyWquwbqM1Y5PJcrqvenq%2FjwEdsCsbPZr7no9gW0evTlVjEftZYakrCrRQfzvEBRlu6JlJrAYMr3hp%2BUBqJ5XS9EBnDUFTWhgMf6N%2Febc0vtVbs2NZj5PnNZwnd5TDxMSKyoIvn5rOz0gzFw%3D%3D; x-amcs-refresh=U2FsdGVkX19w%2FwAcqfAN4VWcUEpe%2FHylHBjx8uPmt3VN2v%2FkfGkRsHBC8BwA62ihjZPxNP5tmHgR9uKn7s631WMQhGGoSr5fJfH9LQbKx3MQkpxC%2FN%2FFdkiBLWfC96aTSp67fZXnWRZY5k6Y286zkFJ%2FR%2F7fD4jTUtQrRAO%2B0o3uxY3lf%2B7waEVmi58Ou48wjd4n3stkXHHDoI54vhTwVl2Bvgmr1Oxea0W%2FE0aTz0LwX%2B0YQDeEC49SOjvA66Vx';


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
                console.log(res.locals.isPR);
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


