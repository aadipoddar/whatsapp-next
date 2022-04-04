import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Login'
import { auth, db } from '../firebase'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  if (true) return <Loading />

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
