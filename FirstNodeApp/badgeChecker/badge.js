/**
 * Check profile badges.
 *
 * @author   Luiz Felipe F.
 * @see      https://lffg.github.io
 * @version  1.0.0
 * @license  MIT
 */
var nick = undefined
document.getElementById('verify').addEventListener('onclick', nick = document.querySelector('nick').value)
document.getElementById('verify').addEventListener('onclick', checkProfile)
(async () => {
    // Chamar a função individualmente:
    await checkProfile(nick)
    await checkProfile('luuuiiiz.')
  })()
  
  
  async function checkProfile (username) {
    const BASE_URI = 'https://www.habbo.com.br/api/public/users'
    const BADGE_CODE = 'ACH_Name1'
    
    let userdata, badges
  
    try {
      const request = await fetch(`${BASE_URI}?name=${username}`)
      userdata = await request.json()
    } catch (e) {
      return void console.log(`[STATUS] O usuário ${username} não existe.`)
    }
  
    try {
      const request = await fetch(`${BASE_URI}/${userdata.uniqueId}/badges`)
      badges = await request.json()
  
      if (badges.findIndex(({ code }) => code === BADGE_CODE) === -1) {
        return void console.log(`[STATUS] O usuário ${username} nunca trocou o nick.`)
      }
    
      return void console.warn(`[STATUS] O usuário ${username} já trocou de nick`)
    } catch (e) {
      return void console.error(`[STATUS] O usuário ${username} tem as opções de privacidade ativadas.`)
    }
  }