import axios from 'axios'

export default axios.create({
    baseURL: 'http://ef29-2607-fb90-e51e-a9e7-9491-b32c-30ce-e617.ngrok.io'
})

// (async function () {
//     const url = await ngrok.connect(3000)
//     const api = ngrok.getApi()
//     let data = await api.get('api/tunnels')
//     data = JSON.parse(data)
//     let dict = { domain: data.tunnels[0].public_url }
//     await fs.writeFile('config.json', JSON.stringify(dict))
//     console.log('saved ' + data.tunnels[0].public_url)
// })()

// const ngrokFunc = async () => {
//     const url = await ngrok.connect(3000)
//     const api = ngrok.getApi()
//     let data = await api.get('api/tunnels')
//     data = JSON.parse(data)
//     let dict = { domain: data.tunnels[0].public_url }
//     await fs.writeFile('config.json', JSON.stringify(dict))
//     console.log('saved ' + data.tunnels[0].public_url)
// }
