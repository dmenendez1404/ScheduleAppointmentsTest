import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle";

/*.MuiInputLabel-outlined .MuiInputLabel-outlined*/

const CustomPicture = ({...props}) => {
    const {
        image,
        type = 'banner',
        width = 240,
        heigth = 150,
        children
    } = props;

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(count <= 5)
            setCount(count + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count]);

    useEffect(() => {
        setCount(0);
    }, [props.image]);
    return (
        <>
            {type === 'banner' ?
                <picture>
                    {
                        count > 4 ?
                            <source media="(min-width: 1000px)" srcSet={image.full}/> :
                            count > 2 ?
                                <source media="(min-width: 700px)" srcSet={image.regular}/> :
                                count > 1 ?
                                    <source media="(min-width: 465px)" srcSet={image.small}/> : null
                    }
                    <img style={{height: heigth, width: width}} src={image.thumb} alt='default'/>
                    {children}
                </picture> :
                <picture>
                    {
                        count > 5 ?
                            <source media="(min-width: 1000px)" srcSet={image.large}/> :
                            count > 3 ?
                                <source media="(min-width: 700px)" srcSet={image.medium}/> :
                                count > 1 ?
                                    <source media="(min-width: 465px)" srcSet={image.small}/> : null}
                    < img style={{
                        width: width, height: heigth, borderRadius: '50%'
                    }} src={image.small} alt='default'/>
                </picture>

            }
            </>
    );
}

CustomPicture.propTypes = {
    type: PropTypes.oneOf(['banner', 'profile']).isRequired,
    image: PropTypes.object.isRequired,
};

export default withStyles(customInputStyle)(CustomPicture);
