import Input from '../../../components/enCode/input'
import Result from '../../../components/enCode/result'

const mainPageContainer = () => {
    return (
        <>
            <div className='enCode'>
                <Input value={value} setValue={setValue} />
                <Result value={value} />
            </div>
        </>
    )
}

export default mainPageContainer