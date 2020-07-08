const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  // winston.add(winston.transports.MongoDB, { 
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });  
}



// const winston = require('winston');
// //require('winston-mongodb');
// require('express-async-errors');

// module.exports = function() {
//     process.on('uncaughtException', (ex) => {
//         winston.transports.Console({ colorize: true, prettyPrint: true});
//         winston.error(ex.message, ex);
//         process.exit(0);
//       });
      
//       process.on('unhandledRejection', (ex) => {
//         winston.error(ex.message, ex);
//         process.exit(0);
//       });
      
//       //better way to deal with above 6 lines
      
//       // winston.handleExceptions(
//       //   new winston.transports.File({
//       //     filename: 'uncaughtExceptions.log'
//       //   })
//       // );
      
//       // process.on('unhandledRejection', (ex) => {
//       //   throw ex;
//       // });
      
//       winston.add(new winston.transports.File ({ 
//         filename:'logfile.log',
//         format: winston.format.combine(
//           winston.format.timestamp(),
//           winston.format.json()
//         )}));
      
//       winston.add(new winston.transports.MongoDB ({
//         db: 'mongodb://localhost/vidlynode',
//         level: 'info'
//       }));
// }