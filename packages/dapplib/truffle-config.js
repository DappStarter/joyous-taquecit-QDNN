require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy riot magic concert grace brave fringe ghost'; 
let testAccounts = [
"0xe4d61da363075f7d888222a1d76a10ee405f42d9ab4835df8658e416fb0a463c",
"0x6e3597ff00c03e2e2698ae72e4d8421b263750db1770a37b99e11e545bdd00be",
"0xca236f176c7bb9002599070d8b2e11e4d12f14b4aed7926d3eb6d008f748d424",
"0x8535f834023bf4269fc9905af160a4ea1b7586e1bd36504f614103e4251c6da4",
"0x3fb8f93091a08ceb2671443482856d1099a1f345d8ec853a93f12967cb53c23a",
"0x8820c6b78bbae7ee29a94f352b65adf2e609f2793f8af453e54b9579eb58324c",
"0x4606b17044db548887d8571c79a38f219c610b2840076151447628aad4b5071b",
"0x20d76b505b0b1f7427d1f3b645a34376b27aaf153deac8301a17f343fc3cb342",
"0x807ecf208d88e1e3e3da890819134bf5a66044375f36ff9e77e82fe952df0bd6",
"0x5c7b5cdca24e14225ba5a8ca37ca6960282a952b1ba49e5d1c9856afcf3d04ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

