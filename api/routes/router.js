var express = require('express');
var router = express.Router();
var User = require('../models/user');
var id;
// GET route for reading data
router.get('/', function (req, res, next) {
  req.session.userId = user._id;
  return res.sendFile(path.join('.../index.html'));
});


//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return res.redirect("http://localhost:4200/passworddonotmatch");
  }
  

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf &&
    req.body.aboutMe  ) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
      aboutMe: req.body.aboutMe,
      
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        id = user._id;
        return res.redirect("http://localhost:4200/login");
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return res.redirect("http://localhost:4200/wrong-email-or-password");
      } else {
        req.session.userId = user._id;
        id = user._id;
        return res.redirect("http://localhost:4200/profile");
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return res.redirect("http://localhost:4200/allfieldrequired");
  }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
  console.log('hit get profile!');
  User.findById(id)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
          req.session.userId = user._id;
          console.log('hit get profile!');
          return res.json(user);
         // return res.send(' <center><p> '+user.username +'<br>'+ user.email+'</p></center>');
        
      }
    });
});

// GET route after registering
router.get('/bookmark', function (req, res, next) {
  console.log('hit get profile!');
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
          req.session.userId = user._id;
          id = user._id;
          console.log('hit get profile!');
          //return res.send(' <center><p> '+user.bookmarks +'<br>'+ user.email+'</p></center>');
          return res.send(' <center><p> '+user.username +'<br>'+ user.email+'</p></center>');
      }
    });
});

// GET route after bookmarking receipe
router.post('/update', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.redirect("http://localhost:4200/notauthorized");
        } else {
  
          var userData = {
            email: req.body.email,
            username: req.body.username,
            password: user.password,
            passwordConf: user.passwordConf,
            aboutMe: req.body.aboutMe,
            bookmarks: user.bookmarks,
            receipe: user.receipe
          }

          User.findByIdAndUpdate(req.session.userId, userData, function (error, user) {
            if (error) {
              return next(error);
            } else {
              console.log('updated user!!');
              req.session.userId = user._id;
              id = user._id;
              return res.redirect("http://localhost:4200/profile");
            }
          });
        }
      }
    });
});

// GET route after removing bookmarking receipe
router.post('/remove', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.redirect("http://localhost:4200/notauthorized");
        } else {
          console.log('req.body.name');
          console.log(req.body.name);
          console.log(user.bookmarks);
          var bookmarkData = {
              name: req.body.name,
              category: req.body.cat
          }
          user.bookmarks.pop(bookmarkData);
          console.log(user.bookmarks);

          var userData = {
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConf: user.passwordConf,
            aboutMe: req.body.aboutMe,
            bookmarks: user.bookmarks,
            receipe: user.receipe
          }

          User.findByIdAndUpdate(req.session.userId, userData, function (error, user) {
            if (error) {
              return next(error);
            } else {
              console.log('removed bookm!!');
              req.session.userId = user._id;
              id = user._id;
              return res.redirect("http://localhost:4200/bookmarkwall");
            }
          });
        }
      }
    });
});

// GET route after bookmarking receipe
router.post('/add', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.redirect("http://localhost:4200/notauthorized");
        } else {
          console.log('req.body.name');
          console.log(req.body.name);
          console.log(user.bookmarks);
          var bookmarkData = {
              name: req.body.name,
              category: req.body.cat,
              imageUrl: req.body.imageUrl,
               apiId : req.body.apiId
          }
          user.bookmarks.push(bookmarkData);
          console.log(user.bookmarks);

          var userData = {
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConf: user.passwordConf,
            bookmarks: user.bookmarks,
            receipe: user.receipe
          }

          User.findByIdAndUpdate(req.session.userId, userData, function (error, user) {
            if (error) {
              return next(error);
            } else {
              console.log('updated bookm!!');
              req.session.userId = user._id;
              id = user._id;
              return res.redirect("http://localhost:4200/bookmarkwall");
            }
          });
        }
      }
    });
});


// GET route after adding own receipe
router.post('/addReceipe', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.redirect("http://localhost:4200/notauthorized");
        } else {
          console.log('req.body.name');
          console.log(req.body.name);
          console.log(user.bookmarks);
          var bookmarkData = {
              name: req.body.name,
              category: req.body.cat
          }
          user.receipe.push(bookmarkData);
          console.log(user.bookmarks);

          var userData = {
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConf: user.passwordConf,
            bookmarks: user.bookmarks,
            receipe: user.receipe
          }

          User.findByIdAndUpdate(req.session.userId, userData, function (error, user) {
            if (error) {
              return next(error);
            } else {
              console.log('updated bookm!!');
              req.session.userId = user._id;
              return res.redirect("http://localhost:4200/");
            }
          });
        }
      }
    });
});

// GET route after deleting own receipe
router.post('/deleteReceipe', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return res.redirect("http://localhost:4200/notauthorized");
        } else {
          // console.log('req.body.name');
          // console.log(req.body.name);
          // console.log(user.bookmarks);
          var bookmarkData = {
              name: req.body.name,
              category: req.body.cat
          }
          user.receipe.pop(bookmarkData);
          console.log(user.bookmarks);

          var userData = {
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConf: user.passwordConf,
            bookmarks: user.bookmarks,
            receipe: user.receipe
          }

          User.findByIdAndUpdate(req.session.userId, userData, function (error, user) {
            if (error) {
              return next(error);
            } else {
              console.log('updated bookm!!');
              req.session.userId = user._id;
              return res.redirect("http://localhost:4200/");
            }
          });
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("http://localhost:4200/");
      }
    });
  }
});

module.exports = router;