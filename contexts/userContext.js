import { createContext, useEffect, useState } from 'react'

const initialState = {
  user: {
    name: 'Tim',
    email: 'tim.smith.hdg@gmail.com',
    tagline: 'I like cake',
    bio: `I'm baby stumptown raw denim ennui bicycle rights cliche tousled. Umami brunch ramps kale chips portland hot chicken, poke tousled pinterest unicorn marfa pop-up. Cold-pressed copper mug bitters intelligentsia green juice pok pok pabst hoodie. Distillery drinking vinegar cronut four dollar toast. Authentic street art cred selfies. Flexitarian hell of humblebrag celiac cred distillery banjo. Cronut cardigan heirloom hashtag.`,
  },
  updateUser: () => {},
}
const UserContext = createContext(initialState)

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Tim',
    email: 'tim.smith.hdg@gmail.com',
    tagline: 'I like cake',
    bio: `I'm baby stumptown raw denim ennui bicycle rights cliche tousled. Umami brunch ramps kale chips portland hot chicken, poke tousled pinterest unicorn marfa pop-up. Cold-pressed copper mug bitters intelligentsia green juice pok pok pabst hoodie. Distillery drinking vinegar cronut four dollar toast. Authentic street art cred selfies. Flexitarian hell of humblebrag celiac cred distillery banjo. Cronut cardigan heirloom hashtag.`,
  })

  useEffect(() => {
    if (localStorage.getItem('user') == null) return
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const updateUser = (newUser) => {
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
