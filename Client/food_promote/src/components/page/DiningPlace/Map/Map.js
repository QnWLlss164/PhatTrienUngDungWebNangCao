import React from 'react'

export default function Map({ location_url }) {
    return (

        <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', margin: '20px 0' }}>
            <iframe src={location_url}
                title='map'
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
