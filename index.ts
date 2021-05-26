import { WalletConnectWallet } from '@celo/wallet-walletconnect'
import * as QRCode from 'qrcode'

async function connect() {
  const wallet = new WalletConnectWallet({
    connect: {
      metadata: {
        name: 'The name of your awesome DApp',
        description: 'Your DApp description',
        url: 'https://example.com',
        icons: ['https://example.com/favicon.ico'],
      },
    },
  })

  const uri:any = await wallet.getUri()

  console.log(uri)

  QRCode.toString( uri ,{type:'terminal'}, function (err:any, url:any) {
    console.log(url)
  })
  // display this uri as a QR code to the user
  await wallet.init()

  console.log('here')
}

connect()