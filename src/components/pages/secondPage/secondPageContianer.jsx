import DeCodeInput from '../../../components/deCode/deCodeInput'
import DeCodeResult from '../../../components/deCode/deCodeResult'
import './secondPage.css'

const secondPageContianer = () => {
    return (<>
        <div className='deCode'>
            <DeCodeInput value={DeCodeValue} setValue={setDeCodeValue} />
            <DeCodeResult value={DeCodeValue} />
        </div>
    </>)
}

export default secondPageContianer