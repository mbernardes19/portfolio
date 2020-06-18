import React from 'react';

export default function FeatureToggle({active, disabled, children}) {
    return (
        <div style={{display: active ? 'block' : disabled ? 'none' : 'none'}}>
            {children}
        </div>
    )
}