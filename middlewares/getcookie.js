exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var admin = 'x-amcs-auth=U2FsdGVkX19aUqX7%2BNdILuSHcIWgZT5ehGBvZ8vbQuxaM33bUhx4yS3grGF3aKJOV%2BCfrFpV9yuLXCT2Hmn%2BYVjOEB9n9FI4vWIZDvOiGXJ4eskID6TR9uwaC9H%2F%2B1XzgmrjmNp5vwmF2uRG%2FAd8n1oIQ3VA6pKwbfYf3jlkle1kva7%2FzH4kiF%2BM7XOAWZ0J4gsnaxUB4K0hifsVjxB0RTdmuFjMJIGRgcNHT23sOhUT%2FO2AD8NwZrgm3ZrsW1BFlK4KlsL8Krd2PgAhGXZk0xqEGOvohHXRHFLtIQjk8A9KX1uOU3NrNImLvuqHEYMN2er%2BMUuB8pQhIvUkrCwoZ0ysfKRT3JR5XfAvI%2Bsogfz0pSd%2BpK5u6wVsSjUs9U09b0zynjRyx2ByBduV7ECPaMCw721JXFUUQIirav2NxWZ8qM0eAwXOAKIO0TzmupucNfweVrxzPfrLCruujrhZFd3wsbJi70XjVDLaCDP9bPMNY%2BqqXeVIPaJoPEuIp5clISXpE1YulfCnaCazlBZY5MKHxO%2BowCVCudc6mw8D53HY47f3lVyV64kWoiJD3d3qbhVGTNQtiQV8cdiGoQKNR%2FuoC67x2DrTWmPg9VcZjuHA6rahJ5iYPPni2ncxNbo2Bmtu0JBkYopTlBy3LxMxbIPJY8sgJBfP7Zodl2qUCNM%3D; x-amcs-refresh=U2FsdGVkX18SFjOZufMPa3Elt5VSiw%2FAhLT7wVtnt313OoYXf4d9msHDIea01X%2BkmDkp8XtKJZXkjUrZ%2B6V7RylObW%2B9kTNxe7BZtFBDl8fNX3to%2FOM5vETcXrDHH19YqGjjL3om4f9QPN2uFf7Pbfc%2B3aWBOV6EL85t5B4jzVy5RDXszHhyTS3Gw3G2jLsfrAwxmpTJN3ehrVuO0wOucbsc6xd9hZXCIeWIfPiUGOv%2FKShYG2BkLrXHL%2FOpjm8l'
    var staff = 'x-amcs-auth=U2FsdGVkX1%2BC9A3XUuYgnB%2B5N%2BfnrbkTzviGxPtdecZk0lCo6IDGMCMGmJ5kgbvRxeKHD3JhhDyaJiCGnNHW0OMVd5sLtLZVpmrNMbjXw0C7kv1pBVIdX5d8gbmImfeioN7a3cUdXERtdysH8pZ1%2FJc1QcHyUuckpP0XpbofncigRbt51MdFrTBdSZl7IBpv0MRZieR494qyHYV5pb8bCTEp1ci4qMNwhebrKRFEXzhDR2w8smTyqyr6C5I7NSD0eMHo9W%2FH77kEbO2qgpsP4gOCYZVK%2B7YOjWBsMzrk0Xrer1%2BhJYlq1Jc4HCJpiZGVTS9oneCM2Vbagc%2F2KxN2oSqidxG16AZVifRer2%2Bu3Y69sKyx%2B9nRw6EWGF3GSWo7gcEDab3NFPi96A%2FgxvyGW%2Fi05W7mH%2FjA03CdXccCf%2B61L8uwL9GI%2BT4zfIFNcf9Uc%2B8t69S3z9oTC%2BjbvkdneeVUyGrJ5HmlpSGjxFwWSoA1KeIk1rvZcUIxvpqWnpv87HgJtfwAotw8phGgonBMLHAmuLduXS5YjOOBSiOqbdISZ%2BD0pWEy4enpHkxZcXxylcgEdGmZ0PmzmTxUReoYOmKxwhd4oI7U9klMZQ%2B5POGeZMEF9tyrvCVj50ffVBWT2uVwgzft69pr8EP9TnxsTdYJsdBbto%2BWieqmrkpZ87ebBGfVkud2a0gv4r%2F9A3ieXyJrkLP46PgjPaqtsN5uQT%2FtJTb%2FZ2GLc5TDDo23ZhghYktW5OKEJD6Tzu2gpqRepTRJGUtzLFLoGvafdvBTxN7N8Lz90sitHehpiJFtc7ISnm%2FkDcytgp22yIR5VdcMr%2F%2Fg4YBIR9WN1SL8gQex1PuK6RCX%2B8UmpNN7lia7%2FvypDFQymg6HMd5Y4wyRcf%2BGcjISCJPMw8StprNmYVGOgQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FYT3B54JnYtnq2IYGmqUr%2BMbgJ4UXUiQxdI9yWCrZ%2FswW7RjkDFudLo0ac0YIbLrlNmHkEHidAcKaZsl2rv9xRQF4fD8L0WJ6ZczcHmi1vUmQMwrbqcdohTAB0VLn428xtNtkl9hmZKOqr41RrLW4mDAFUK%2Fh9ZoHADMXuAKN2%2FApV6eT4B9uLVKVAvdPSjW6OqaGdyLPgQqBGKHArgD%2Bvna6UkcGd%2F%2BUwQBTWn0%2F1Y%2B85bHzbLDBo'
    var la = 'x-amcs-auth=U2FsdGVkX1%2FYEBBvKlonLfeX%2F7g7FwmPmYmM%2F%2BX83IdhHPllAPr%2B8hOAJNftXSFL%2Bbr5pMoY07KHaamdcyyRNoP2G1LcKcOZJg40NWQcvifGOTyCbh97%2B33brk8Mkj61hWhwVUsDb8zK4cz587I%2BujAnO7lm57uLX0l3bcAcR227IAmdGdiWsKJKMaP7n4FjXVKOJfG35NgL2%2BdMO0vORxicDgC7U2udHDUBzu0DvTh9nzGeZjRD%2F5XbJfmrdOQAy0mp4JnL8LtQoXCD%2FT1x5RDXXANUXwsBrvJmd7R8gVPp8I8IivGSHxe9c%2B73gtu97%2FtP7H0BiqmiqAcOxO%2BQuj4ELOM7l5nI6umdShu2S%2BQErhwr91UVN%2FzDwj3266JxmOPB2Rdnr9ODwDfKfzuAbbcYZwQybxtZedb3uyXkuypHnBf6Z2ln73%2Fy69Mo15zBhhaJQQxNcswUvNpantuTUiV6K%2Fs%2FC9H0GYJPDLwAm2QUaS2trm97%2BE5tM%2Bs%2F1TvE6JTYSKZhCNKthxterhXFWlOtbGMMRfAnG3CSFtaOJjpu35eiXkhCYSWANObACWwHFswejz0hfkyUkRE5%2BLb%2BGmG3cIN1KQXaTKI%2BX5AJJz8fJXsAwwGnsHR4ADWdIfE0; x-amcs-refresh=U2FsdGVkX18X4yc4Xvy0jsU5tUZnMi%2FRLqZZmMGQlUiGRO%2B31lkoyoMOKFHc1%2F%2FOB4Q2ktxlXvrFnGA%2FzSuQ%2Bf7Q9H1r3jHrD%2Fsy8faF7MSZMHg8elyvaC3RJxHv3P89HUfBWvHpZvEtGi348jWri5A6WEhxPgQPiIa7Ebc%2FzZY3PtLPqFFaXwTZTowDhcN4e7finNJv6pLMjVJY05oy3iKXW%2FA9yEsmXHdDD4abCsHp08JNhpNtBBNTfZUtMgDX'
    
    var config = {
        method: 'get',
        url: 'https://nucleus.amcspsgtech.in/server',
        headers: {
            'path': '/profile',
            'cookie': la
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
                    res.locals.role = "admin";
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


