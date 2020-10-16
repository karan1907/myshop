import React from 'react'
import {Helmet} from 'react-helmet'

const meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
    </Helmet>
    )
}

meta.defaultProps = {
    title: 'Welcome To ProShop',
    keywords: 'electronics, buy electronics, cheap electronics',
    description: 'We sell the best products at cheap.'
}

export default meta
