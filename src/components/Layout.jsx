import Board from './Board'
import DocumentPane from './DocumentPane'
import './Layout.css'

export const Layout = () => {


    return(
        <div className='app-container'>
            <div className='document-container'>
                <DocumentPane />
            </div>
            <div className='board-container'>
                <Board />
            </div>
        </div>
    )
}

export default Layout