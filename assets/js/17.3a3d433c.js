(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{358:function(e,t,s){"use strict";s.r(t);var a=s(7),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ethereum-provider-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-provider-api"}},[e._v("#")]),e._v(" Ethereum Provider API")]),e._v(" "),s("p",[e._v("MetaMask injects a global API into websites visited by its users at "),s("code",[e._v("window.ethereum")]),e._v(".\nThis API allows websites to request user login, load data from blockchains the user has a connection to, and suggest that the user sign messages and transactions.\nYou can use this API to detect the user of an Ethereum browser.")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("typeof")]),e._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ethereum "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'undefined'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Ethereum user detected. You can now use the provider.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" provider "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ethereum'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("The provider API itself is very simple, and wraps "),s("a",{attrs:{href:"./rpc-api"}},[e._v("Ethereum JSON-RPC")]),e._v(" formatted messages, which is why developers usually use a convenience library for interacting with the provider,\nlike "),s("a",{attrs:{href:"https://www.npmjs.com/package/web3",target:"_blank",rel:"noopener noreferrer"}},[e._v("web3"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.npmjs.com/package/ethers",target:"_blank",rel:"noopener noreferrer"}},[e._v("ethers"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.trufflesuite.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("truffle"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://framework.embarklabs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Embark"),s("OutboundLink")],1),e._v(", or others.\nFrom those tools, you can generally find sufficient documentation to interact with the provider, without reading this lower-level API.")]),e._v(" "),s("p",[e._v("However, for developers of convenience libraries, and for developers who would like to use features that are not yet supported by their favorite libraries, knowledge of the provider API is essential.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#upcoming-provider-changes"}},[e._v("Upcoming Provider Changes")])]),s("li",[s("a",{attrs:{href:"#list-of-chain-and-network-ids"}},[e._v("List of Chain and Network IDs")])]),s("li",[s("a",{attrs:{href:"#properties"}},[e._v("Properties")]),s("ul",[s("li",[s("a",{attrs:{href:"#ethereum-ismetamask"}},[e._v("ethereum.isMetaMask")])]),s("li",[s("a",{attrs:{href:"#ethereum-autorefreshonnetworkchange"}},[e._v("ethereum.autoRefreshOnNetworkChange")])]),s("li",[s("a",{attrs:{href:"#ethereum-networkversion-deprecated"}},[e._v("ethereum.networkVersion (DEPRECATED)")])]),s("li",[s("a",{attrs:{href:"#ethereum-selectedaddress-deprecated"}},[e._v("ethereum.selectedAddress (DEPRECATED)")])])])]),s("li",[s("a",{attrs:{href:"#methods"}},[e._v("Methods")]),s("ul",[s("li",[s("a",{attrs:{href:"#ethereum-sendasync-payload-callback"}},[e._v("ethereum.sendAsync(payload, callback)")])]),s("li",[s("a",{attrs:{href:"#ethereum-sendasync-method-eth-requestaccounts-callback"}},[e._v("ethereum.sendAsync({ method: 'eth_requestAccounts'}, callback)")])]),s("li",[s("a",{attrs:{href:"#ethereum-enable-deprecated"}},[e._v("ethereum.enable() (DEPRECATED)")])]),s("li",[s("a",{attrs:{href:"#ethereum-send-payload-callback-deprecated"}},[e._v("ethereum.send(payload, callback) (DEPRECATED)")])]),s("li",[s("a",{attrs:{href:"#ethereum-on-eventname-callback"}},[e._v("ethereum.on(eventName, callback)")])])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"upcoming-provider-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upcoming-provider-changes"}},[e._v("#")]),e._v(" Upcoming Provider Changes")]),e._v(" "),s("p",[e._v("In "),s("strong",[e._v("Q4 2020")]),e._v(", we will be making some breaking changes to the provider API. The biggest change is that we will stop injecting "),s("code",[e._v("window.web3")]),e._v(". We encourage you to\n"),s("a",{attrs:{href:"https://github.com/MetaMask/metamask-extension/issues/8077",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more about this here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"list-of-chain-and-network-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-chain-and-network-ids"}},[e._v("#")]),e._v(" List of Chain and Network IDs")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The chain and network IDs of these chains are the same.")]),e._v(" "),s("p",[e._v("Network IDs are decimal strings, while chain IDs are hexadecimal strings.")])]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ethereum Main Network\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Morden Test network\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Ropsten Test Network\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Rinkeby Test Network\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'5'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Goerli Test Network\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'42'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Kovan Test Network\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("h3",{attrs:{id:"ethereum-ismetamask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-ismetamask"}},[e._v("#")]),e._v(" ethereum.isMetaMask")]),e._v(" "),s("p",[e._v("Returns "),s("code",[e._v("true")]),e._v(" or "),s("code",[e._v("false")]),e._v(", representing whether the user has MetaMask installed.")]),e._v(" "),s("h3",{attrs:{id:"ethereum-autorefreshonnetworkchange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-autorefreshonnetworkchange"}},[e._v("#")]),e._v(" ethereum.autoRefreshOnNetworkChange")]),e._v(" "),s("p",[e._v("When the network is changed, MetaMask will reload any pages that have made requests to the provider.\nThis automatic reload behavior will be removed in a future release of MetaMask, but in the meantime it can be disabled with this flag.")]),e._v(" "),s("p",[e._v("To disable auto-refresh on a network change you can do:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("autoRefreshOnNetworkChange "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("This can be toggled on or off at any time.")]),e._v(" "),s("h3",{attrs:{id:"ethereum-networkversion-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-networkversion-deprecated"}},[e._v("#")]),e._v(" ethereum.networkVersion (DEPRECATED)")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Use the "),s("code",[e._v("net_version")]),e._v(" RPC method via "),s("code",[e._v("ethereum.sendAsync()")]),e._v(" instead.")])]),e._v(" "),s("p",[e._v("Returns a numeric string representing the current blockchain's network ID.")]),e._v(" "),s("h3",{attrs:{id:"ethereum-selectedaddress-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-selectedaddress-deprecated"}},[e._v("#")]),e._v(" ethereum.selectedAddress (DEPRECATED)")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("ethereum.sendAsync({ method: 'eth_accounts' }, callback)")]),e._v(" instead.")])]),e._v(" "),s("p",[e._v("Returns a hex-prefixed string representing the current user's selected address, ex: "),s("code",[e._v('"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"')]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),s("h3",{attrs:{id:"ethereum-sendasync-payload-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-sendasync-payload-callback"}},[e._v("#")]),e._v(" ethereum.sendAsync(payload, callback)")]),e._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("JsonRpcResponse")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  jsonrpc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  result"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("payload"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" JsonRpcResponse\n")])])]),s("p",[s("em",[e._v("To be superseded by the Promise-returning "),s("code",[e._v("ethereum.send()")]),e._v(" method in")]),e._v(" "),s("em",[s("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 1193"),s("OutboundLink")],1),e._v(". (See also "),s("strong",[s("a",{attrs:{href:"#new-api"}},[e._v("the new API")])]),e._v(".)")])]),e._v(" "),s("p",[e._v("Sends a message to the web3 browser. Message format maps to the format of\n"),s("a",{attrs:{href:"https://eth.wiki/json-rpc/API#json-rpc-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Ethereum JSON-RPC API"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Here's an example of everyone's favorite method, "),s("code",[e._v("eth_sendTransaction")]),e._v(", which is both how Ether is sent, and how smart contract methods are called:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0xb60e8dd61c5d32be8058bb8eb970870f07233155'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    to"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0xd46e8dd67c5d32be8058bb8eb970870f07244567'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    gas"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0x76c0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 30400")]),e._v("\n    gasPrice"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0x9184e72a000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 10000000000000")]),e._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0x9184e72a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 2441406250")]),e._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'eth_sendTransaction'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    params"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Provide the user's account to use.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Handle the error")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This always returns a JSON RPC response object.")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The result varies by method, per the RPC method specification")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// For example, this method will return a transaction hash on success.")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"ethereum-sendasync-method-eth-requestaccounts-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-sendasync-method-eth-requestaccounts-callback"}},[e._v("#")]),e._v(" ethereum.sendAsync({ method: 'eth_requestAccounts'}, callback)")]),e._v(" "),s("p",[e._v("Requests to view the user's Ethereum address.")]),e._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'eth_requestAccounts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Handle error. Likely the user rejected the login")]),e._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" accounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You now have an array of accounts!")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Currently only ever one, e.g.:")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"ethereum-enable-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-enable-deprecated"}},[e._v("#")]),e._v(" ethereum.enable() (DEPRECATED)")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("ethereum.sendAsync({ method: 'eth_requestAccounts' }, callback)")]),e._v(" instead.")])]),e._v(" "),s("p",[e._v("Requests to view the user's Ethereum address.\nReturns a promise of an array of hex-prefixed ethereum address strings.")]),e._v(" "),s("h3",{attrs:{id:"ethereum-send-payload-callback-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-send-payload-callback-deprecated"}},[e._v("#")]),e._v(" ethereum.send(payload, callback) (DEPRECATED)")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("ethereum.sendAsync()")]),e._v(" instead.")])]),e._v(" "),s("p",[e._v("See "),s("code",[e._v("ethereum.sendAsync")]),e._v(", directly below.")]),e._v(" "),s("h3",{attrs:{id:"ethereum-on-eventname-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-on-eventname-callback"}},[e._v("#")]),e._v(" ethereum.on(eventName, callback)")]),e._v(" "),s("p",[e._v("The provider supports listening for some events:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("accountsChanged")]),e._v(", returns the currently available account(s).")]),e._v(" "),s("li",[s("code",[e._v("networkChanged")]),e._v(", returns the current network ID as a decimal string.")]),e._v(" "),s("li",[s("code",[e._v("chainIdChanged")]),e._v(", returns the current chain ID as a hexadecimal string.")])]),e._v(" "),s("h4",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'accountsChanged'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("accounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Time to reload your interface with accounts[0]!")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" The "),s("code",[e._v("networkChanged")]),e._v(" event is only useful if you disable auto-refresh on network\nchange by setting "),s("a",{attrs:{href:"#ethereum-autorefreshonnetworkchange"}},[s("code",[e._v("ethereum.autoRefreshOnNetworkChange")])]),e._v(" to "),s("code",[e._v("false")]),e._v(".\nOtherwise, MetaMask will default to auto-reloading pages upon network change if they have made requests to the provider.")])])}),[],!1,null,null,null);t.default=r.exports}}]);