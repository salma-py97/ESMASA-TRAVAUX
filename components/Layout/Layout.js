
import Meta from '../Meta'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Meta />
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
