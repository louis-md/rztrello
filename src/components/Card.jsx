import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CardDetails from './CardDetails';
import { useState } from 'react';

export default function Card(props) {
    const [displayOverlay, setOverlay] = useState('none');
    
    return (
        <div className={css(styles.listCard)}>
            <div className={css(styles.cardCover)}></div>
            <div className={css(styles.listCardDetails)}>
                <div className={css(styles.cardName)} onClick={(e) => {setOverlay('flex')}}>
                    <span >{props.card.title}</span>
                </div>
            </div>

            <div className={css(styles.overlay)} style={{display: displayOverlay}}>
                <div className={css(styles.overlayContent)}>
                    <span className={css(styles.closeOverlay)} onClick={(e) => {setOverlay('none')}}>&times;</span>
                    <CardDetails card={props.card}/>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({

    listCard: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,30,66,.25)',
        cursor: 'pointer',
        display: 'block',
        marginBottom: '8px',
        maxWidth: '300px',
        minHeight: '20px',
        position: 'relative',
        textDecoration: 'none',
        zIndex: '0',
    },

    cardCover: {
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
    },

    listCardDetails: {
        overflow: 'hidden',
        padding: '6px 8px 2px',
        position: 'relative',
        zIndex: '0',
    },

    cardName: {
        clear: 'both',
        display: 'block',
        margin: '0 0 4px',
        overflow: 'hidden',
        textDecoration: 'none',
        wordWrap: 'break-word',
        color: '#172b4d',
    },
    
    overlay: {
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,.64)',
        height: '100%',
        justifyContent: 'center',
        left: '0',
        overflowY: 'auto',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '20',
    },

    overlayContent: {
        backgroundColor: '#f4f5f7',
        borderradius: '2px',
        margin: '48px 0 80px',
        overflow: 'hidden',
        position: 'relative',
        width: '768px',
        zIndex: '25',
    },

    closeOverlay: {
        color: '#42526e',
        borderRadius: '50%',
        position: 'absolute',
        top: '0',
        right: '0',
        height: '32px',
        overflow: 'hidden',
        padding: '4px',
        margin: '4px',
        width: '32px',
        zIndex: '2',
        transition: 'background-color 85ms,color 85ms',
        fontSize: '20px',
        lineHeight: '32px',
        webkitFontSmoothing: 'antialiased',
        display: 'inline-block',
        fontFamily: 'trellicons',
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        textDecoration: 'none',
        verticalAlign: 'bottom',
    }
})