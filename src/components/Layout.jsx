import Board from './Board'
import DocumentPane from './DocumentPane'
import './Layout.css'

export const Layout = () => {


    return(
        <div className='app-wrapper'>
            <div className='document-wrapper'>
                <DocumentPane />
            </div>
        </div>
    )
}

export default Layout