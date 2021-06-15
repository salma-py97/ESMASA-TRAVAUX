
import Meta from '../Meta'
import Navbar from './Navbar'
import Footer from './Footer'
import Footer2 from './Footer2'

const Layout = ({children}) => {
  return (
    <div>
      <Meta />
      <Navbar />
        {children}
      {/* <Footer /> */}
      <Footer2 />
    </div>
  )
}

export default Layout
