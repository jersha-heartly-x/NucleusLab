exports.getCookie = (req, res, next) => {
    var axios = require('axios');

<<<<<<< HEAD
    var admin = 'x-amcs-auth=U2FsdGVkX19aUqX7%2BNdILuSHcIWgZT5ehGBvZ8vbQuxaM33bUhx4yS3grGF3aKJOV%2BCfrFpV9yuLXCT2Hmn%2BYVjOEB9n9FI4vWIZDvOiGXJ4eskID6TR9uwaC9H%2F%2B1XzgmrjmNp5vwmF2uRG%2FAd8n1oIQ3VA6pKwbfYf3jlkle1kva7%2FzH4kiF%2BM7XOAWZ0J4gsnaxUB4K0hifsVjxB0RTdmuFjMJIGRgcNHT23sOhUT%2FO2AD8NwZrgm3ZrsW1BFlK4KlsL8Krd2PgAhGXZk0xqEGOvohHXRHFLtIQjk8A9KX1uOU3NrNImLvuqHEYMN2er%2BMUuB8pQhIvUkrCwoZ0ysfKRT3JR5XfAvI%2Bsogfz0pSd%2BpK5u6wVsSjUs9U09b0zynjRyx2ByBduV7ECPaMCw721JXFUUQIirav2NxWZ8qM0eAwXOAKIO0TzmupucNfweVrxzPfrLCruujrhZFd3wsbJi70XjVDLaCDP9bPMNY%2BqqXeVIPaJoPEuIp5clISXpE1YulfCnaCazlBZY5MKHxO%2BowCVCudc6mw8D53HY47f3lVyV64kWoiJD3d3qbhVGTNQtiQV8cdiGoQKNR%2FuoC67x2DrTWmPg9VcZjuHA6rahJ5iYPPni2ncxNbo2Bmtu0JBkYopTlBy3LxMxbIPJY8sgJBfP7Zodl2qUCNM%3D; x-amcs-refresh=U2FsdGVkX18SFjOZufMPa3Elt5VSiw%2FAhLT7wVtnt313OoYXf4d9msHDIea01X%2BkmDkp8XtKJZXkjUrZ%2B6V7RylObW%2B9kTNxe7BZtFBDl8fNX3to%2FOM5vETcXrDHH19YqGjjL3om4f9QPN2uFf7Pbfc%2B3aWBOV6EL85t5B4jzVy5RDXszHhyTS3Gw3G2jLsfrAwxmpTJN3ehrVuO0wOucbsc6xd9hZXCIeWIfPiUGOv%2FKShYG2BkLrXHL%2FOpjm8l'
    var staff = 'x-amcs-auth=U2FsdGVkX1%2BC9A3XUuYgnB%2B5N%2BfnrbkTzviGxPtdecZk0lCo6IDGMCMGmJ5kgbvRxeKHD3JhhDyaJiCGnNHW0OMVd5sLtLZVpmrNMbjXw0C7kv1pBVIdX5d8gbmImfeioN7a3cUdXERtdysH8pZ1%2FJc1QcHyUuckpP0XpbofncigRbt51MdFrTBdSZl7IBpv0MRZieR494qyHYV5pb8bCTEp1ci4qMNwhebrKRFEXzhDR2w8smTyqyr6C5I7NSD0eMHo9W%2FH77kEbO2qgpsP4gOCYZVK%2B7YOjWBsMzrk0Xrer1%2BhJYlq1Jc4HCJpiZGVTS9oneCM2Vbagc%2F2KxN2oSqidxG16AZVifRer2%2Bu3Y69sKyx%2B9nRw6EWGF3GSWo7gcEDab3NFPi96A%2FgxvyGW%2Fi05W7mH%2FjA03CdXccCf%2B61L8uwL9GI%2BT4zfIFNcf9Uc%2B8t69S3z9oTC%2BjbvkdneeVUyGrJ5HmlpSGjxFwWSoA1KeIk1rvZcUIxvpqWnpv87HgJtfwAotw8phGgonBMLHAmuLduXS5YjOOBSiOqbdISZ%2BD0pWEy4enpHkxZcXxylcgEdGmZ0PmzmTxUReoYOmKxwhd4oI7U9klMZQ%2B5POGeZMEF9tyrvCVj50ffVBWT2uVwgzft69pr8EP9TnxsTdYJsdBbto%2BWieqmrkpZ87ebBGfVkud2a0gv4r%2F9A3ieXyJrkLP46PgjPaqtsN5uQT%2FtJTb%2FZ2GLc5TDDo23ZhghYktW5OKEJD6Tzu2gpqRepTRJGUtzLFLoGvafdvBTxN7N8Lz90sitHehpiJFtc7ISnm%2FkDcytgp22yIR5VdcMr%2F%2Fg4YBIR9WN1SL8gQex1PuK6RCX%2B8UmpNN7lia7%2FvypDFQymg6HMd5Y4wyRcf%2BGcjISCJPMw8StprNmYVGOgQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FYT3B54JnYtnq2IYGmqUr%2BMbgJ4UXUiQxdI9yWCrZ%2FswW7RjkDFudLo0ac0YIbLrlNmHkEHidAcKaZsl2rv9xRQF4fD8L0WJ6ZczcHmi1vUmQMwrbqcdohTAB0VLn428xtNtkl9hmZKOqr41RrLW4mDAFUK%2Fh9ZoHADMXuAKN2%2FApV6eT4B9uLVKVAvdPSjW6OqaGdyLPgQqBGKHArgD%2Bvna6UkcGd%2F%2BUwQBTWn0%2F1Y%2B85bHzbLDBo'
    var la = 'x-amcs-auth=U2FsdGVkX1%2FYEBBvKlonLfeX%2F7g7FwmPmYmM%2F%2BX83IdhHPllAPr%2B8hOAJNftXSFL%2Bbr5pMoY07KHaamdcyyRNoP2G1LcKcOZJg40NWQcvifGOTyCbh97%2B33brk8Mkj61hWhwVUsDb8zK4cz587I%2BujAnO7lm57uLX0l3bcAcR227IAmdGdiWsKJKMaP7n4FjXVKOJfG35NgL2%2BdMO0vORxicDgC7U2udHDUBzu0DvTh9nzGeZjRD%2F5XbJfmrdOQAy0mp4JnL8LtQoXCD%2FT1x5RDXXANUXwsBrvJmd7R8gVPp8I8IivGSHxe9c%2B73gtu97%2FtP7H0BiqmiqAcOxO%2BQuj4ELOM7l5nI6umdShu2S%2BQErhwr91UVN%2FzDwj3266JxmOPB2Rdnr9ODwDfKfzuAbbcYZwQybxtZedb3uyXkuypHnBf6Z2ln73%2Fy69Mo15zBhhaJQQxNcswUvNpantuTUiV6K%2Fs%2FC9H0GYJPDLwAm2QUaS2trm97%2BE5tM%2Bs%2F1TvE6JTYSKZhCNKthxterhXFWlOtbGMMRfAnG3CSFtaOJjpu35eiXkhCYSWANObACWwHFswejz0hfkyUkRE5%2BLb%2BGmG3cIN1KQXaTKI%2BX5AJJz8fJXsAwwGnsHR4ADWdIfE0; x-amcs-refresh=U2FsdGVkX18X4yc4Xvy0jsU5tUZnMi%2FRLqZZmMGQlUiGRO%2B31lkoyoMOKFHc1%2F%2FOB4Q2ktxlXvrFnGA%2FzSuQ%2Bf7Q9H1r3jHrD%2Fsy8faF7MSZMHg8elyvaC3RJxHv3P89HUfBWvHpZvEtGi348jWri5A6WEhxPgQPiIa7Ebc%2FzZY3PtLPqFFaXwTZTowDhcN4e7finNJv6pLMjVJY05oy3iKXW%2FA9yEsmXHdDD4abCsHp08JNhpNtBBNTfZUtMgDX'
    
=======
    var teacher= 'x-amcs-auth=U2FsdGVkX1%2Fck8toKeeutClgjf%2BqJ79PdNywcqk%2F1tLGHhhSA5M85TRo0BVMjS54XhDjNgH6M%2FD90DTZmHztt7DcSoXK1H5HBGrZeuvqc7RWKs7r4pUArWRi8Xz1Yk0ZZSgBg0ehZLWPJHKICdn9K8J6jyHbHWk9IQM4QWwgwcqa3ln6w25LeE1%2Bh9tcUwraj%2B8SlaoI52uytnNLhhvnGfXXLG9MrlFCz3X9x49wHyqu5q%2FEGNyKlR1CG07Z1Sw1r1Wy1MT9%2BGLRj92Iz7JkyherQsnO6OQPB621YjRO9nHXGk8taws%2FLM4asCXNZTkyFm9%2Bc9KVxY2y77J9k%2BRK0ABawBAShD%2FkJlliXLLVVvO%2FJ%2B7Vcxa%2Fl%2Fb4H%2F5rGOCy%2BAUiJVMKqTKcAeGFggUbh8dZSjZc1UVCpWGAqrHk88cIMp%2FKbvAbOXqokKzH72583iG%2F93CEcR6iAUfXFx9gRuOr8h7OKCbKfOSEKitn492GhQJbIENbVIG14KSnoiflwM7qC%2Bm55tcUFfAsAuLej7o8z54iHFddNuCTzW%2FG0jgSA3Xktuc8CilkP1K7l%2BKU9oRQNWWbvFbH6yvCXlZ5x%2FcdMs143W0JKm%2F%2FdjcdV0tlXS%2B0RULIJY9rIdoONCE8cq1IbCEWFR0zTGiZYagELtiebD1EE9IxOdwWNXZjFx7UHEVG1r2y6nepmp6NfMl6tcsWohLeZF02qIriNAZw0nYdOzKeA%2F1%2B7h%2FTRDLaAgBnJU4UZLhVi1TYZPo6Sq9g8LZDJuuDEdeYNyG%2F3NmekYyIU98ciAgO1ebJZpz7tPKGm%2F8GomR6gscQefq4LqQPmNHo8fQ3bySZvn3av1NlmynoONKScN5ksiDeQnYzYlqAEW88ttKQCDqZvxkTsSzHCsjeBdm47XdMrtK2ekQc8U%2B6y46bELRF3BU4cDGO%2FmrO%2B74n9XUnZGZsSljf5L%2Fw; x-amcs-refresh=U2FsdGVkX1%2FXqhsKVsb8%2F%2Bu1j6HSHdePCC0v8yE1OfBa2mBBWfp7uJXqCiHrPaWnPjnGiufCrIgqzi2LJVXM890T1El94%2BXpGeONnWc6l6s2bzDf9Jzyr4HMlg909Kmu3LGyINcMm%2BFHPgZlGbyo%2BRsODD8M4F9tyfRn8jMJTcwvlKlBGa4L77l93kdQsIYWIZ%2FhZREvu5uSae%2BHIc3l240wdIuWH8VAufykSfTnS56fjSGltJ4uYABfK9oLqScJ';
    var student = 'x-amcs-auth=U2FsdGVkX1%2BHGFETQDsAgXCOuE3k%2FaPsri1t9NXplAsLHPGNVxW4s4DkZ7UkKlLwFzOUcg34yvAfqQ%2BOHZHGA77rA2oe6jbl9EEw537YENKZcnWQ0pSzB5P9GSebv5u1g5U3qt4UuruEwNfivGwAZoo63%2B5lKKD1ead7M%2FcLoR3hgScfeMcDsmEgS8U75hdbvejHJqYV%2FCvDcWqrPnXlvQt7P0yIVbVjTvxLGtdT7qQXNE1aPtI7M2qfehCyjFqcwSE5jlu6aiAz1zpdh%2FhlP5ZJqKg5s90dVkSxQ2QR5rrCPHw7pTfLxfhVhowCFGan6c%2BvoBQSpMxfA53mVpp7Im7zJHz2VR8CjL8WGYNzQn49UFp4sDwnO9SHkTp2CHyv6z8UlpQ%2FMfLYo8TFOVXYFp8Ja5u0SUKKX10hiIZSzwqRTjKjAyJVfV8fd0ih62xX6XcMU1IZ6K3wEiJZb1UJcVRgKT7tsxWbDXYuKvfdbfyP4saT9dole%2FYIRY6Mg8OD3gBaRh%2Fdj89GciE0r%2BuPfVD0uj1XI%2BbFZxOBVYYApNR1OQqE5%2FFWWHI9KYxcVpZSTtAU0ZVAMjvGSrSeEA5QMgi%2F%2BJ3Pw8mVvMtvufdmCMw8rETLipkd%2F%2FdF%2BNkG%2FPxfqAAYtzxv9%2B4rNBd3HqjEQ2CncI07urIE3mx3edlYLGzTx8bI6VfiM5BR0Nm2zay7XJPe%2F4yFOB1MT9%2FBxPLy%2FR1KnCk6%2FSuyyD%2FZr3vfEAfP1vAPJ%2Bt10WiOhQDx34x4PUEvw6fvm%2BFLVdaG%2FC7Hp03ir4B0sCabAiRD11WTE%2FmjQw6MBicRtEcBfhkDnvERbsM7N9ERHVExi0em6548r84QRDoKiCMHWKuVCuFYybYwx8ikVS1rCQ8vjeBy6IKb; x-amcs-refresh=U2FsdGVkX18iYMXI1hwaWsVHr3iMMr3SINuAtD0KWNCXi09Rm3XQkYSh%2Fc03ytkHp%2Fz55%2BQrI9xK3fMoMtKGRdA2fc96aN4ejtsySxA1CqB5dGF4ul8b%2B0rWx6gdz5UD%2BPOXqLzs9dqzi4SZckr5vXvZk4UYQ0Fym1GpryTMv6sgtF3pgWkoGuSejuZFfdH7VAAXNSxqDzaTV5%2FghJGfOaa3yVj3N85TyMBdeS%2Fu66K%2BWj2mQEYZZEC22AicDGHk';
    var admin =  'x-amcs-auth=U2FsdGVkX19P9Y3yjKosL6gdnK3l1X7EOAuwqEXzVdoR4zV2LqrnfPizP4XWxLCYCTq5LyJZVy5wV7yJkEBfdHC9Dk5fBH%2B2MsYo%2FoFC94j9yMsqCDMeCgBM0Ts4MTUUHpCTrT1iakL89ycIAJBi57M31yr0gaFms0VwCiYosWS7ojU3tvFUCYbXzgsp1V90A5M0of8Lq7W8vw3EZwJW5soAZHKfc8YZJIefqe3xtxqslPcyo%2FTwm0dohV6F6Tn6Y8S1ka5jei%2B%2BZjkdgQ9Tfg5TRMBpvBg%2F9MApc4z9Ca6PoXf%2BYEQ3KZ8KvWaz%2BeosipIuPgvYHObQmLt743OFdDZfPbq55cPSIfIbUQPPB4rnQAbZxwgwu5cIUiM00C8M6Ddn2g29pYN2G4SHVEpIjSZuDDUP61QmkrrNm%2BOancsd6f8AZgxd272fTJ0vrvUs7%2BCOiHV%2FsaNcHc0retJJEvm4oLJaurGr%2FOjPvYRp4FP5PZ8cRc4pzP24eDXRhVQajEshczYHm8wPxGtIiVMraI5w6jqFpZBHOBa7wzdLNBoqoQihXnLn35V2%2BagEuZy3Tl6LADWcQ8yFnougv5H3x%2FAFFGCekP7aBSKBJOzNz4WETC7coT2HuEeqQUlwo%2F4%2BPWEREkEPY%2FlYNX8PWk1lEwJsOWG8Wlm3R7k8iCBRgPU%3D; x-amcs-refresh=U2FsdGVkX18J8Y3qeATvzspF1BXuS1rtErR9ysfaxvSCJ1dXwiKHlU4F4cLck2akD4Mf8YNq6iTqXmv8HfnL%2BmRblL2yWHe4PXQX7RICmrPPjqp8kQn9xrbGZlgtvVUDgq9mgT0RzdANb3F7JtV8QKisBBTIlm8kk%2FMRW8bHm0FTCn6qjS84Hg%2BMXkZ6qobVqBorrLqkTCIr3uNNBHk9DKYgFYqwlesFw18Z4Yjtjx7S9zd3nVa%2BDWHzRZYOKMDW';
    var pr = 'x-amcs-auth=U2FsdGVkX1%2FLQz8S8JxX8m4mfKczeJyLAjbshHEwNUNbpigOeeFtDk98e89fNrZIkH8JMutEu6j9XH%2FzUs5HiIMKwI7AMJ7HDje9mOjAiYpaDMxFz5EfBRSfh1U%2FH3aZdbtGWPXBDYwqZ5h%2BELSgRAHQ%2BOPBkye6Q1Q2Smu4iJzPqiZ6LA2oX9zYVlapy%2FxzXu0QTmbOanDpRwbQ4oel4MMUxu5nWRzu6Zd3WLu1JfOqjtl3PGPm%2FoJCLlLdfdqSkAWHApVG89LEYU8BNg2JgUUJQKM1rddzKDwzMn%2FurJgN3gjhROYUkyaC0uHljAWVW88XMbIo68xlAzT3DeiDy4W%2Fhi7glzBq3hI8fgywuIEtfN9XOly70kgY7sEX%2Bny3TgeZ6Tag7VFCHouXhYqIMK6gG4vypcKfhuFVLiLDAk8Gdpi6%2B6O3dlhCwLRTfiQIeahmzCzqJzCcDz72KMnx%2BQ9NYJuERlZewBNg6avu6CDQCzHLDXgwTcOeFhgUdaakG1NK1LoTEMMn8mkXuPpT3CFsWby1DZuxzmoQwhcNgya2R2HVmOdQJcDXyjdErP3RmXaprS98lPkjLTc9u8q8R4GsBAFV45Sb57UNoJno1jS9VefhI7lozlmx1%2BxWO4M79BatWbi%2BDHvhl13dfCJMdcpFfrbAp9h0hIP%2FLNX13aJOL%2B72vpmTHiXYXOYsvNneidebfvDazUIqqMukPpnQXNojtu6v5cAGRaNonLhkXgpbGdDFpBMdtu%2B9vFcppKtbH%2FdFIXYphREg43zgXo5Q71Jdk%2BcHuT16VMrldu8rUI1oRKTnR2F8Clr1Rc4raqAxFjvZWGQOkc%2ByW8YqK1WiXYfDzsUjEm9%2FzA1L1W0p4gPjlhlIqJlWz0XyYhDAZY4f7PnQ6LeANKQUXfqnUmrnaw%3D%3D; x-amcs-refresh=U2FsdGVkX18BecnLNlGk%2FXrAEdHgfLcg3MT8BPWI195OleFnxHXZlfP%2BsKCEOFXyoZPwXf4DMryOHnupluLdlToh6gK6DFf1FAaxCnmscLLmXHLKkIisB2UrLu3au9cr%2Bd8XoDHICJn%2BZMeWNpfbkUWRPNecqrbqLk%2BdZjozdRCuKbuz7UVkzLT%2FSmIzK%2BnADRMA121EHT%2BrdWdA3m0vobLkrp6SBKpj21zlsrNy7QuMN7kw9eq7PM%2FXFM4yEBOc';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Yip1FB2ZC9n5AgszHFKQc7XOuf2xuhOGIlOO99hHxpxQ2gr%2BU6yWl3Iid0tRXijE71Ank63UlyVe1owPE%2FxWL%2FyFxya7Qv7905HbfgKTp84s%2B6lyPkKotRiwQug0pkzANBEs6PNZJ8i%2BhoRPmtgZA2Mm9mNid%2Fahe9DRBetvIUpmsj6gSu8NA5U7RLN073pfOBUMz%2FVqv87gWDqX3uNVbgTgqQv5NQ88T1cKnTqdy1uaD4%2FoUGdsSdwNRzXDK8CcXcJhGYl9Q4sbA1hsg9k6isIoe8qKW7tLUD0IPr0nl%2FmU3huPa9X1LvglYeJJihl9ZgGKj3QqjXPjxhIJ1gZiTnnjdRTfKsr7%2BnthAYQaMytLzVF9%2FM9CaH3Kk3w6kw6nFD8UbK%2BPraybspzJ%2FHtjvXn9zkQwXEizOxQ4NTjiVhv4wB%2F1AeuNy1Kei6f9RO8KMgjUp4nBu6WKY4tSzV%2FRbUqi26BmpqANHUh4wUCWMf%2BNCKfwI94%2BelDKjQBMi%2FCDNifUV6h8zZNgeV5SSthHMU%2BQV8KNZYlEf%2FY%2BRR898mNE4x7%2FykslnDpSWoitpXoMHFreRSqejp2ALXtZL42FSXctbZJyy9p4bd1KJiEUCEYUowx2ML1st; x-amcs-refresh=U2FsdGVkX1%2BU6GAZ%2Fs2beaPhWafNAITjkWEYALT3dLLh%2FXfSxInLUBvGfZ%2BJdImtiBCqaG1QbGIWxRw%2BZ95MnW%2BxiTVtWocpFNY2WwfekVCBBMQJGiQ40czhv0iXdnzwK8YoTprtd3x%2BB6nalcLMaDnaVZr%2BBwWN6Ua61mH27AUD5dNKKK%2B%2B615dq3mjb9AsmF7tny%2FVC2BYfhMQPiI5xlMuHj70im569ULP3HJNOLSBC4RRv5iU382r03HssJHo';


>>>>>>> cf69801722532e031ced6cf3bda3d23fa446f107
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


