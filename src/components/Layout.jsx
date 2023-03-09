import Board from './Board'
import DocumentPane from './DocumentPane'
import './Layout.css'

export const Layout = () => {


    return(
        <div className='app-wrapper'>
            <div className='document-wrapper'>
                <DocumentPane />
            </div>
        <div className='board-wrapper'>
            <Board/>
        </div>
        </div>
    )
}

export default Layout