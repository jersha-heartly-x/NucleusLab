exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var student = 'x-amcs-auth=U2FsdGVkX1%2BoMpjISSpoxuk1vZ9LrlExP2WEcf4oiOSAqV7UTWNBlzRU2gWyjj7UFdLtuZ7i7%2FQKKH%2FSX8vhdWeQmBWsi0n2ODbWD5TB9Uq6qyNL1wdT33P%2FI%2BJsm1a3efLGdyFNFk6ZaDSjv4Gn205XkGiyTvu0TVhdQM4EMB32TO3bnfDHFps3ps8a%2BXA8oHuu9JdE%2FvCbz5bZenW1amPSM6jiDPvDT4QX4zOkNGnDVGl%2FHj7gNv4Kq6YlDz%2BxcORbQKhia8%2B2fK4LAub2mgXE5n0mAwOFnMpj1d4cKm2AXStKFG7nfIOGouD%2Bxhkbw%2FYcPG3GR4Ewv7Yt3Oupz8xEGvGYT59SqH%2FVzO33EoCL3J7y81F%2BifVexwJE7Hf8YT8QXdRl8w4suhl0cMSLJlSmHDChEkqe3HGGstBU9wTzJRXKprn0cFupZrIYu3ssMG2Q33F%2BLS09dv5UODYtGqSi6mRaEoW%2Bi85IXkyR07UOig2QAvGNGTtUUW1yckhttnTcxNtuZw80yioPARfSgWpU1hl71yKM%2BBUxSjuyAwEizkjsCE9T2LwEW4oTXQQLbCDAuvMTyo%2Ba2yQUFZDosaGo%2FWZWsSNTuk8oBbIdJMlTLBx5ooOX%2FCsOw61x%2FSv0KgWuIKVMPpkbURhkMW5Qzl3AsvLmJItY4EgNJ4vvqKaD%2FbhQvvSv2tkZ1J0%2Bq%2BbPiQ5v2Ug67du79z57BwOk%2FS7yZhqs0ZJ%2BqUcp7l4BNUaOxFAaNLaSjQMEr44Lat%2BZMAOw8kwCsaq4alJ3Wf9nLiOpQSJWHwmz1htrfMx46SqIJg%2FfAUnPrqbs5%2Fmllp2p825uIZS4CJl%2FXww3n0gymSXSBTutxVZQ89vfDtnwa1e8FV4xlR2Vc2S4bYjk27nI; x-amcs-refresh=U2FsdGVkX18hTQYxoxnvOuXvCF6MDLgIhTBvUbheiq9j6rE%2FQzwNKJEnuHINgMMIu1IE4QJU4IY%2F2Y5GmAdULzN8tEq9Pp%2BtRERc4TgDbRfNgirsnamjQ%2BeLf58OB%2B57t8dqdlBfp4YKRnL%2BOkBpW1Pw7bzV%2BX8qYFyj1NXU7bum0Vzk06KVNe%2FghAt%2BL8Jej%2FAUkbJKWD59I47ZL6IoXhy8lS0FWoT8%2FVdnEf34FI4VoXWaz7V3UK3HHp27llIP';
    var teacher = 'x-amcs-auth=U2FsdGVkX183Z%2Bxaw34t3JYiglZKEQiyo8qbXNW5duWntI%2FkZa35WQ5EV7QmxD1nOxFP%2BO0N0xpFxbySktJQOLW3eybN3FR%2BWE8QlZLeBnl7%2BAc00bFCCVsA3XjSSTOhmeEk8SPq87BjeqFWspAr5bQPwGYMWaJ%2F1%2BOu1TMo0EPgM85t4%2FsZOOIaU6Pi886YlMiQVvI6ADOmIu3i1AW6n9Tosg7IjJMl5FcIv3q4sLp%2B0lIC4%2FyQsvzMHjoY%2FT8NGjUWu1BNsdzkotRM3eStd11LQMn%2Bpylww3vlDGSW7zMAyX5AycBF76Cc9GLJoYvjpxSSI8A7Y9ofd3jIWOVfxxiN%2B0SqRHJst%2Bz53vNPh%2Bl6jfcBs0kKqkAp8btuo%2Fh6XtsadNqpu006bBx6eU61ZJ18oOUjFTObW3IH94wKpmNIzKT%2BUvhw86LadqkLJDCzKJKkHrbB%2BCKSoOL0VOQWQw3%2FlcxZHwXwEjHQWb0%2BU2sIDB09p5DkVXIehQ13yY9mKBZOfhPUIQQfnqCk4MMGs6Vjylh3BRfbu%2BZysAxd6ZGsVLLgSuLOcD9AlFgl0PQLVxuiHlMU0ZaVYrbTETofTyoe%2F1WGV2RmiTLVBnpmyGZzkmGDSRFG2yBtoYW7yXn0XUIuAZcriYSgP0DbLcml1%2BnWkDFxS%2F1vDgotoFuMCcpxsyztLGt5KhdJn%2BX7wQIzGJW3Q%2BkFkX6WAprWM9HazBL5qfn49Eg9QlwQrwLXkjzQYovQlvZVXjwneGru2vrhPklJI06aKjzYPmK21B%2FoA%2FIss047HWaYjWCPrZqPgcvLnffQbVd2TuxOgt8KfGlzx3cc2h3GsnkkAX0t%2FyKzOvXVq7Q8diV1qKWWdZ6PdcRQ97uoWcI%2FgthljSOyNhV2XqaOOs8%2B%2FOIRNEacwcLKrNOLXHKz9ETcpyJsmIzH7pVZUd9FVAth87XSIRXydJaj; x-amcs-refresh=U2FsdGVkX18YjDiyotAMECsQqaZnsRZHiGV8Bf%2Fh1CvVTMzxl3UgOftpMqPKzoxen1HWtoYazzlP7BLI0Rtca14VlsbRfylQ9QKOMY9iDUe8nlBLvYG9i%2FsguYLU%2BQWKHBIlX6fFlPIkDBDpTu8vohQ7NT8xGzATYbYMxUAQ%2BjdbO0blcbmuX6qR%2FjSQ8XbkzBtrterHm4uHb3bvUrNQkxS6RFfOhJGBb2%2B50fDNKk%2BCAZHMxwWdQXYeYyI4T3EY';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2Fh7NPcQYbCWt9z3xDgzom%2BB0lHdU9KJj26lIMHc1xbV6Arz8S2%2F64KJYsIhHllR3YWCzblpQZ4%2BJjaZjSDTjt4HDTXM1n3uKRjT4EpCSGEm6gCA3jcDtftmCRzjWqOxO5BVyj%2BAjCds8Bji2VIsjbWAwz1%2BtQ1BYr9oStq4tD00RrOMTRlg%2BC4GhcEEI5mcFQEkiAdoxNRGjDpX37a8XjHD0%2BvS5Q9QxhSRK5XTH7NtvHnS9nETPPQKPYFwn0Ex5yJLKLKPHT1WsxMte7etZMRk962qw0XqkBVTiNElPs44I%2FqUKmoCriQJHHyXFvICQlJ7LzfLy6TEceHqdGFo0p7WJl7ra8qyX4US0P%2FmyNYPh1qbT3j77TeQr62ktpCH1rlnJhqUKNQ0sm5YId8q4ntfP5yCy5jtnWKWO%2FXoIecIXZynA350mMHHdUaOW0dJmi74GYKf%2FLKf6xRyYuC6A7aaY5ZW1GOFx8%2BytblF43HdvDSY2Y81Jn58aB5dovAU7iPi8Ssc10k30gO%2BrW9Qqhw82mRjyI7z2lG%2BvygHpXjnRNh0d5xVbKOpgnYAdPB%2BuSq1MZwFjui5vjwUKxEFGaWQ%2BMzIrczRkryMptinIRD9yhV%2FqJKDBFVIWsZBoWLGE4dOjS%2BsKER3Q%3D%3D; x-amcs-refresh=U2FsdGVkX19KRDS12drNcXbY5poWNheL6AWkKUfyRWjts9gAbbOs2D9M5MRuOvjM8uSZzZUyVM6IyUUbP8n5kTBUVIWctBjsZ%2BaDRU%2Bb3k67bD%2FhA1cOt2fo83NcK3%2FO6x9v9Z0uRSje3qUCROGL9XwshzG4K7oNi%2FmdDBRYCi4eYYvL6sNfJblkTks%2FMieFe5zCnzO4sySDqMZTXzZRwoZAyU0ned3wyjC9sWt%2Fj1vr4af5aPLPkYIPYWo9OUTp';

    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': student
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
                }
                next();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


