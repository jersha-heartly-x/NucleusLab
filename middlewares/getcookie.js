exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var pr = 'x-amcs-auth=U2FsdGVkX18FweyunMguUAgZumxDUoL0qZyq7yth4ncPMFfx55b4Vj%2FYvt0bK6wbbGdGh5U%2FrE39iqQ9VBqktuQWfy0g27o94O7LNt%2Bncwzej9b0PXFtyiA%2BWpehjQsGfh%2F2Rri8sbX%2BAw0kMylyCqrhbjPXfJOcBE8GoLObLhVvz18aKSfMVMnLH08TrYMl2ZmhQteljD82ctoaF9KQb9Yp4SXPBBGpYGCzklY5cl8X%2F4ccLDpcn8B51WNWxjYdLCVqyWiNAxc2TLvvLo%2BJCqCvfflyF6H%2FL2aiyB0ce%2B10fSs6nhabDjq9FJK1VGgeyC%2BAjBtCJ%2BmUmY78GtNtOdxKDTCxPX0qboZ4szHq%2F6ZM4ukShpxepmH8xbPNrkPg9N47yZVf9QLQV9NAOcohXoP6764m6IMF359HUqGzh3jZ1b69GTobuJOyITKh2p%2FNwetQKTUVsc1kV2BYeExKFslTBJHX2EORkwj6J%2FLs89RP9DWYZikiroLleIDtNvUh53TaFUxNpal9vdq9CicsP205QPPnT47ESuSEuYStnjBDJAfI5gKX%2FfWVZ88e41ogEh%2FMjqBnYNumaOy5%2B3D8Zwj9NmvQZHdAnqKXAQ2BhhUNDrZ2BIWoYyfaXymmPJfow%2Fi64UPm60lYc5rcDOyXCkVa5n%2FdkLpW3pFlv2ORyo1l%2FJa%2BfgeHX8fSS9kWho1uay3g%2FplLlnXmpztq8ujP9XHb6%2BBVP2RjjaNL3GDA5iDX5Aw7OXQN6O2Hdwo6PYH2VtyPmUPsJQ1LbUrXg8te%2B0R8WtiCYSeS2oBzu1K%2BvgEeAJsDxJJohH1dct0wAzfjqOKZmPrK%2FRj0wbFu1GwGZ%2FbNuN4jUed8AxXlt3USWaWZZofhEOdK4B%2FtjJzLc3YcWufHQtSnQR18mVVV5gsMFQ%3D%3D; x-amcs-refresh=U2FsdGVkX19%2FhsU7HPwsX%2BXtkk4WynfA6vwu3wfSwvdK4XCAeEWavZrT8BrCtMWptLn7UGLtctHvb0Ud0MmGpt7bx2Uod484p73HQb3XBopC1bfFjhuGas%2FDV1hVHj4bcd1cFUq2A0D8NX8GaggxZucvUbCa8muYJdCH8QNNjK6RnJDyLV7rzVWFVshBG59SW%2FuNnbPledO%2FsgvjSz11WV7JBSoG2aVaTWQeM70UqvJtPjqpwUEOk4glyRGbWdbJ'
    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var teacher = 'x-amcs-auth=U2FsdGVkX1%2B0aRxdYdF1TJquNPuokDnIw8FiR76S7oA%2Fijsqvpg4Geqa%2FkUoZU4ToRGbI8Oc30NcVZ%2BZ3qmDaBfOC9G1iNnoOfdUL8EMevxwBr0ILRxzr0rMwcGniV1ZGEw%2F0CceUCI9v01Ok9mMnH9U0BDdfpuh28u9%2Ba5F07AvFCdYBk2Qe7qRcEmy2G0SxJLbr2wX0XHqX9pMhL29G0fU%2BOneQPkDeMuoc73xbr0YAs1lYlWd%2FQ3AjOUzoZaSsbVgJ%2BNzMmEURWYYOkdelj3TOiuDghqTJKTk6HbvsmiN%2B8l39fHqcN9ucaon15VuuErnI21aNZ%2BWQd1B%2BCnQ4YdpkUvYi3Jeou7bk8OenXTzz4zIDQdEhT6wjd2X%2FJ53ubKuO1yOK4DvJ1vlbYL7unMdVHnkc5GyC7B2TjbFG2%2FoWJNxK04G0hb4vsIXkI2Mo0en8fwpC17kIlN6HGBvt6p0eOq%2Fv9vGOaL48g%2BDtaKYqbveKIOCJ0k4DfVMO6khhjUPyAJPk7k2XwygtTzzKeExU9pw1PDyjdsnk0d9xXLOMvlqZL3eUSq9areFnFEHP6AyLtFeMmW6Rien6jrkWCpSTUN3vpN7dLlsIYukE8hTMz6zSRxJa1EdMiCQ1bqKc0shbcUN2A6M%2FatwfuS6GOw7rh8Y3DzxbSZ2AlmoFM%2F7GEBXKSkSWGMLacxqDdAtW0vAKk5i5vyp7LHGARTp2jNuFX7aBd7xQkN4VYIuQUJz%2BfRiTBPmgwLfQsnzD51LNIKFvuq4cQNaISXUyRoAo4bCiTyjN2PsF%2FBWkCizgBaU6l6BBWj7cDjJsXM5Lk%2FeOtVl46RfOHT1yn72brkxAszo5DTSTBuvmFosTjI4nA2lbUcMLipT93zLOOP9TjSVdFW%2F%2BY2wEql%2B7yR3HvZpMA5mWAhdFYVdZtmEltCCNWej582MH4sB4ZJHkCFBBXbS; x-amcs-refresh=U2FsdGVkX1%2BzZ8fDQBI6QHKLUaBZOpo3mAQeZ65v%2Bq%2FlI3y3OOyVfYfCnjOVQ%2BESJusYiR%2FV7X6%2B9miQ26IwYtiaXHoQUZFW6NSIwnLzaCqUzDZsx7BXlMeJbRi7ZjdL2VOW4fJVIdml4L52YJ6EC%2FkJF6eAqdqbn1xhcN3o2xeVn1LgOrVq74AesEb%2BqNIGqt3wIgB%2FoPxdSukOADKtwbAV4Bnh6Fmzu8S%2FM5CXJCLBsk9vQ0WipjbTqeIPC650';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2Bk1pmBvILhSKeYPR3lVsEh6pvn4OTPNHpicTlBhYylbfoYkYzVGpfjbJ%2FMuyy8yDCMM7MFQsRQlyaTOWhbRkpkpx0p%2BmSoyPqXNWShR9%2FFJX7sYB69gm0P9ylauPMDabeTl4hSQ91RXowbHRH3T%2FR4Op%2BwpZzFiZSV8wnectsmqmnrxBOskcvS4mNA8Ti2Uj9npJzK1h1Q%2FDHrzMaG3qD7J2PTUhCIBI1A%2FPSbrijVYfifJ9RIac%2F6tICfi5VX2eAdVjawRCCT9YxUhfdpBUiS8mZmpjP1eu0YOf3xcudGq%2BT6OpFm36tR%2FiVzHpShdweD5q7syq4gTe9NDgkNb8vC4fNERSrEmxxNi%2BzV1J3SaL4f1d2bExUUcj507RmNw1Hciqs6EPHnl4Whf4J05iE3Mn1bpbqwDfoHfQbUr%2FSHpD6BqppxzJSVmokJsSxh37Bko9zuWU7s4fAeDXritPfg%2BcaojJdRcToN%2BIJR4zqXF1DpA0H7iWLS%2F1YSYf7X4S6OB0hvIwaNK2VnFE4Ym1cs2D0k9IymmzCbNg80SdTe938dhLqEWlClRTepglwJdj8aigl5yl4YXY8MVBxo2ZZ%2FBAqDx1iG4VExl7hp%2BvONbhmDiZw898nclICpkXCa0mXflaCVLPn5mw%3D%3D; x-amcs-refresh=U2FsdGVkX1%2BAL%2FOTJu6i85Ud4R73Hx0w7hstjMNSGxdFRimde00KK%2FU9U0hQlGN3WCLw1jJTJEmP%2BmRK9hwpCa%2FzrsuIt9YSbMlGIpc%2B%2BrPhDlr7nNHdbxdkKsxyRfay0fXcsOaGtiMhbXAUrXzj8MvmpB2AMPqq4nyynWz%2BojqbgxX%2BtcBZNni4jn82tGUud6m1dsmV2w6Bjy%2BozK6G5wfjPzFcC1W40EJpKBAjKBkM0MdrNqx5NBz2%2F%2FP7h%2Bvl';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Op0BWFIWXw6ccF1vv9ZpNXqGzefT5a6b32VMfFNAGGWAOM4BY0LYNMVDPDsi0ij6oNV0Mz%2B4pU5h6ff2MAoxljSryxVVIL0Q8fZMy0%2BQJ8h6ArTo0zM2Z2fVUidy9VEm%2F7lb8sw3uKLxiK7KScMIhyI%2BGkX2vSpjX1yawA39uW2lKTK2d9BeS3SHHfduQzUIF3POI5cDVKX8IcSq4Oou3cwDJeeXugKhywzxj%2FGR1bLPDrfkgL1K2X6Fc08sNghv8M5EQsU6PdJOk2WDYQjJmhKJeig71%2B8dDz6MQU%2BlsHJDIES8%2FK2ACN6x%2BlDDANA8XIQA%2BiU4Lead7AHqUBziJ0RnmhQjx9UkzQ5eOoqoMymCgEybJWZkaWVkBi%2B2PMIy7t%2BWEFmLeZqSDccFBQqP02iqTP5F2BiR6ggX%2Fc3oRhRSqyVugKz29TS9oK3HdZck8jHRGA%2BZH0WCLixUScOT1Bo2gUwbvDmxg1YEn4z2Zqj2aAuYDa8fqGTD%2BYLqyWquwbqM1Y5PJcrqvenq%2FjwEdsCsbPZr7no9gW0evTlVjEftZYakrCrRQfzvEBRlu6JlJrAYMr3hp%2BUBqJ5XS9EBnDUFTWhgMf6N%2Febc0vtVbs2NZj5PnNZwnd5TDxMSKyoIvn5rOz0gzFw%3D%3D; x-amcs-refresh=U2FsdGVkX19w%2FwAcqfAN4VWcUEpe%2FHylHBjx8uPmt3VN2v%2FkfGkRsHBC8BwA62ihjZPxNP5tmHgR9uKn7s631WMQhGGoSr5fJfH9LQbKx3MQkpxC%2FN%2FFdkiBLWfC96aTSp67fZXnWRZY5k6Y286zkFJ%2FR%2F7fD4jTUtQrRAO%2B0o3uxY3lf%2B7waEVmi58Ou48wjd4n3stkXHHDoI54vhTwVl2Bvgmr1Oxea0W%2FE0aTz0LwX%2B0YQDeEC49SOjvA66Vx';


    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': pr
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


