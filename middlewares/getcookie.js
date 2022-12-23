exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var teacher= 'x-amcs-auth=U2FsdGVkX1893uMoxDRnjnhhldOPKV8JmrcyebiMVwyo%2BpDPfBsgSxF7T%2FGaI7iPNUse%2F5liXeKkHNqyC2YhKLUAgToRWhaI6KZqPsIJhDL2kKcnPVJl4V7VxR7lSeYog04F%2FjsgPtl1j5pw1gSDgXpLPZpVqcUelblztarMmFWssQs43FldDim04yLKmsHxLRtdM%2BkNpNZsaR6%2FqvMpJJ2W1dKg%2B8ikLJWjn7mIB1jMu%2BVsGnL32adbM0m0w3cG22%2FFgj2jLc%2FE1CbjMUa8oYROW2aPIwzqJxZGhWGt7LRT2eAVMhCo8Dt3vYyBXhUN3kCY7U8KClY1eoU8w4C37ddt7meFOTAfGVrMSG9dOdM7eQBSNTXaTRGLREwE5Tdwh3CPkLb2AHPg2zSjAM6GlzjfjgV69AEbeKkzd7WQimWd%2FliF5T%2F6a3eMQaWd0lKJ6EgTf6PYZrkPBEB1cE3UpcrAV84tfHz4CYVUsX9PPh70qr3ywdsdv4HqP0EdclZU%2FrS%2BgoO3Qbk4UYDIvYZK4VUWNvn3VdaJRI04Qub6CZC%2FXivcU1%2FQ8TrbEtX2zoRQTNyHDyHEY9BiyX6gsZWb%2Bxa3C%2FS536A4%2BzPN%2F9DZ34%2FcFTE8QLX7%2Bhh%2FJBhMxdSyTX6rd5cqqwQjzStX53ayyP1shZOgt%2Ff7kf6aXy3pr9Q2c%2BunWgPQ5xzMOsohHwEB84bV0FiKNpmPltpsVsPiqLBsnbRj2NuyoUR4Rex7p4W2d49mS5lu0yAbuA4%2Fd5zBbhQ7JM7Iuvwfv%2FUcn0nIMUuMiE3nRYX6p6jJwmzJIsKpqWsu6Rr5tRSOVJW2fQ8MdwyPSbj4gaoEKqiV1EMhvxMmLq3DmvvT98taWdpASC7xfmSyDIqdtcVdS4Abv9g4Uq5ZAdYuSE5qVzpN0s75IGfK6hCcYLLwf1r72946vZnm0xJSkkS%2B8hsa6MgI63ca; x-amcs-refresh=U2FsdGVkX1%2BmRvaK%2FcwHitg4pQUvxekcGA%2FCdmmjof6yiF2Aocpc71c26NlJsQJaTzvl7A5nJnlBFAJHp45YBhURghBUPx0y9C5Ml4FRZ6OTPkJ6Zh43Qs8zYk1QmWX758mjZfPUXFc%2BFD2FKrIRymV3IcqtRKtEpwZyUvN3ARxGqVHfw9gSJnE7ytp4QxN4LJEAoat%2FYYIcPbDMF9abTfSOY7rLLfuTBVUAmY%2F2g7ZtwAqEm6L05eJqRXI8hRZJ';
    var student = 'x-amcs-auth=U2FsdGVkX1%2BauFrIM7Z%2B5ZTsA3pPGaKoPePU8mm%2BhpjyGlY9nYDe7nk0PHjFvUFVoEF8p116%2BY62JMaFY2vupUHaj1Rra9RpClsNj57g22POkwqCLjHYCyQ9Bn8FlL0n93CRGioj739ZszFJEgDt5oNSnbvDf2A9xsgh5b%2FgQFiLW9kSpkuGzUoHfuYOPoD7D5aBBJy3wmK5nAvzawkNt30oWw9JKjW4WE%2FBT34RBy1VaY%2Fkw%2F1L99%2Bzt6PUfxJ6gsQFIpcZSUJlweaNqA9%2F%2F3Ic4w49EfHZO90WnQTgjcKHoqBENvMQ8LaTFjffg4wI89IpM4wqMCt1R46aZ3Wz9E%2FSCxcrZTm0wGmnT%2FMEvLjX7p2r9PnCGhibvPnaT9116KBis%2BMKZ%2F2%2FiRNEFEJ0LjXSi4v9frc9nCvKcisHq6swGqjfEObln7QYUnRd18lWWcsz6mRj5mUzadrLRjniU0nhLnLCdNm2DMPNar0FlAV86tHoK61I5q3KLcZjCnc3AIPP%2F6qEEQbaAMKl81gKznqf9PXbEi9ygOk0xo1VwtZDvc9R%2B59MMGHyAF5OA%2Fu311%2BXPN6VKQxg0pR5MVsnoRXNKL9C0omCcEpvGCcniuzJGU8OF5oItl1SayCdnwVuaYyc5DyZFKwlMW%2B06dmvelOBB4Ftt5VqSWBUs6X3GVrvVDQaOzGj8vv5aBTcvVPoae675jd4fFVSZnJTJ8N1PiYTXIQJqBdqiRyLHmyZHiLD2yya%2BZsb2cazlqGxgJFY9gWclgrhtgf7O4cAUcXcnB3X1Nn1HFHt%2FMjkWNxgOJNFm%2BX1SnG7LvxDob2HrqeHXqs0Mxv%2F2MephMRwJVe3xFVtEf94Tlmso9yWNLs0wn0M5%2Fe%2F5qzXcfwHaIOOI4dA8b0j8joLhSMPtyrEg5EZp53gfnvtYWU6byt%2F4cPUh2Q%3D; x-amcs-refresh=U2FsdGVkX19N8m%2Ba4%2FhYfO27uEZan0VHLAyAnHqYPhB9oPIkE9mgZwZLZ9yzmhmMzOOLUvtSS0Yo0Bt%2FAWfBstid%2B8KabgHS8%2BxOFYPdYvO3iQQ3BUDzCA0YvQLWIIL%2FpFamn0UmX9M2mPIqtvalSLWLsAprFhuxX1yEeMLk4E6i9aRHsKWX1akdAJ1pOCA73GUp3HBje0Uche%2BSKupHsVT2S1jwsEE5jLy60c2Kj5sRN2rbViDkkUJb5CJvS7Ku';
    var admin = 'x-amcs-auth=U2FsdGVkX1%2BdtfebA5K9zWJdgR%2FHKuUXiRPzGQQfjHKjZ8pxXrlD6rsPtgAilwQatjIIiqwjNKYnh7C7amPCDrhXyWZjmytODmYvW%2FEDaBx7Dwlzws4cHUq9s%2BWhxkpZtjQVbE0ZVdgLtddsQsReBvBUu541FcEQD5SuFPY7F5xBcoYJ%2BPVhwB%2Ban065hXFpytW3UcDgxWUdJXmoa%2BFFbqBswrYxNE4UFByp2MFFjqgbe1ablRU8EuURQFC9u4s9x1nffx0N%2FsnqLNV%2Fic0zmYszjZQPoulgtj1ke4g8ZS3%2BTgLpmMIt8DEaHwby5SZyNE%2F60c%2FycfHGqzGg50SnpC64sBkYcXtHqdNne84VRCUoysgtdpNjDNk1xYyPMXjc6OvBNO5%2FiLubbTHu4jXC4IDp7NFp66fz6G%2FNcKBiu%2F8DXRMEf%2FDoZGDYBnFet3PEZrxfhsdA4mSVMjfbwErRqGf14XMWH4JWFR3EWNqj7rK3DWBCTJlpBTrVV%2FMF0X2BuiDA%2Fc73XqZy99ZWS5z5whz5gopkGyIWC%2B2LfS%2F1cx3McUc74%2BTrWIxhWz2jCsnApljLyquI7QZkZKvJKOlRy1OTO9%2FMLXFg5%2FEWR9GFCCOYvz0fA2uGW2HOmADuHjuyvkYyuYVV5dbJ6PLx%2F%2FvMZA%2BQSF%2BtfmSgEi70KagH4BI%3D; x-amcs-refresh=U2FsdGVkX18RO3lalrzdqoqfq33wWGXUfX84BUXgSghS0WoKDn5XT2z60Szu32BLo5Bf4mvbSK4yhlprXgWHSWritS%2FOjxM%2BBLPki8Y9G12wisfcl4Zvcer7pI%2FcwdU0vKX64WGUq%2F%2Boi23SWRnHLHYQiYCwmU6JuxrZgSfBkTRnABmzMfpad%2BMq5h%2FiWwc6pXhpIIhlBP7REnDxiKpUAzYNAzpNZDV5hZwu3OnlEqvRrc44opHe23%2FM2w99v4m5';
    var labAssistant = 'x-amcs-auth=U2FsdGVkX18Yip1FB2ZC9n5AgszHFKQc7XOuf2xuhOGIlOO99hHxpxQ2gr%2BU6yWl3Iid0tRXijE71Ank63UlyVe1owPE%2FxWL%2FyFxya7Qv7905HbfgKTp84s%2B6lyPkKotRiwQug0pkzANBEs6PNZJ8i%2BhoRPmtgZA2Mm9mNid%2Fahe9DRBetvIUpmsj6gSu8NA5U7RLN073pfOBUMz%2FVqv87gWDqX3uNVbgTgqQv5NQ88T1cKnTqdy1uaD4%2FoUGdsSdwNRzXDK8CcXcJhGYl9Q4sbA1hsg9k6isIoe8qKW7tLUD0IPr0nl%2FmU3huPa9X1LvglYeJJihl9ZgGKj3QqjXPjxhIJ1gZiTnnjdRTfKsr7%2BnthAYQaMytLzVF9%2FM9CaH3Kk3w6kw6nFD8UbK%2BPraybspzJ%2FHtjvXn9zkQwXEizOxQ4NTjiVhv4wB%2F1AeuNy1Kei6f9RO8KMgjUp4nBu6WKY4tSzV%2FRbUqi26BmpqANHUh4wUCWMf%2BNCKfwI94%2BelDKjQBMi%2FCDNifUV6h8zZNgeV5SSthHMU%2BQV8KNZYlEf%2FY%2BRR898mNE4x7%2FykslnDpSWoitpXoMHFreRSqejp2ALXtZL42FSXctbZJyy9p4bd1KJiEUCEYUowx2ML1st; x-amcs-refresh=U2FsdGVkX1%2BU6GAZ%2Fs2beaPhWafNAITjkWEYALT3dLLh%2FXfSxInLUBvGfZ%2BJdImtiBCqaG1QbGIWxRw%2BZ95MnW%2BxiTVtWocpFNY2WwfekVCBBMQJGiQ40czhv0iXdnzwK8YoTprtd3x%2BB6nalcLMaDnaVZr%2BBwWN6Ua61mH27AUD5dNKKK%2B%2B615dq3mjb9AsmF7tny%2FVC2BYfhMQPiI5xlMuHj70im569ULP3HJNOLSBC4RRv5iU382r03HssJHo';


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


