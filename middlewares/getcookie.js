exports.getCookie = (req, res, next) => {
    var axios = require('axios');

    var student = 'x-amcs-auth=U2FsdGVkX192fpkr1hOsYXa1ml9wpwgI4muxobTH8MhL4kmrWVKKWwlA4piKxIuoidW9J4tTI6mhLiAnpT9d1EVliYBKNy645drjeP6cWCVp%2BAtrG6x55I0ByDLTgmUSIjg5xn5E7h0aN6OEFkKMjmd3vAJcbOASSgVwJ8R5hiaxp%2Bk%2BdI4X2yPQMCiT%2Foj7Utmu1FzJM197Z7IHcZ7K4NEJQLkkA5BQ3fyKzQYGGnNUErOr83J%2Bnq08GWLIyCbb9IVO9ByKJwachnH4ABwi7RLDc%2BTDPLqeSTmZh2Fz0%2FIHypMj4PwiitIosKjJXMjQNT%2BWsQUJ3fQmKAGlXzjN0FtFRJ6c1H1yaJ25z%2BmpKc3WR2gCEdzya6ugrJErGUESOvmt4Px7u4UO920s8qNYhpiV00o87b9FqDXlh7HB69n3Atc9zoeGnfkG9kx7WIveh1owis57Sd%2F%2FlpN4z3nlGMcis1ONQuX4EWWH1JqNv3y5E3ZJCwmRY%2BEgcztLDFoUcOj%2Bqw3p%2B1f9509K72dCbawdXt5aOFhEBZfX%2BQdHCMzoB7VIBJqcxebzHcIuR3I5aD7vslDbYlpf0zw%2Ff3YFV3aDU5NrPVWihm0KaS0dzaEIsKxbeRk0Z4pcNJpE0CpMPFDaGlaajbLxfCZjzbZhCDIcijnonQZfHvp7bgy4YlqqpHPdmatp3A3%2Ff76vYApPGJXZEOBcOpJT1If9h7gu0OwHMdy1dB9dgMJKIAMMFvRSww%2Bc2WyrO5CMjT6jI9ZKxAhAVHr4llid69PGbihqM4afbANqf5CoaHGQAl3ieP0XN9WUooqooisu5kQFdQgF1Mi99%2BBkouooNOerqcndE7yK0pdXjch8QCaot56UD2hu5F2II3rUKL53P%2F%2BW5qkXvUo98EkmJNWahMvSWpmBkmk95ylfzGVs2UypR2rxXzQ%3D; x-amcs-refresh=U2FsdGVkX1%2FMcs7z5FTa4cAeJzDKs34ICiTmN6u5b8E99pHzqGptfXHXP4sE%2BDH69G0Xbatv1P%2F3FvnXIwB%2BJ%2BN0BlIqrrGfeDQ6ZWG320DJ7i1HmHFtyOgbfWeqxKLOuaHMoFA6Gb8H5RCt%2BjBKMNLbFGm3hAvnNxlbv%2BrCI%2FgIkqn111MXnteIoyJU%2BUsHzEJvLQBfpgSK1PW4WBidI8lQRLjzSKVLVAQ1FUAo%2FaB2IP6HgljVKsBChWYKoVW5';
    var teacher = 'x-amcs-auth=U2FsdGVkX1%2FnMU642zdyc13f4u2lmgM%2BG3xkCEuHk9akVBJS4yA0wlr1Nc43XqTyBI74%2FuQP0D9TVmLJss%2FbNboWS9%2BlK3Sm%2B1nKcxD%2Fa1iWRuAt7DeuEzmp96PMIhG63EJc7WqGAloAYohxOaOT3SCU0dIuUNYohW18p0Byp50DoNVXFxo4BQck4dKmsMq6q35ceLxfb61B1yUpBWSTlVINbAfLuGE%2FBRXERjHb9ZxA3uV3n3HVphXdozqwgt9BnUZGmXax2Hj2hBaWl8YDx5VdbZgYDD5poRuP3qAK%2B%2FrB4daB%2FM3%2Bh8cR1Hfx4jnogCud3tyIFtY0nclY8Tzytqj1%2BUYvBtUU%2BI%2FNjqPkJ3kADQ44W9nb5pDKdb1cmK6lLzZmTwkTefOMWMXQD06%2BAIB3PGc6vwdjQ8lSGCCxokjqi7i5%2BZXXHBfyjICZHeWO0a86lExEOlcZMf8nt0SmkC0VnUU4w5BvTVxg3KMvhX%2BVvb6eSbFSHheqnJztxbxoDPXz1MfLGCdvJnPw6l7OIht%2BmsLYzIYJpIQWPzkqCUUZUKeBIuCP%2Fo6bGwsnpMiuWwr8mGwJH%2BluKHk9nWII0MJm4GeEu5KaV4p7ubVIg9VGioBl9QuCTeKOfTnXO7XzTZ5p7oWrgBDzzUWM0IxK5zLcKqQ1iYNtTN8fdUGE65i8ECSRjgPVoJJHAwn2un7hxCeZFwQJXRnPGd8A%2BeEXvNz10IZrZEVOTsBNtbp7RVd7ybkoIXQL3MIZsIFH8GFqD6UD%2BJTEDPqNx%2B1YUnRgKLxQOKdBGt0s%2FaPGayRIbGOGF8zcDyrtSZzqSl3%2FbGkN4lUsYw8WatFEvs2GYwYU03Rt9oC1ldQpqRpSdr2EsgQUhBQqcDdjeL0EaaFH8s7rergdUpjI2x7DzdlSbnUlwnohZtAM4Wz5D6rXJtZZg3VZh6%2BqDa75J3CtxCH9mu9C; x-amcs-refresh=U2FsdGVkX1%2BN%2BTGB9UlhFAcb7e9sbwEiWPiuNLxo2Wdsdja3%2B4gDPkDvEzEgPNpgjPV67EbIHQSkczSvTbmQ55n9J8%2BzoekTMucfy95i8eFGQjAgekzVf7LWtcwpUXwVWHlyLwEEfAETXm0R8v7XXDr09fc7RY9LkyKXypFGVXqewvSOL%2BFsORVk%2FxYo1CnJb9J82t2ApvGlizjDDAks6qF9u8cKPQ4adOFgEDiWMqrdk59A9sH1RxJq1JrfBQud';
    var admin = 'x-amcs-auth=U2FsdGVkX1%2F389N%2FCzhItTXzCXgoQM4s%2BqrOGgGxB8gW3%2B1wy945%2Bgm9EUsEFRIC0120LQV9gVSkVKxW%2BLVDAaDeoxo7h5qPRi7puWNN6rRML3OJzbbamgd%2BEnMq05rPExj4Vq78zezbc5tewyedqyPa4WKAEQ0yBqpw6qiOvWXhyXSGxvLCJk5GUjPeqkxsjSDSwg1aJaeWGoe3ZLZDKqW8hMrymSxHi44rRdlK7Uvdkrtxvyv2ZbtYTA%2FaCAF0mdRPa5E2mSDYiNIO8IeR8bkaP99NGJLJFrZ0LpyKj9utAwXtbThsKl7i9MawXKVNnDy1FAx5k%2F9ULXcKs3fNtN6VSY%2B3gtlc7fbmWTyPjF%2B9xs%2Bd5H05m4u7nAIPWtu2IQo%2FNuajuoUQxncmd0XUC6BEilFjko9vtNd%2FGZte9ObQj6TwxZ%2B%2Frq7a%2FmRHkNmZlQWb0j5IdhbpzgqjKFveZijKnxU5AGVQyHFMwzwm0eCu1IVlFC4UHpeFV9to6gxIiDVTEsgnHvTwv6Lek7V6CRNPk0KDvou6tofVhuNmax7lUWEjATEOSOVIsSXdOMQqaZoFOWvcShEN2lLQn2WkUEGloIhGhABZRpJbzOBrGHCoijQWfcC7dQHaJzsprPy67LItq2BicbGNvf4CyQMc%2Fg%3D%3D; x-amcs-refresh=U2FsdGVkX1%2FjIVBMp41T57t14u5ocdeCDbD%2BtqkyCxWjGwHNyTCfO2fRFiLgQOyweKU5%2FNHnYacWkb3O0r4FnZ4ccbVgIhiLPd2T3ysLhcbEGdQo81%2FRYytxmNmyR%2FZzq4F%2FFDgCisbNHaaumatW6TDIoS0xBzJT35FmeqOSWOqrc%2BRH4U93LSAyuvS%2BuD2Ed2vZ1rf9r7xQ5u%2BxQs5yB7pz2Rt%2FPqJv%2F5dyo1o1weIQagVc5l0B9xbXatl%2BiF0y';

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


