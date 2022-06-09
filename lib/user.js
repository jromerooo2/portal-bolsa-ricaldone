export default async function getMe(){
    const response = await fetch('/api/me')
    const json = await response.json()
    return json
}