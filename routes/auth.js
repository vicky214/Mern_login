const passport = require('passport')
const emailController = require('../controller/email')

module.exports=(app)=>{

//    <---------------------Route for Login By Email Otp---------------------->

    // app.post('/api/emaillogin',emailController.login);
    app.post('/api/emaillogin',(req,res)=>{
        console.log('logindata',req.body)
    });

    // app.post('emailregister',emailController.register);
    app.post('/api/emailregister',(req,res)=>{
        console.log('rrrrrrr',req.headers.data.email)
    });


//    <---------------------Route for Facebook---------------------->
    
    app.get('/auth/facebook',passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
        res.redirect('/facebookprofile')
    })

//    <---------------------Route for github---------------------->

    app.get('/auth/github',passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github',{scope:['profile','email']})
        ,(req,res)=>{
            console.log('in github')
            res.redirect('/facebookprofile')
    });

//    <---------------------Route for Instagram---------------------->

    app.get('/auth/instagram',passport.authenticate('instagram'));

    app.get('/auth/instagram/callback',passport.authenticate('instagram',{scope:['profile','email']})
        ,(req,res)=>{
            console.log('in instagram')
            res.redirect('/facebookprofile')
            // http://localhost:3000/auth/instagram/callback
    });
    app.get('/logoutinsta',(req,res)=>{
        console.log('logout')
    })
    app.get('/deleteinsta',(req,res)=>{
        console.log('logout')
    })

//    <---------------------Route for Linkedin---------------------->

    app.get('/auth/linkedin',passport.authenticate('linkedin'));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin',{scope:['profile','email']})
    ,(req,res)=>{
      console.log('in linkedin')
      res.redirect('/facebookprofile')
    });

//   <---------------------Route for Linkedin---------------------->

    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }));

    app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
        res.redirect('/profile')
    })

//    <---------------------Route for Other link---------------------->

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user)
    })

    app.get('/api/logout',(req,res)=>{
        req.logout()
        res.redirect('/')
    })

}