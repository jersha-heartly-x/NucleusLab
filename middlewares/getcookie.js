exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var pr = 'x-amcs-auth=U2FsdGVkX18FweyunMguUAgZumxDUoL0qZyq7yth4ncPMFfx55b4Vj%2FYvt0bK6wbbGdGh5U%2FrE39iqQ9VBqktuQWfy0g27o94O7LNt%2Bncwzej9b0PXFtyiA%2BWpehjQsGfh%2F2Rri8sbX%2BAw0kMylyCqrhbjPXfJOcBE8GoLObLhVvz18aKSfMVMnLH08TrYMl2ZmhQteljD82ctoaF9KQb9Yp4SXPBBGpYGCzklY5cl8X%2F4ccLDpcn8B51WNWxjYdLCVqyWiNAxc2TLvvLo%2BJCqCvfflyF6H%2FL2aiyB0ce%2B10fSs6nhabDjq9FJK1VGgeyC%2BAjBtCJ%2BmUmY78GtNtOdxKDTCxPX0qboZ4szHq%2F6ZM4ukShpxepmH8xbPNrkPg9N47yZVf9QLQV9NAOcohXoP6764m6IMF359HUqGzh3jZ1b69GTobuJOyITKh2p%2FNwetQKTUVsc1kV2BYeExKFslTBJHX2EORkwj6J%2FLs89RP9DWYZikiroLleIDtNvUh53TaFUxNpal9vdq9CicsP205QPPnT47ESuSEuYStnjBDJAfI5gKX%2FfWVZ88e41ogEh%2FMjqBnYNumaOy5%2B3D8Zwj9NmvQZHdAnqKXAQ2BhhUNDrZ2BIWoYyfaXymmPJfow%2Fi64UPm60lYc5rcDOyXCkVa5n%2FdkLpW3pFlv2ORyo1l%2FJa%2BfgeHX8fSS9kWho1uay3g%2FplLlnXmpztq8ujP9XHb6%2BBVP2RjjaNL3GDA5iDX5Aw7OXQN6O2Hdwo6PYH2VtyPmUPsJQ1LbUrXg8te%2B0R8WtiCYSeS2oBzu1K%2BvgEeAJsDxJJohH1dct0wAzfjqOKZmPrK%2FRj0wbFu1GwGZ%2FbNuN4jUed8AxXlt3USWaWZZofhEOdK4B%2FtjJzLc3YcWufHQtSnQR18mVVV5gsMFQ%3D%3D; x-amcs-refresh=U2FsdGVkX19%2FhsU7HPwsX%2BXtkk4WynfA6vwu3wfSwvdK4XCAeEWavZrT8BrCtMWptLn7UGLtctHvb0Ud0MmGpt7bx2Uod484p73HQb3XBopC1bfFjhuGas%2FDV1hVHj4bcd1cFUq2A0D8NX8GaggxZucvUbCa8muYJdCH8QNNjK6RnJDyLV7rzVWFVshBG59SW%2FuNnbPledO%2FsgvjSz11WV7JBSoG2aVaTWQeM70UqvJtPjqpwUEOk4glyRGbWdbJ'
    var student = 'x-amcs-auth=U2FsdGVkX18o7cBlcE72k8dHo1ttYLSqnvSwWz4zOJS2DDwaeu%2B4Ch401jvRHAcH%2FCfiwHDRBqhUrPtWawlsjVXJUDsSpzobdviLsi8XPeh5fmfkwGzVySyfLUfXLSTa39Nqi5HufLNm8cEK0xKGi1jQU2XNlj75uqZ97TBotEZV6f7ZgbiGp%2FqMb6LdMUFpu8NZW4ngPteY1X3HHb41nnu6MGlLyw3a83G9aHCIjjvsYl7vPPWHwwgciksLiHiKZdJLUmc0%2B7ueckNA6X32%2BAknnTC%2FNQP0P7I1uhIo%2FSJi7UKuFrXynUeM%2F8beC8Jc1qNclUrBWIMzuqEBaFP7YHYcpfJHtIqQ80c0MVpMf32HfJAWvUXbSMSmrUNgOKY%2Fzf2xmvcXa1qxydb7KnWGm6xB1Zuh12gWkqHt8iWlGYE5v9UIFo8giSRgNZgn2YCSZ%2FHYDDy0serDXzgbewXx3ZDa8RcFOz4kiX0WIh12oo7jkPXTevL1H72O755mZgw46gaqCLGJllghU2ZgxcMqC1yZsY0y%2FdH4lbCB2Scoo9Rkvj64bUbhIoGm%2FRuFyGgYQZ2Ek%2BAJQ6kDbirD%2BRfVnqYhcKz0hEqa1ZR1rQbkQClkl5TLoLGaYkH9kX90ErJiIjJvCJSizUeTPaUTXUFQXYRnNs6ynmR%2BIS9YZNYCNCODrc6FjWmkxV3NdupFTCvc0OFr7ihER4xJu6A1SkmELji7qmlhhfTB%2B79%2F4%2B49E34bivfae4Tw4njJ7VVpR%2BwOWvYQDxygmRPnMLuvhOc%2BkJgADR9KYtYn%2BB8KndzMsqOCTOjMJkFHISGIFkPfTrDzGz4a1Zw2lzr43tM97%2FhiayfP1EkNYEAVRwjqASmzAq04HdBCYkq83zlTI1remDBkBSXm6eP0HHImGirmWGj7Zp%2BexPAtU%2B69SbN7OvXbjjc%3D; x-amcs-refresh=U2FsdGVkX1%2BljLCSLG2PBT%2FEraPFv7Sb02fHqz1m8SECX3jpgBU1URNbXxoOUi3B98g6UzrrTZAD%2B%2BDlDRMwINxdTlHygxKcmlpc9HXkygvFEHLnWPXB%2B7cfNzFbGKe7SFyw3KMIBRUdxF4vsCoSLWgpYOHwBKcOBhn1KIwh3e%2F%2B8vqW6vwEuZUxYfX9bkmnIn2ZMorJOECQFKLJwscHcB0%2BPp4uiNih4U9Hvt9WMBOkFdCMrGC8oy9I%2BTxP6Boy';
    var teacher = 'x-amcs-auth=U2FsdGVkX18IR26kDhE%2BVEothXJYx3ZWXSSZ4KCFxe0xgF7HJHcR7DuwFvPtrQoPWvRYxoCkk2LimqGDMDS3DV%2BVKmcvxBg%2FziKbu0%2BpcE4Mv4cCcYkSDjKSV3O%2Fyc5%2Fqi9E%2BrABNt7msx3LWMMIe2BtuT%2Fh7hlh6fjOYARrT11Nx31nEvDjgBK6NdKn%2BVr8aa05guIJ2wDjnbFtmS3ZCJPIc8ti9b5%2BBzN5kkXjNaCVZBGNveeLy1kCCuv8gtdbeirpUQqgCW3JAATvODFQkoPUo6HIKUdsSlBBy%2Fs4%2BBqNGOri4%2BUMmHzWf5PpAjF8dO6nhiao13k5tcw9Ab2%2FRbjRa7uZ%2B2TZjGzPuDZmcTYgBdZg0QjYYahgZFqCIlliXD0Pquof4hwUSu8QgQR17O7dVR6qo6EmbT%2BFoR4EXr4SF9bhUoW2Emw7IBRPUbWvAZXhpsdap%2BjvvGI9bJo%2B%2FPT2n%2BwWK7RRgyf0HxWYL%2B%2BQkYrKzMs2SU01N%2B3V4tnLb0sL3GDaoolobA3Sxq3Bt53cceHIRneGJP0bv9jNGX0QdbsmUJpbHeAhWN%2FuYbm3dpS2LYU3ZFjBYUpm06xRUIVGqpgMwbFT8eJogf0pHJjOxLjxd%2BI8loXYgs5cKO8vGmdlRZWT8BDzPPxEGazGGgaGhfK20NSVIfqRsgN9pLAw30MNnjRSkH8meb9MRtJfM5QiwA92qaQe2%2F8Tcree5e%2B30cgjEvQKKIKOPZ4FIPWqAhMwRPx3PEVbATNbV8ZxrlcgPKzDmqIj72AnAVA9NP0joH2L9s2jGBwZGEvAy%2BHv3np3%2BvlY%2BvTFpVm8Jk4%2BjYvZbL8BTUFKgHrsMIpHuSXLJ2tJG41LP4GSXgCoYcZdK1FKNtkxoKnYPybPB9VcElbSfU6l2NUYzbeB%2BnFkeEmlm1f%2F6y2uLs4yksejR66hYS5N2Ak1p0SPmzCBu31O; x-amcs-refresh=U2FsdGVkX18MR7iYBh6744rgvazI20jIUR1qSN500lDGXkKZoyIlHOe%2FiqQu68DJzV8ECqJ3p9xoGD0zmxTslIxgQ%2B16cYK2xd%2FS0TEmEAZu01eKiy9x8DbPZawrmpCByb60ZlSeqXcwWaDBUrPBmVW6DJMTzyKsPE9t5YvBeUOG4nXedWUIgiHyXnsd0oR%2BAUgwizg12tWTEn1ekbii88VyKfbwsaz6DOUrhrH0edPBJ9owFaeh0887GDHMjR6%2B';
    var admin =  'x-amcs-auth=U2FsdGVkX1%2BwhVRwZYY3Gkmm%2BH2XUF26c1EVm16YeM2byheH63YIZxRAr1wtrxcfI5oBfkzyrP3NVWMN6qZ1C0bJ3kSm1ic7qW5L4psWzUEsR1ukp51DTfVuVO3a0ywYvXBThEVlu6wnNidGh%2F69BBLPUuvxJmSjPk7QPDzxoCciUG1KpN9aN398q%2FPzUn1r7YuWbcjlg0pvctxEu12NFC4pU3wr345MD9zRXck1xxKftv3vnvtccNEhtUGy%2B0ZQjp%2B5qUK7ttxmO1IeAO0J%2F1jGZ5IRQNNKKhc%2F7AuDE78iWpVlGQrL4DXVMJwgHGCLR9J8ScltCp8myD5S%2FlUlhPONPGMabZY%2Fk6Gtmdk7BFXrO7FeBnHLuuaee5KWtERSpswaRlyx5Qw3bYdm3Z7PH%2BTe6V1S%2FiTkiSTGEorXcgS3CP%2F2LNGiaN5n5bec4gXXWUv7mKX8SokLJT9NO%2F5nBO3RCxnn%2FZy%2BhghM4au5hHxo6fthyWkb2kU5une0UBrxBPIi6zq9c1GsN4Om0uloWdWPmmZsnZEz2cO7X1RCtbhdplcUuVXXoT5Pmwr6CBMnt3SAxO1CstPbYSPHZql1g08vb9COZ51iDKh5qDZG6s%2Bx8OvXScxiWQDbowO1gBYVLNGNbfE3vdWZwi6oLrb8bg%3D%3D; x-amcs-refresh=U2FsdGVkX1%2F3k41eKrpClBxrjWXYFri6%2BpqXtPrSTuQegpJdaK3yam%2FnkkPTWue59nwOLSBlFPQntpOoIW9H98CjUkLwz50OjJUpbUFGYacBQVZPRfacIe5fiEZS8%2FmFMPKyAcqKgzFlQQwy0P4LC%2FT6MSK3tTN9domyDPVDPUEAtGWsiBoVnev5lp4216i%2BYqi1b2yDnb5biL6K0VwzHk%2FhE%2FsXEOyH6JprHlhOBzHjs0gY4yvJ%2FMxx28ICs3lP';
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


