var server = require('net').createServer();
    
module.exports = function(callback) {      
    var address     = server.listen(0).address();
    
    if (address.address === '0.0.0.0') {
        address.address = '127.0.0.1';
    }
        
    address.connection  = 'tcp://'+address.address+':'+address.port;
        
    server.close(function() {
        callback && callback(address);
    });
    
    return address;
}


