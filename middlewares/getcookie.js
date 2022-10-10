exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var pr = 'x-amcs-auth=U2FsdGVkX19W9NQVYCgI9Q4vyeShokGthohREcNbvr8s8dPHmODgQYjLbiIF%2BRPfdbwBMqO9qH7aHnfb7IkgeiiF4gvhnIAOZU%2BmcVmitmBZo2b0qqUOsQoE3sDyyPZCP%2FO2%2FgH3xbRj3laF2ykDeciQVTbJJ9i0G9wsRuh4en3Oe3T89Qq2ZaJ%2FeQqmUbG4Zfk9ZFISUKwJT%2Fudn6KNhIYwfIfz06aJ3xAV96aL3FBI7uJHx8S7TRUMryTw2q0MtAQRHWuYCjAEB%2FG6j6ZXZptWmx8iOvg86FZkp1au%2BmSjnVQCJXGALVyi8sHR8rWHg4bGfrppFqBRO0%2Fs5O24IBPmUY139UJUMSFCT2y2qCJCaCVsyLGhUnqwVYhHtmziZ3pvEtoPCOC3KStg96V0D2HPeFATwqDDFlOmczIiVJw5vwtH0DfTRf6S5vZpMjEqlc1k5WI%2Bsfex5LQNcp2NEuOb6e8s9SsIVup3JSKxcw4nPnpyxIhb9iYIPDBr7l7%2BVuwFZUVxmbgWXJTdlVkhV8YmTvImw6s5wf86%2FT9hC7UeCzFyDJ8ChqX39Kwss4TOciL4ZqoUB83bv%2BvF1tqKKfvrt9Ud90zLWAsLoltQWioXOOi4BoHiGl06VK4smnTZODsbxWIoiYoOSDm0zW04c%2FGKEquQKeT%2BHIxqa%2Bita9NCyh5dOBnEgf34p%2FHsv7lal9XCWPOPcw%2FcD36MLAy2euOIjq4bhCRbmpbQvw7crVOEt2D6NCTDVWjVkJLeURyYQDMoJpK5JYEm5wPngQVQQwO5%2Fx3HHQe9VYKDQ7pRVDcJZ37spD4o%2BxHwuT7YsWNrI%2FXa%2FaZGKlNyAK%2FG3KXwccHufP6w6xNAaK3j7L31V%2F5%2FupYRABKsIiips7UdwJu3Tb17c4TWY9EkuDOcMWI%2F%2BQ%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FUhWPlH0xt1s5uKGNrQzaqqZkaVVasyCDk0QWEKPViL7GkLyIv4PtuyMraSdl8OtiyVR%2FAJJh2Ah9R3j0gxWMGyd98IsoopYHMVeciMiuXBa9f%2BvcbOhM%2BRV5w9meyEyCgHAQ36o9qyxco77MUKU4karocXg0gDp93SUFdR87TCm6GIBtKHWweqenjHhWdyATHop1hPIM7fRt7fiGkYWBW2eAFvjaYZyoymulenQ1aPom%2FMJILkqKj';
    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var teacher = 'x-amcs-auth=U2FsdGVkX18IR26kDhE%2BVEothXJYx3ZWXSSZ4KCFxe0xgF7HJHcR7DuwFvPtrQoPWvRYxoCkk2LimqGDMDS3DV%2BVKmcvxBg%2FziKbu0%2BpcE4Mv4cCcYkSDjKSV3O%2Fyc5%2Fqi9E%2BrABNt7msx3LWMMIe2BtuT%2Fh7hlh6fjOYARrT11Nx31nEvDjgBK6NdKn%2BVr8aa05guIJ2wDjnbFtmS3ZCJPIc8ti9b5%2BBzN5kkXjNaCVZBGNveeLy1kCCuv8gtdbeirpUQqgCW3JAATvODFQkoPUo6HIKUdsSlBBy%2Fs4%2BBqNGOri4%2BUMmHzWf5PpAjF8dO6nhiao13k5tcw9Ab2%2FRbjRa7uZ%2B2TZjGzPuDZmcTYgBdZg0QjYYahgZFqCIlliXD0Pquof4hwUSu8QgQR17O7dVR6qo6EmbT%2BFoR4EXr4SF9bhUoW2Emw7IBRPUbWvAZXhpsdap%2BjvvGI9bJo%2B%2FPT2n%2BwWK7RRgyf0HxWYL%2B%2BQkYrKzMs2SU01N%2B3V4tnLb0sL3GDaoolobA3Sxq3Bt53cceHIRneGJP0bv9jNGX0QdbsmUJpbHeAhWN%2FuYbm3dpS2LYU3ZFjBYUpm06xRUIVGqpgMwbFT8eJogf0pHJjOxLjxd%2BI8loXYgs5cKO8vGmdlRZWT8BDzPPxEGazGGgaGhfK20NSVIfqRsgN9pLAw30MNnjRSkH8meb9MRtJfM5QiwA92qaQe2%2F8Tcree5e%2B30cgjEvQKKIKOPZ4FIPWqAhMwRPx3PEVbATNbV8ZxrlcgPKzDmqIj72AnAVA9NP0joH2L9s2jGBwZGEvAy%2BHv3np3%2BvlY%2BvTFpVm8Jk4%2BjYvZbL8BTUFKgHrsMIpHuSXLJ2tJG41LP4GSXgCoYcZdK1FKNtkxoKnYPybPB9VcElbSfU6l2NUYzbeB%2BnFkeEmlm1f%2F6y2uLs4yksejR66hYS5N2Ak1p0SPmzCBu31O; x-amcs-refresh=U2FsdGVkX18MR7iYBh6744rgvazI20jIUR1qSN500lDGXkKZoyIlHOe%2FiqQu68DJzV8ECqJ3p9xoGD0zmxTslIxgQ%2B16cYK2xd%2FS0TEmEAZu01eKiy9x8DbPZawrmpCByb60ZlSeqXcwWaDBUrPBmVW6DJMTzyKsPE9t5YvBeUOG4nXedWUIgiHyXnsd0oR%2BAUgwizg12tWTEn1ekbii88VyKfbwsaz6DOUrhrH0edPBJ9owFaeh0887GDHMjR6%2B';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2BwhVRwZYY3Gkmm%2BH2XUF26c1EVm16YeM2byheH63YIZxRAr1wtrxcfI5oBfkzyrP3NVWMN6qZ1C0bJ3kSm1ic7qW5L4psWzUEsR1ukp51DTfVuVO3a0ywYvXBThEVlu6wnNidGh%2F69BBLPUuvxJmSjPk7QPDzxoCciUG1KpN9aN398q%2FPzUn1r7YuWbcjlg0pvctxEu12NFC4pU3wr345MD9zRXck1xxKftv3vnvtccNEhtUGy%2B0ZQjp%2B5qUK7ttxmO1IeAO0J%2F1jGZ5IRQNNKKhc%2F7AuDE78iWpVlGQrL4DXVMJwgHGCLR9J8ScltCp8myD5S%2FlUlhPONPGMabZY%2Fk6Gtmdk7BFXrO7FeBnHLuuaee5KWtERSpswaRlyx5Qw3bYdm3Z7PH%2BTe6V1S%2FiTkiSTGEorXcgS3CP%2F2LNGiaN5n5bec4gXXWUv7mKX8SokLJT9NO%2F5nBO3RCxnn%2FZy%2BhghM4au5hHxo6fthyWkb2kU5une0UBrxBPIi6zq9c1GsN4Om0uloWdWPmmZsnZEz2cO7X1RCtbhdplcUuVXXoT5Pmwr6CBMnt3SAxO1CstPbYSPHZql1g08vb9COZ51iDKh5qDZG6s%2Bx8OvXScxiWQDbowO1gBYVLNGNbfE3vdWZwi6oLrb8bg%3D%3D; x-amcs-refresh=U2FsdGVkX1%2F3k41eKrpClBxrjWXYFri6%2BpqXtPrSTuQegpJdaK3yam%2FnkkPTWue59nwOLSBlFPQntpOoIW9H98CjUkLwz50OjJUpbUFGYacBQVZPRfacIe5fiEZS8%2FmFMPKyAcqKgzFlQQwy0P4LC%2FT6MSK3tTN9domyDPVDPUEAtGWsiBoVnev5lp4216i%2BYqi1b2yDnb5biL6K0VwzHk%2FhE%2FsXEOyH6JprHlhOBzHjs0gY4yvJ%2FMxx28ICs3lP';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX1%2BnU08SLfbo5NShbeUJN6LM9NnTJBr5W%2F2v8A%2B1%2Fa0GnlDyGvweprQBTfyURB%2F0thsObNyuZpo50l9yxaPLIEfiXv%2FuNv7yYkMX4sA41O1zo1VOUsZbffnsT7mmR13pb%2BH8aWkf%2Ff9vHOCz9HTuQ6XhBKp93%2BHPibj58uekEmFC19ko2qaX97lPXHJ8ZPuoUnrRkl7NWHDZsMAv9X5xhcbTWjyWpUrZz4rnsFoQ9pb6J2Z9tkP6%2FomqAOe5KV2bJ1E8C%2FbayJ3dvs61d4tNooyWiSHPEsCOX%2BdeZ3FK7hsypMj7xBPBuLmKJyaYldb1AL1zdqNGkKnumSl6D4PLNDm5kEGIBGDrJKbJqXMaVo5tDZkarmVbv3OnBgxDZILxtBk%2FRxQbi5YmuB%2BTsXcIt6aHmC6ajO7BuyLJ%2Fi%2FtiwJhfugBAu1tDncWRNgU2cNj9%2FKtaYojrGSfUF%2FBw9KgQwvfGHR6vPhYboG8ixONMGuyQEE95Yteglc4X1Or4vLg8PhlYcVg71seCTEB7x70%2FLgakBpUOPbhyCdlwtGjHBuFwDxmuLiwN2C0J19cLo6YYEUKH8eBcZTfDYYxiy8uloRUX2G0tqln%2BnErMc6Gk48TJeNYf0AEqWxM; x-amcs-refresh=U2FsdGVkX1%2FHjy0TSLuqiWZl0C%2FGIH3aY9TaPuUijldI2UUPKNAysWtbNovRro1SKluy%2BBiaLTHFCGm5LaUfAwRYA2MmYDGK%2BHJZDigvNlXhsYtAQzoapgJE09vwTNCDn8zaC%2F16yWnuTAOPDu5Mhgi2mPC%2BMwaT7fFlunLZ%2FFVXcneZrFDv9auyIXuezZjqJaIGEOaa2IpyYf3r4Ky05YvMN9ALWsbnoVJTndmyQTYe3taWv4hbrNoNRRs9LjXX';


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


