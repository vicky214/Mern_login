const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;

const keys = require('../config/key');
const mongoose = require('mongoose');
const User = mongoose.model('Users');

passport.serializeUser((user,done)=>{
        done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})

// for Instagram
passport.use(new InstagramStrategy({
    clientID: keys.INSTAGRAM_CLIENT_ID,
    clientSecret: keys.INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/instagram/callback"
  },
  (accessToken, refreshToken, profile,done)=>{
    User.findOne({userId:profile.id})
    .then((saveduser)=>{
        if(saveduser){
            done(null,saveduser)
        }
        else{
            new User({
                userId:profile.id,
                name:profile.displayName,
            }).save()
            .then((user)=>{
                done(null,user)
            })
        }
    })
}
)
)

// for github
passport.use(new GitHubStrategy({
    clientID: keys.GITHUB_CLIENT_ID,
    clientSecret: keys.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile,done)=>{
    User.findOne({userId:profile.id})
    .then((saveduser)=>{
        if(saveduser){
            done(null,saveduser)
        }
        else{
            new User({
                userId:profile.id,
                name:profile.displayName,
            }).save()
            .then((user)=>{
                done(null,user)
            })
        }
    })
}
)
)


// for google
passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:"/auth/google/callback",
        proxy:true
    },
    (accessToken, refreshToken, profile,done)=>{
        User.findOne({userId:profile.id})
        .then((saveduser)=>{
            if(saveduser){
                done(null,saveduser)
            }
            else{
                new User({
                    userId:profile.id,
                    name:profile.displayName,
                }).save()
                .then((user)=>{
                    done(null,user)
                })
            }
        })
    }
    )
)

// for facebook
passport.use(
    new FacebookStrategy({
        clientID:keys.FACEBOOK_APP_ID,
        clientSecret:keys.FACEBOOK_APP_SECRET,
        callbackURL:"/auth/facebook/callback",
        proxy:true
    },
    (accessToken, refreshToken, profile,done)=>{
        User.findOne({userId:profile.id})
        .then((saveduser)=>{
            if(saveduser){
                done(null,saveduser)
            }
            else{
                new User({
                    UserId:profile.id,
                    name:profile.displayName,
                }).save()
                .then((user)=>{
                    done(null,user)
                })
            }
        })
    }
    )
)

// for linkedin
passport.use(new LinkedInStrategy({
    clientID: keys.linkedinClientID,
    clientSecret: keys.linkedinClientSecret,
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile'],

  }, (accessToken, refreshToken, profile,done)=>{
    User.findOne({userId:profile.id})
    .then((saveduser)=>{
        if(saveduser){
            done(null,saveduser)
        }
        else{
            new User({
                UserId:profile.id,
                name:profile.displayName,
            }).save()
            .then((user)=>{
                done(null,user)
            })
        }
    })
}
)
)