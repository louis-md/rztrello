import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

export default function NewCard(props) {
    const [cardTitle, setCardTitle] = useState("");

    function handleChange(event) {  
        const {value} = event.target;
        setCardTitle(value);
    }
    
    return (
        <div className={css(styles.cardComposer)}>
            <div className={css(styles.cardComposerCard)}>
                <div className={css(styles.cardComposerDetails)}>
                    <textarea className={css(styles.cardComposerTextArea)} type='text' value={cardTitle} onChange={e => {handleChange(e)}} placeholder="Saisissez un titre pour cette carte…"/>
                </div>
            </div>
            <div className={css(styles.cardComposerControls)}>
                <button className={css(styles.btn)} onClick={e => props.createCard(cardTitle)}>Ajouter une carte</button>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#5aac44',
        boxShadow: 'none',
        border: 'none',
        color: '#fff',
        float: 'left',
        minHeight: '32px',
        height: '32px',
        cursor: 'pointer',
        display: 'inline-block',
        fontWeight: '400',
        lineHeight: '20px',
        margin: '4px 4px 8px 0',
        padding: '6px 12px',
        textAlign: 'center',
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        borderRadius: '3px',
        transitionProperty: 'background-color,border-color,box-shadow',
        transitionDuration: '85ms',
        transitionTimingFunction: 'ease',
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',
        fontSize: '14px',
        font: 'inherit',
        userSelect: 'none',
        whiteSpace: 'pre',
        alignItems: 'flex-start',
        webkitWritingMode: 'horizontal-tb !important',
        textRendering: 'auto',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        textTransform: 'none',
        textIndent: '0px',
        textShadow: 'none',
        webkitRtlOrdering: 'logical',
    },

    cardComposer: {
        paddingBottom: '8px',
    },

    cardComposerCard: {
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

    cardComposerDetails: {
        overflow: 'hidden',
        padding: '6px 8px 2px',
        position: 'relative',
        zIndex: '0',
    },

    cardComposerTextArea: {
        background: '#fff',
        border: 'none',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        margin: '0',
        transition: 'margin 85ms ease-in,background 85ms ease-in',
        width: '100%',
        color: '#172b4d',
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        borderRadius: '3px',
        lineHeight: '20px',
        padding: '8px 12px',
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',
        fontSize: '14px',
        webkitWritingMode: 'horizontal-tb !important',
        textRendering: 'auto',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        textTransform: 'none',
        textindent: '0px',
        textShadow: 'none',
        textAlign: 'start',
        cursor: 'text',
        zIndex: '0',

    },

    cardComposerControls: {
        float: 'left',
    }
})