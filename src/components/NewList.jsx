import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

export default function NewList(props) {
    const [listTitle, setListTitle] = useState("");

    function handleChange(event) {  
        const {value} = event.target;
        setListTitle(value);
    }
    
    return (
        <div>
            <input className={css(styles.newListInput)} type='text' value={listTitle} placeholder="Saisissez le titre de la liste…" onChange={e => {handleChange(e)}} />
            <button className={css(styles.btn)} onClick={e => props.createList(listTitle)}>Ajouter une liste</button>
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
        margin: '8px 4px 0 0',
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

    newListInput: {
        background: '#fff',
        border: 'none',
        boxShadow: 'inset 0 0 0 2px #0079bf',
        display: 'block',
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
        },
})