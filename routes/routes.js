module.exports = function(app,passport) {

    app.get('/', function(req, res) {
        res.render('index.html');
    });

    app.get('/login', function(req, res) {
        res.render('login.html');
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    }),
    function(req, res) {
        console.log("success");

        if (req.body.remember) {
            req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('/');
    });

    app.get('/signup', function(req, res) {
        res.render( 'signup.html');
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login',
        failureRedirect : '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req,res) {
        res.render('profile.html', {
            user : req.user
        });
    });

    app.get('logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

        res.redirect('/');
}