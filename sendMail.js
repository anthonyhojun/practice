const sendmail = require('sendmail')();
 
sendmail({
    from: 'hidden@gmail.com',
    to: 'hoj.jun@gmail.com',
    subject: 'testing sendmail2',
    html: 'wuw this is dope ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
