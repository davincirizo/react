import { Toast } from 'bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Hello Boy')
function Error() {
  return (
    <>
        <Toaster/>
    </>
  )
}

export default Error