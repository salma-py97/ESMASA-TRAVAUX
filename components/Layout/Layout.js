
import Meta from '../Meta'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import ProgressBar from './ProgressBar'

const Layout = ({children}) => {
  return (
    <div>
      <Meta />
      <ProgressBar />
      <Navbar />
        {children}
      <Footer2 />
    </div>
  )
}

export default Layout
