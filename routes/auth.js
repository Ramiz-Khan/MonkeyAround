var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup',

            //failureFlash: true
        }
 
    ));

    app.get('/dashboard',isLoggedIn, authController.dashboard);

    app.get('/logout',authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
	        successRedirect: '/dashboard',
	 
	        failureRedirect: '/signin',

	        //failureFlash: true
	    }
	 
	));

	  app.get('/creategame',isLoggedIn, authController.creategame);

	    app.get('/logout',authController.logout);

	    app.post('/signin', passport.authenticate('local-signin', {
		        successRedirect: '/creategame',
		 
		        failureRedirect: '/signin',

		        //failureFlash: true
		    }
		 
		));

	  app.get('/viewgames',isLoggedIn, authController.viewgames);

	    app.get('/logout',authController.logout);

	    app.post('/signin', passport.authenticate('local-signin', {
		        successRedirect: '/viewgames',
		 
		        failureRedirect: '/signin',

		        //failureFlash: true
		    }
		 
		));

    function isLoggedIn(req, res, next) {
 
	    if (req.isAuthenticated())
	     
	        return next();
	         
	    res.redirect('/signin');
	 
	}
 
}
