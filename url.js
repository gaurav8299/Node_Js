var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring')

var a = url.parse("https://www.google.com/search?q=what+is+data+science&rlz=1C1GCEB_enIN969IN969&oq=what+is+data&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIKCAkQABixAxiABNIBCDc2MThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8")
console.log(a)
console.log(a.query)

var q = querystring.parse('q=what+is+data+science&rlz=1C1GCEB_enIN969IN969&oq=what+is+data&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIKCAkQABixAxiABNIBCDc2MThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8')
console.log(q);