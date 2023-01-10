import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}