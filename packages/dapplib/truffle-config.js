require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind hub include clock bottom six'; 
let testAccounts = [
"0x7896362c4079b57d28519d0f69d6ab9ced4d1b5dbf131fefcf423a8da801c8da",
"0xf5415eca20ad712625cb2b6bdc0992d68a879a5a37c420c273befc0b1848ef4b",
"0x354e10a579d6084485c3d42ee026011ba278df03ccfb6111430ba4ec2a751b9d",
"0x47ca7cce12507a854fa74a8cf1df64d63de83e9e13b3828d6f3eb90125410c55",
"0x13b937fdec9278091154f48bd67bedad5c01e55fc2d2297fdcec7fbc16d02c91",
"0x75945696f0f417c6e638963448b024bd65dfe142c99c81ad3128ad469d726011",
"0x63db98a42b0fa7c52ed494456c7378a86f2be54352452ca41265176c31a70282",
"0xf7125bd2adadcde7f023ab306f3819ec9011f3030946c67396fa669b8171f7c1",
"0x8b3221a844a8ad9eb8250b172080209ba4620720d1a323cb08bbc30fb60420bf",
"0xbacec2930ab6357113de5d441aae76dc94b7ce74daba6fad807319a1b766e68c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

