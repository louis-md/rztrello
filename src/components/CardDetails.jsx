import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function CardDetails(props) {
    return (
        <div>
            <div className={css(styles.overlayHeader)}>
                <h2 className={css(styles.overlayTitle)}>
                    {props.card.title}
                </h2>
                <span className={css(styles.overlayCurrentList)}>
                    Dans la liste {props.card.list}
                </span>
            </div>
            <div className={css(styles.overlayMain)}>
                <div className={css(styles.overlayDescription)}>
                    <h3 className={css(styles.overlayDescriptionTitle)}>Description</h3>
                    {/* <span>{props.card.description}</span> */}
                    <div className={css(styles.overlayDescriptionContent)}>Ajoutez une description plus détaillée...</div>
                    </div>
                </div>
            <div className={css(styles.overlaySidebar)}>
                <div className={css(styles.overlayActions)}>

                    <h3 className={css(styles.actionsTitle)}>Actions</h3>
                    <span className={css(styles.follow)}>Suivre</span>
                    <span>{props.card.followed}</span>
                    <span className={css(styles.follow)}>Supprimer</span>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    overlayHeader: {
        margin: '12px 40px 8px 56px',
        minHeight: '32px',
        position: 'relative',
        zIndex: '1',
    },

    overlayTitle: {
        margin: '4px 0 0',
        padding: '8px 0 0',
    },

    overlayCurrentList: {
        cursor: 'default',
        display: 'inline-block',
        margin: '4px 8px 4px 2px',
        color: '#5e6c84',
    },

    overlayMain: {
        float: 'left',
        margin: '0',
        overflowX: 'hidden',
        overflowY: 'auto',
        minHeight: '24px',
        padding: '0 8px 8px 16px',
        position: 'relative',
        width: '552px',
        zIndex: '0',
        clear: 'both',
        marginBottom: '24px',
    },

    overlayDescription: {
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '32px',
        flexDirection: 'column',
        paddingLeft: '42px'
    },

    overlayDescriptionTitle: {
        display: 'inline-block',
        width: 'auto',
        margin: '0',
        minHeight: '18px',
        minWidth: '40px',
    },

    overlayDescriptionContent: {
        backgroundColor: 'rgba(9,30,66,.04)',
        boxShadow: 'none',
        border: 'none',
        borderRadius: '3px',
        display: 'block',
        minHeight: '40px',
        padding: '8px 12px',
        textDecoration: 'none',
        width: '100%'
    },

    overlaySidebar: {
        float: 'right',
        padding: '0 16px 8px 8px',
        width: '168px',
        overflow: 'hidden',
        zIndex: '10',
    },

    overlayActions: {
        clear: 'both',
        marginBottom: '24px',
        position: 'relative',
    },

    actionsTitle: {
        color: '#5e6c84',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '.04em',
        lineHeight: '16px',
        marginTop: '16px',
        textTransform: 'uppercase',
        lineHeight: '20px',
        marginBottom: '-4px',
    },

    follow: {
        backgroundColor: 'rgba(9,30,66,.04)',
        boxShadow: 'none',
        border: 'none',
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'block',
        height: '32px',
        marginTop: '8px',
        maxWidth: '300px',
        overflow: 'hidden',
        padding: '6px 12px',
        position: 'relative',
        textDecoration: 'none',
        textOverflow: 'ellipsis',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        transitionProperty: 'background-color,border-color,box-shadow',
        transitionDuration: '85ms',
        transitionTimingFunction: 'ease',
    }
})