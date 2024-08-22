import { Typography } from '@material-tailwind/react';

const Sectitle = ({secTitle}) => {
    return (
        <div>
            <Typography variant="h4" className='py-4 sec-title capitalize'>
                {secTitle} :
            </Typography>
        </div>
    );
};

export default Sectitle;