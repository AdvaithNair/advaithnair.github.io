import React from 'react';
import moment from 'moment';

interface Props {
    image: string;
    description: string;
}

const FunFactsBox: React.FC<Props> = ({ image, description }) => {
    const isAge: boolean = image === 'Age';
    let imageFile: string = '';
    let age: number = 10;

    if (!isAge) imageFile = require(`../../images/About/Facts/${image}.png`);
    else {
        age = moment().diff(moment('20010724', 'YYYYMMDD'), 'years');
        description = `I'm ${age} years old`;
    }

    if (image === 'Dog')
        description = `I have a ${moment().diff(
            moment('20170625', 'YYYYMMDD'),
            'years'
        )} year old dog named Kulfi`;

    return (
        <div className='skill-box'>
            {!isAge ? (
                <img
                    src={imageFile}
                    alt={image}
                    className='skill-image'
                    style={{ borderRadius: 5 }}
                ></img>
            ) : (
                <div className='age-box'>
                    <div className='age'>
                        <h1 className='text-center'>{age}</h1>
                    </div>
                </div>
            )}
            <p className='text-center' style={{ marginTop: 20 }}>
                {description}
            </p>
        </div>
    );
};

export default FunFactsBox;
