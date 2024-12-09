const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

console.log("CLIENT_URL:", process.env.CLIENT_URL);

passport.use(
	new GoogleStrategy(
	  {
		clientID: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		callbackURL: "http://localhost:5000/auth/google/callback",
		scope: ['profile', 'email'],
	  },
	  function (accessToken, refreshToken, profile, done) {
		if (accessToken && refreshToken) {
		  console.log('Access Token:', accessToken);
		  console.log('Refresh Token:', refreshToken);
		}
		console.log('Profile:', profile);
		done(null, profile);
	  }
	)
  );
  
  

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
