var PROXY_METHOD = "PROXY 10.200.24.72:9999";

var RULES = [
        "dd.myapp.com",
        "dd.myapp.com",
        "c.gdt.qq.com",
        "mi.gdt.qq.com" ,
        "mapiv2.pinduoduo.com",
        "openinstall.io",
        "sdk.e.qq.com"
    ];

function FindProxyForURL(url, host) {
    function rule_filter(domain) {
        for (var i = 0; i < RULES.length; i++) {
           if (domain.search(RULES[i]) != -1) {
               return false;
           }
        }
        return true;
    }

    if (rule_filter(host) === true) {
        return "DIRECT";
    } else {
            return PROXY_METHOD;
    }
}
