var frame = require("ui/frame");

exports.loginTap = function () {

    frame.topmost().navigate({
        moduleName: "views/home/home"
    });


}