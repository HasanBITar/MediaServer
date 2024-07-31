import Uploady from '@rpldy/uploady';
import FileInputHelper from './FileInputHelper';
import { BACKEND_API, API } from '../../config';

const FileInput = ({ label, className, setValue }) => {
    return (
        <Uploady
            destination={{ url: BACKEND_API + API.upload }}
            multiple={false}
            accept=".jpg,.png"
        >
            <FileInputHelper label={label} className={className} setValue={setValue} />
        </Uploady>
    );
}

export default FileInput;

